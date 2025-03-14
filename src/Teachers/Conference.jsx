import React, { useState } from "react";
import { Video, Mic, ScreenShare, MessageSquare, PhoneOff } from "lucide-react";
import { Card } from "../components/ui/Card";

export default function Conference() {
  const [participants] = useState([
    { id: 1, name: "Ali", avatar: "/avatars/1.jpg" },
    { id: 2, name: "Bobur", avatar: "/avatars/2.jpg" },
    { id: 3, name: "Maya", avatar: "/avatars/3.jpg" },
    { id: 4, name: "Zafar", avatar: "/avatars/4.jpg" },
  ]);

  return (
    <div className="w-full h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <div className="absolute top-2 left-2 right-2 flex items-center justify-between p-3 bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Zoom Clone</h3>
        <div className="flex items-center gap-3">
          {participants.slice(0, 3).map((p) => (
            <img key={p.id} src={p.avatar} alt={p.name} className="w-8 h-8 rounded-full" />
          ))}
          <span className="bg-green-500 px-2 py-1 rounded-xl">{participants.length} qatnashuvchi</span>
        </div>
      </div>
      
      {/* Video Grid */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
        {participants.map((p) => (
          <Card key={p.id} className="relative bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center">
            <img src={p.avatar} alt={p.name} className="w-full h-full object-cover" />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded text-sm">{p.name}</div>
          </Card>
        ))}
      </div>
      
      {/* Controls */}
      <div className="flex justify-center gap-4 bg-gray-800 p-4 rounded-t-lg">
        <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"><Mic size={24} /></button>
        <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"><Video size={24} /></button>
        <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"><ScreenShare size={24} /></button>
        <button className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition"><MessageSquare size={24} /></button>
        <button className="p-3 bg-red-600 rounded-full hover:bg-red-500 transition"><PhoneOff size={24} /></button>
      </div>
    </div>
  );
}
