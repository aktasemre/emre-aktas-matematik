import { readFile } from "node:fs/promises";

const readJson = async (path) => JSON.parse(await readFile(path, "utf8"));
const manifest = await readJson(new URL("../src/data/resources.json", import.meta.url));
const generated = await readJson(
  new URL("../src/data/resource-links.generated.json", import.meta.url)
);
const mebi = await readJson(
  new URL("../src/data/mebi-practice.generated.json", import.meta.url)
);

const urls = new Set();
const collectUrls = (value) => {
  if (typeof value === "string" && /^https?:\/\//.test(value)) {
    urls.add(value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach(collectUrls);
    return;
  }
  if (value && typeof value === "object") {
    Object.values(value).forEach(collectUrls);
  }
};

collectUrls(manifest);
collectUrls(generated);
collectUrls(mebi);

async function requestUrl(url) {
  const headers = { "user-agent": "MatematikAkademiLinkCheck/1.0" };
  let response = await fetch(url, {
    method: "HEAD",
    redirect: "follow",
    headers,
    signal: AbortSignal.timeout(20_000),
  });

  if ([403, 405].includes(response.status)) {
    response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      headers: { ...headers, range: "bytes=0-1023" },
      signal: AbortSignal.timeout(20_000),
    });
  }

  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.status;
}

async function checkUrl(url) {
  let lastError;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      return await requestUrl(url);
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 750));
    }
  }

  throw lastError;
}

const queue = [...urls];
const failures = [];
let checked = 0;

async function worker() {
  while (queue.length) {
    const url = queue.shift();
    try {
      await checkUrl(url);
      checked += 1;
    } catch (error) {
      failures.push({ url, error: error instanceof Error ? error.message : String(error) });
    }
  }
}

await Promise.all(Array.from({ length: Math.min(4, queue.length) }, () => worker()));

if (failures.length) {
  failures.forEach(({ url, error }) => console.error(`${error} | ${url}`));
  throw new Error(`${failures.length} bağlantı doğrulanamadı.`);
}

console.log(`${checked} dış bağlantı doğrulandı.`);
