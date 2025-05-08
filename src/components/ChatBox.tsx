import React from 'react';

const ChatBox = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md max-w-xl mx-auto mt-10">
      <div className="h-64 overflow-y-auto border border-gray-300 rounded p-2 mb-4">
        <p className="text-sm text-gray-500">Aquí aparecerá la conversación...</p>
      </div>
      <form className="flex gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none"
          placeholder="Escribe tu mensaje..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
