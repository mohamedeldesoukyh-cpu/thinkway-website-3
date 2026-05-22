"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AIChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Welcome to Thinkway AI. Ask about SOOH advertising, influencer campaigns, creators, UGC, TikTok strategy, or brand growth.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const updatedMessages = [...messages, { role: "user", content: input }];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      const data = await response.json();
      setMessages([...updatedMessages, { role: "assistant", content: data.text }]);
    } catch {
      setMessages([...updatedMessages, { role: "assistant", content: "Something went wrong." }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      {!open && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "16px",
            zIndex: 999999,
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* Text pill - desktop only */}
          {!isMobile && (
            <button
              onClick={() => setOpen(true)}
              style={{
                height: "56px",
                padding: "0 24px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.95)",
                border: "1px solid rgba(255,255,255,0.4)",
                boxShadow: "0 0 40px rgba(21,53,194,0.18)",
                fontSize: "14px",
                fontWeight: 600,
                color: "#111",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Try Thinkway AI
            </button>
          )}

          {/* Blue orb - always visible */}
          <button
            onClick={() => setOpen(true)}
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "#1535C2",
              boxShadow: "0 0 45px rgba(21,53,194,0.55)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              cursor: "pointer",
              border: "none",
              flexShrink: 0,
            }}
          >
            ✦
          </button>
        </div>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            style={
              isMobile
                ? {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 999999,
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 0,
                  }
                : {
                    position: "fixed",
                    bottom: "24px",
                    right: "20px",
                    width: "420px",
                    height: "650px",
                    zIndex: 999999,
                    background: "white",
                    borderRadius: "32px",
                    boxShadow: "0 20px 80px rgba(0,0,0,0.18)",
                    border: "1px solid #ececec",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }
            }
          >
            {/* Header */}
            <div style={{ padding: "20px 28px", borderBottom: "1px solid #f1f1f1", background: "white", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src="/media/Thinkway AI Logo.jpg" alt="Thinkway AI" style={{ height: "56px", objectFit: "contain" }} />
              <button
                onClick={() => setOpen(false)}
                style={{ position: "absolute", right: "20px", width: "40px", height: "40px", borderRadius: "50%", background: "#f7f7f7", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: "auto", padding: "20px", display: "flex", flexDirection: "column", gap: "16px", background: "#fafafa" }}>
              {messages.map((m, i) => (
                <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                  <div style={{
                    maxWidth: "85%",
                    padding: "12px 16px",
                    borderRadius: "24px",
                    fontSize: i === 0 ? "12px" : m.role === "user" ? "10px" : "15px",
                    lineHeight: m.role === "user" ? "1.4" : "1.7",
                    background: m.role === "user" ? "#1535C2" : "white",
                    color: m.role === "user" ? "white" : "#111",
                    border: m.role === "user" ? "none" : "1px solid #ececec",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                  }}>
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && <div style={{ fontSize: "13px", color: "#888" }}>Thinkway AI is thinking...</div>}
            </div>

            {/* Input */}
            <div style={{ padding: "20px", borderTop: "1px solid #f1f1f1", background: "white" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "#f7f7f7", borderRadius: "16px", padding: "12px 16px" }}>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && !loading) sendMessage(); }}
                  placeholder="Ask Thinkway AI..."
                  style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: "14px", color: "#111" }}
                />
                <button
                  onClick={sendMessage}
                  style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#1535C2", color: "white", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}
                >
                  ↑
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AIChat;