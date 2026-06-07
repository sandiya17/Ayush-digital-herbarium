"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Assistant() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello 👋 I’m your herbal health assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    // Fake AI reply (replace this with API call)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "That’s interesting! Let me help you with that 🌿." },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-2">AI Assistant</h1>
      <p className="text-gray-600 mb-4">
        Ask health-related questions and get AI-powered assistance here.
      </p>

      {/* Chat Window */}
      <div className="w-full max-w-2xl h-[500px] bg-white shadow-md rounded-2xl border p-4 flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-[75%] ${
                  msg.role === "user"
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="flex items-center gap-2 mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your question..."
            className="flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSend}
            className="bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
