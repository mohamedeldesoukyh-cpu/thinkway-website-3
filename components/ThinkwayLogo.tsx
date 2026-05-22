"use client";

interface ThinkwayLogoProps {
  /** "dark" = black text (on white bg), "light" = white text (on dark bg) */
  variant?: "dark" | "light";
  className?: string;
}

export default function ThinkwayLogo({ variant = "dark", className = "" }: ThinkwayLogoProps) {
  const textColor = variant === "dark" ? "#0a0f1e" : "#ffffff";
  const lineColor = variant === "dark" ? "#d8d8d8" : "rgba(255,255,255,0.2)";

  return (
    <div className={`flex flex-col select-none ${className}`}>
      {/* Wordmark */}
      <span
        className="tracking-[-0.045em] leading-none uppercase whitespace-nowrap"
        style={{
          fontFamily: "'Inter', 'Helvetica Neue', 'Arial Black', Arial, sans-serif",
          fontWeight: 900,
          fontSize: "clamp(18px, 2vw, 22px)",
          color: textColor,
          letterSpacing: "-0.045em",
        }}
      >
        THINKWAY
      </span>

      {/* Blue dot + rule */}
      <div className="flex items-center mt-[4px]">
        <div
          className="w-[6px] h-[6px] rounded-full shrink-0"
          style={{ background: "#1535C2" }}
        />
        <div
          className="h-[0.75px] flex-1 ml-[5px]"
          style={{ background: lineColor }}
        />
      </div>
    </div>
  );
}
