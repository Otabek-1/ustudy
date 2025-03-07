import React from "react";

export default function Inbox() {
  const messages = [
    { id: 1, sender: "Ali Valiyev", subject: "Dars jadvali o‘zgarishi", time: "14:30" },
    { id: 2, sender: "O‘qituvchi", subject: "Yangi uy vazifasi", time: "12:10" },
    { id: 3, sender: "Botir Karimov", subject: "O‘quvchilar yig‘ilishi", time: "09:45" },
  ];

  return (
    <div className="flex w-full h-screen">
      {/* Chap panel */}
      <div className="w-1/4 bg-white shadow-lg p-5 border-r border-gray-300">
        <h2 className="text-xl font-semibold mb-5">Xabarlar</h2>
        <ul className="space-y-3">
          <li className="p-3 bg-blue-100 text-blue-600 rounded-lg cursor-pointer">📩 Barcha xabarlar</li>
          <li className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer">🔵 O‘qilmagan</li>
          <li className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer">📤 Jo‘natilgan</li>
        </ul>
      </div>

      {/* Asosiy qism */}
      <div className="w-3/4 bg-gray-100 p-5">
        <h2 className="text-2xl font-semibold mb-5">Kirish xatlari</h2>
        <div className="bg-white shadow-md rounded-lg">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="flex justify-between items-center p-4 border-b hover:bg-gray-50 cursor-pointer"
            >
              <div>
                <h3 className="font-semibold text-lg">{msg.sender}</h3>
                <p className="text-gray-600">{msg.subject}</p>
              </div>
              <span className="text-gray-500">{msg.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
