"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function PortfolioCopyInteractions({
  children,
}: {
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleCopy = async (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const button = event.target.closest<HTMLButtonElement>(".copy");
      if (!button || !container.contains(button)) return;

      const text = button.getAttribute("data-copy");
      if (!text) return;

      const label = button.textContent ?? "";
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "Copied";
      } catch {
        button.textContent = "Select the text to copy";
      }

      window.setTimeout(() => {
        button.textContent = label;
      }, 1800);
    };

    container.addEventListener("click", handleCopy);
    return () => container.removeEventListener("click", handleCopy);
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
