import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Chatbot.css"; // We'll create this CSS file next

// Define message type
interface Message {
  text: string;
  sender: "user" | "bot";
}

// Define API response type
interface ChatApiResponse {
  reply: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Namaste! I'm your AYUSH herbal advisor. What symptoms are you experiencing?",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to newest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (): Promise<void> => {
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");
    setLoading(true);

    try {
      // Call your backend API
      const response = await axios.post<ChatApiResponse>(
        "http://localhost:5000/api/chat",
        { message: input }
      );

      // Add bot response
      setMessages((prev) => [
        ...prev,
        { text: response.data.reply, sender: "bot" },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm having trouble responding. Please try again later.",
          sender: "bot",
        },
      ]);
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="ayush-logo">🌿</div>
        <h2>AYUSH Herbal Advisor</h2>
      </div>

      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="typing-indicator">
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-input-area">
        <div className="chatbot-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !loading && handleSend()}
            placeholder="Describe your symptoms..."
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="send-button"
          >
            {loading ? <div className="spinner"></div> : <span>Send</span>}
          </button>
        </div>
        <div className="disclaimer">
          Note: Consult a qualified practitioner before using any remedies
        </div>
      </div>
    </div>
  );
}
