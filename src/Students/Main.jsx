import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className={`p-6 w-full h-full transition-all duration-300 overflow-y-auto ${theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
      {/* Yangiliklar qismi */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Yangiliklar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link className={`p-4 rounded-lg shadow-md transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'}`}>
            <h3 className="text-lg font-bold">Yangi kurslar qo‘shildi!</h3>
            <p className="text-sm">Dasturlash va dizayn bo‘yicha yangi kurslarga yozilish boshlandi.</p>
          </Link>
          <Link className={`p-4 rounded-lg shadow-md transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'}`}>
            <h3 className="text-lg font-bold">Imtihon natijalari e’lon qilindi</h3>
            <p className="text-sm">So‘nggi test natijalari e’lon qilindi. Natijalarni shaxsiy kabinetda tekshiring.</p>
          </Link>
        </div>
      </section>

      {/* Statistika */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Statistika</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[{ count: 120, label: "Faol foydalanuvchilar", color: "text-purple-500" },
            { count: 8, label: "Jami kurslar", color: "text-blue-500" },
            { count: 15, label: "Professional o‘qituvchilar", color: "text-green-500" }].map((item, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md text-center transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'}`}>
                <h3 className={`text-3xl font-bold ${item.color}`}>{item.count}</h3>
                <p className="text-sm">{item.label}</p>
              </div>
          ))}
        </div>
      </section>

      {/* Kurslar va e'lonlar */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Sinf yoki kurslar</h2>
        <div className={`p-4 rounded-lg shadow-md transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'}`}>
          <h3 className="text-lg font-bold">Dasturlash bo‘yicha intensiv kurs</h3>
          <p className="text-sm">O‘qituvchi: Akmal Xamidov</p>
          <p className="text-xs">Frontend va backend asoslari bo‘yicha maxsus kurs.</p>
        </div>
        
        {/* O'qituvchi e'lonlari */}
        <div className={`mt-4 p-4 rounded-lg shadow-md transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-700'}`}>
          <h3 className="text-lg font-bold">E’lon</h3>
          <p className="text-sm">Hurmatli talabalar, yakshanba kuni qo‘shimcha dars o‘tkaziladi.</p>
        </div>
      </section>
    </div>
  );
}