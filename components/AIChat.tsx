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
    setIsMobile(window.innerWidth < 640);
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const updatedMessages = [
      ...messages,
      { role: "user", content: input },
    ];

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

      setMessages([
        ...updatedMessages,
        { role: "assistant", content: data.text },
      ]);
    } catch {
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "Something went wrong." },
      ]);
    }

    setLoading(false);
  };

  const chatStyle = isMobile
    ? { top: 0, left: 0, right: 0, bottom: 0, borderRadius: 0 }
    : { bottom: "24px", right: "20px", width: "420px", height: "650px", borderRadius: "32px" };

  return (
    <>
      {!open && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-5 z-[9999] flex items-center gap-3"
        >
          <button
            onClick={() => setOpen(true)}
            className="hidden sm:flex h-14 px-6 rounded-full bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_0_40px_rgba(21,53,194,0.18)] text-[14px] font-semibold text-[#111] hover:scale-[1.03] transition-all duration-500"
          >
            Try Thinkway AI
          </button>

          <motion.button
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            onClick={() => setOpen(true)}
            className="w-14 h-14 rounded-full bg-[#1535C2] shadow-[0_0_45px_rgba(21,53,194,0.55)] flex items-center justify-center text-white text-2xl hover:scale-110 transition-all duration-500"
          >
            ✦
          </motion.button>
        </motion.div>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="fixed z-[9999] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.18)] border border-[#ececec] overflow-hidden flex flex-col"
            style={chatStyle}
          >
            <div className="px-7 py-5 border-b border-[#f1f1f1] bg-white relative flex items-center justify-center">
              <img
                src="/media/Thinkway AI Logo.jpg"
                alt="Thinkway AI"
                className="h-14 object-contain"
              />
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 w-10 h-10 rounded-full bg-[#f7f7f7] hover:bg-[#efefef] transition-all duration-300 flex items-center justify-center text-[#111]"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5 bg-[#fafafa]">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={
                      m.role === "user"
                        ? "bg-[#1535C2] text-white px-4 py-3 rounded-[24px] max-w-[85%] shadow-sm leading-4 text-[10px]"
                        : "bg-white border border-[#ececec] text-[#111] px-4 py-3 rounded-[24px] max-w-[85%] shadow-sm leading-6 text-[15px]"
                    }
                  >
                    <p className={i === 0 ? "text-[12px] leading-5" : ""}>
                      {m.content}
                    </p>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="text-[13px] text-[#888]">
                  Thinkway AI is thinking...
                </div>
              )}
            </div>

            <div className="p-5 border-t border-[#f1f1f1] bg-white">
              <div className="flex items-center gap-3 bg-[#f7f7f7] rounded-2xl px-4 py-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !loading) sendMessage();
                  }}
                  placeholder="Ask Thinkway AI..."
                  className="flex-1 bg-transparent outline-none text-[14px] text-[#111] placeholder:text-[#999]"
                />
                <button
                  onClick={sendMessage}
                  className="w-11 h-11 rounded-xl bg-[#1535C2] text-white flex items-center justify-center hover:scale-105 transition-all duration-300"
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