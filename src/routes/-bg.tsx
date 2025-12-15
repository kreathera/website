// STYLES ----------------------------------------------------------------------------------------------------------------------------------
const BG = {
  gradient1: () => "absolute inset-x-[0%] inset-y-[0%] left-0 rounded-full bg-primary-gradient/11 blur-[100px] will-change-transform",
  gradient2: () => "absolute inset-x-[30%] inset-y-[0%] right-0 rounded-full bg-secondary-gradient/9 blur-[100px] will-change-transform",
  main: () =>
    "mask-[radial-gradient(circle_at_center,black_0%,black_20%,transparent_75%)] pointer-events-none absolute inset-0 aspect-square",
  svg: () => "h-full w-full text-foreground/5",
};

// MAIN ------------------------------------------------------------------------------------------------------------------------------------
export function Bg() {
  return (
    <>
      <div className={BG.main()}>
        <svg className={BG.svg()} height="32" width="32">
          <title>Plus</title>
          <defs>
            <pattern height="16" id="plus-pattern-:rc:" patternUnits="userSpaceOnUse" width="16" x="0" y="0">
              <line stroke="currentColor" strokeWidth="1" x1="8" x2="8" y1="5" y2="11" />
              <line stroke="currentColor" strokeWidth="1" x1="5" x2="11" y1="8" y2="8" />
            </pattern>
          </defs>
          <rect fill="url(#plus-pattern-:rc:)" height="100%" width="100%" />
        </svg>
      </div>
      <div className="pointer-events-none">
        <div className={BG.gradient1()} />
        <div className={BG.gradient2()} />
      </div>
    </>
  );
}
