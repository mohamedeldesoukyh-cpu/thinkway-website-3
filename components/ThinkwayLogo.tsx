"use client";

interface ThinkwayLogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function ThinkwayLogo({ variant = "dark", className = "" }: ThinkwayLogoProps) {
  return (
    <div className={`select-none ${className}`}>
      <img
        src="/media/Logo.png"
        alt="Thinkway"
        style={{
          height: "40px",
          width: "auto",
          filter: variant === "light" ? "brightness(0) invert(1)" : "none",
        }}
      />
    </div>
  );
}