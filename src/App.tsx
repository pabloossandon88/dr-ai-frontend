import { useState } from "react";
import axios from "axios";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    try {
      const res = await axios.post("http://localhost:3001/api/chat", {
        message: input,
      });

      const botMessage: Message = {
        role: "assistant",
        content: res.data.reply,
      };

      setMessages((prev) => [...prev, userMessage, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Error al contactar al doctor virtual.",
        },
      ]);
    }

    setInput("");
  };

  return (
    <div className="container">
    <h2>🩺 Doctor Virtual Chileno</h2>
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <button className="px-6 py-3 text-white bg-green-700 hover:bg-blue-700 rounded-lg shadow-md">
        ¡Tailwind está funcionandooo!
      </button>
    </div>
    <div className="chat-box rounded-xl">
      {messages.map((msg, i) => (
        <p key={i}>
          <strong>{msg.role === "user" ? "Paciente" : "Doctor"}:</strong>{" "}
          {msg.content}
        </p>
      ))}
    </div>
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Escribe tus síntomas..."
    />
    <button onClick={sendMessage}>Enviar</button>
  </div>
  );
}

export default App;
