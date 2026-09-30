import Image from "next/image";

interface ThinkwayLogoProps {
  className?: string;
  priority?: boolean;
}

export default function ThinkwayLogo({
  className = "",
  priority = false,
}: ThinkwayLogoProps) {
  return (
    <Image
      src="/thinkway-logo.png"
      alt="Thinkway"
      width={3575}
      height={768}
      priority={priority}
      unoptimized
      className={`block h-auto ${className}`}
    />
  );
}
