import Image from "next/image";

type Props = {
  className?: string;
};

/**
 * hofix logotyp — původní brand asset (Logo_1600.png).
 * Plný lockup: znak + wordmark. Velikost se řídí CSS třídou (height + width:auto).
 */
export default function Logo({ className }: Props) {
  return (
    <Image
      className={className}
      src="/brand/hofix-logo.png"
      alt="hofix"
      width={1600}
      height={589}
      priority
    />
  );
}
