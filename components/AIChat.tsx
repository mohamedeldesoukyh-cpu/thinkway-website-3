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

    setMessages([
      ...updatedMessages,
      { role: "assistant", content: data.text },
    ]);

    // Show success state if lead captured
    if (data.leadCaptured) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: "assistant",
          content: "✅ You're all set! Our team will reach out within 24 hours. Is there anything else I can help you with?",
        }]);
      }, 1000);
    }

  } catch {
    setMessages([...updatedMessages, {
      role: "assistant",
      content: "Something went wrong. Please try again.",
    }]);
  }

  setLoading(false);
};