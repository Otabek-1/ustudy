import React from "react";

export default function Inbox() {
 

  return (
    <div className="flex w-full h-screen">
      {/* Chap panel */}
      <div className="w-1/4 bg-white shadow-lg p-5 border-r border-gray-300">
        <h2 className="text-xl font-semibold mb-5">Xabarlar</h2>
        <ul className="space-y-3">
          <li className="p-3 bg-blue-100 text-blue-600 rounded-lg cursor-pointer font-semibold">React kurs</li>
          <li className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer font-semibold">2 - kurs </li>
          <li className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer font-semibold">Ustudy community</li>
        </ul>
      </div>

      {/* Asosiy qism */}
      <div className="w-3/4 bg-gray-100 p-5">
        <h2 className="text-2xl font-semibold mb-5">Kirish xatlari</h2>
        <div className="bg-white shadow-md rounded-lg">
       
        </div>
      </div>
    </div>
  );
}
