export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#1535C2] mb-6">
          Careers
        </p>

        <h1
          className="font-black uppercase text-[#0a0a0a] leading-[0.9]"
          style={{
            fontSize: "clamp(42px, 7vw, 96px)",
            letterSpacing: "-0.05em",
          }}
        >
          JOIN
          <br />
          THINKWAY
        </h1>

        <p className="mt-8 text-[#8d8d8d] leading-[2] text-[15px]">
          We’re always interested in connecting with talented creators,
          strategists, and digital thinkers.
        </p>

        <p className="mt-4 text-[#b0b0b0] uppercase tracking-[0.2em] text-[10px]">
          No open positions currently.
          <a
  href="/"
  className="inline-flex items-center gap-3 mt-10 bg-[#1535C2] text-white px-8 py-4 text-[11px] tracking-[0.2em] uppercase hover:bg-[#2a4fd4] transition-all duration-300"
>
  Back To Home
  <span>→</span>
</a>
        </p>

      </div>
    </main>
  );
}
