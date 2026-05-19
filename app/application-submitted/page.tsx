export default function ApplicationSubmittedPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0f1e",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        padding: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Animated Checkmark */}
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "9999px",
            background: "#1d4ed8",
            margin: "0 auto 30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "pop 0.5s ease",
            boxShadow: "0 0 40px rgba(37,99,235,0.4)",
          }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <p
          style={{
            color: "#3b82f6",
            letterSpacing: "4px",
            marginBottom: "12px",
            fontSize: "12px",
            textTransform: "uppercase",
          }}
        >
          THINKWAY Creator Program
        </p>

        <h1
          style={{
            fontSize: "56px",
            lineHeight: "1",
            marginBottom: "24px",
            fontWeight: "800",
          }}
        >
          Application Submitted
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#d1d5db",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Thank you for applying to join THINKWAY.
          <br />
          Our creator partnerships team is currently reviewing your profile.
          <br />
          If your content aligns with our upcoming campaigns and brand
          collaborations, we’ll contact you shortly.
        </p>

        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: "40px",
            background: "#1d4ed8",
            color: "white",
            padding: "16px 36px",
            textDecoration: "none",
            fontWeight: "600",
            letterSpacing: "2px",
            textTransform: "uppercase",
            transition: "0.3s ease",
          }}
        >
          Back to Homepage
        </a>

        <style>{`
          @keyframes pop {
            0% {
              transform: scale(0.5);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </main>
  );
}
