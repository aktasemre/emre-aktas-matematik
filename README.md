# Matematik Akademi

İstanbul Avrupa Yakası'nda LGS, YKS ve ara sınıflar için matematik özel ders sitesi.

## Teknoloji

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel hedefli yayınlama
- Admin paneli yok; içerik Git üzerinden yönetilecek

## Komutlar

```bash
npm run dev
npm run lint
npm run typecheck
npm test
npm run check:links
npm run build
```

Kaynak bağlantılarını güncellemek için:

```bash
npm run sync:meb-resources
npm run sync:mebi-practice
```

Senkronizasyon betikleri, elle yönetilen `src/data/resources.json` manifestini değiştirmez. Doğrulanmış bağlantıları ve kontrol tarihini `src/data/*.generated.json` dosyalarına yazar.

## Domain

Birincil domain:

```text
https://www.matematik-akademi.com/
```

Kök domain yayında `www` adresine yönlendirilmelidir.

## Dokümanlar

Planlama dokümanları [docs](./docs) klasöründe tutulur.
