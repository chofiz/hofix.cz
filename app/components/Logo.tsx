type Props = {
  className?: string;
};

/**
 * hofix logotyp — monogram "h" v oranžovém čtverci.
 * Dočasný SVG, doladíme později.
 * Wordmark "hofix" v JetBrains Mono.
 */
export default function Logo({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 156 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="hofix"
    >
      {/* monogram h v oranžovém čtverci */}
      <rect x="0.5" y="0.5" width="31" height="31" rx="7" stroke="#ef590d" strokeWidth="1.5" opacity="0.6" />
      <path
        d="M9 23V9M9 14c1.6-2.2 4-3.2 6.5-2.6 2.4.6 4 2.7 4 5.2V23"
        stroke="#ef590d"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* wordmark */}
      <text
        x="42"
        y="22"
        fontFamily="var(--font-jetbrains-mono), ui-monospace, monospace"
        fontSize="18"
        fontWeight="600"
        letterSpacing="-0.02em"
        fill="#ededed"
      >
        hofix
      </text>
    </svg>
  );
}
