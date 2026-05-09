"use client";

const items = [
  "INFLUENCER MARKETING",
  "CONTENT CREATION",
  "BRAND GROWTH",
  "CREATOR NETWORK",
  "PERFORMANCE CAMPAIGNS",
  "SOCIAL MEDIA STRATEGY",
  "ROI-DRIVEN RESULTS",
  "DIGITAL AUTHORITY",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-5 border-y border-[#ebebeb] bg-white">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 pr-6 whitespace-nowrap">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#ccc] font-medium">
              {item}
            </span>
            <span className="text-[#c0392b] text-xs">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
