import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import axios from 'axios';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    try {
      const res = await axios.post("https://dr-ai-backend.onrender.com/api/chat", {
        message: input,
      });

      const botMessage: Message = {
        role: "assistant",
        content: res.data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
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
    <MainLayout >

    <div className="max-w-xl w-full mx-auto p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-teal-700 text-xl font-bold mb-4">Habla con el Doctor Virtual</h2>

        <div className="chat-box rounded-xl border p-4 mb-4 max-h-96 overflow-y-auto">
            {messages.map((msg, i) => (
                <p key={i} className="mb-2">
                <strong>{msg.role === "user" ? "Paciente" : "Doctor"}:</strong> {msg.content}
                </p>
            ))}
        </div>

        <div className="flex gap-2">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tus síntomas..."
                className="flex-1 border rounded p-2"
            />
            <button onClick={sendMessage} className="bg-teal-700 ml-0 text-white px-4 py-2 rounded">
                Enviar
            </button>
        </div>
    </div>
      
    </MainLayout>
  );
};

export default ChatInterface;
