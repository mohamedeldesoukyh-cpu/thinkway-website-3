"use client";

interface ThinkwayLogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function ThinkwayLogo({ variant = "dark", className = "" }: ThinkwayLogoProps) {
  return (
    <div className={`select-none ${className}`}>
      <img
        src="/media/TW_Logo_B_Wordmark.svg"
        alt="Thinkway"
        style={{
          height: "36px",
          width: "auto",
          filter: variant === "light" ? "brightness(0) invert(1)" : "brightness(0)",
        }}
      />
    </div>
  );
}