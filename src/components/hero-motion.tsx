type HeroMotionProps = {
  variant: "progress" | "route" | "foundation";
};

const variants = {
  progress: {
    path: "M42 430 C126 390 158 305 226 322 S350 224 438 126",
    nodes: [
      [42, 430],
      [226, 322],
      [438, 126],
    ],
  },
  route: {
    path: "M42 126 C116 96 130 214 218 226 S312 316 438 380",
    nodes: [
      [42, 126],
      [218, 226],
      [438, 380],
    ],
  },
  foundation: {
    path: "M38 410 C106 410 110 338 178 338 S246 258 314 258 S376 174 442 174",
    nodes: [
      [38, 410],
      [178, 338],
      [314, 258],
      [442, 174],
    ],
  },
} as const;

export function HeroMotion({ variant }: HeroMotionProps) {
  const visual = variants[variant];
  const lastNode = visual.nodes[visual.nodes.length - 1];

  return (
    <div
      aria-hidden="true"
      className={`hero-motion hero-motion--${variant} pointer-events-none absolute inset-y-0 right-0 z-[1] hidden w-[42%] overflow-hidden lg:block`}
    >
      <svg
        viewBox="0 0 480 560"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        className="h-full w-full"
      >
        <path className="hero-motion-guide" d={visual.path} />
        <path className="hero-motion-path" d={visual.path} />
        <circle
          className="hero-motion-pulse"
          cx={lastNode[0]}
          cy={lastNode[1]}
          r="14"
        />
        {visual.nodes.map(([cx, cy], index) => (
          <circle
            key={`${cx}-${cy}`}
            className={`hero-motion-node hero-motion-node--${index + 1}`}
            cx={cx}
            cy={cy}
            r="5"
          />
        ))}
      </svg>
    </div>
  );
}
