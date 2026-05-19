export default function ApplicationSubmittedPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">

        <div className="mb-8">
          <p className="text-sm tracking-[0.3em] uppercase text-[#1d3df2] mb-4">
            Creator Program
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-none text-black mb-6">
            APPLICATION
            <br />
            SUBMITTED.
          </h1>

          <p className="text-[#666] text-lg leading-8 max-w-xl mx-auto">
            Thank you for applying to the THINKWAY Creator Program.
            <br />
            Our team is currently reviewing your profile and social presence.
          </p>
        </div>

        <div className="border-t border-black/10 pt-8">
          <p className="text-black font-semibold text-lg mb-2">
            What happens next?
          </p>

          <p className="text-[#777] leading-7">
            If your profile matches our upcoming campaigns and creator network,
            we’ll contact you shortly with the next steps.
          </p>
        </div>

        <a
          href="/"
          className="inline-flex items-center justify-center mt-10 bg-[#1d3df2] text-white px-10 py-4 tracking-[0.2em] uppercase text-sm hover:opacity-90 transition"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
