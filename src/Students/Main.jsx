import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className="p-6 w-full h-full bg-gray-100 overflow-y-auto">
      {/* Yangiliklar qismi */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Yangiliklar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-700">Yangi kurslar qo‘shildi!</h3>
            <p className="text-gray-600">Dasturlash va dizayn bo‘yicha yangi kurslarga yozilish boshlandi.</p>
          </Link>
          <Link className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-700">Imtihon natijalari e’lon qilindi</h3>
            <p className="text-gray-600">So‘nggi test natijalari e’lon qilindi. Natijalarni shaxsiy kabinetda tekshiring.</p>
          </Link>
        </div>
      </section>

      {/* Statistika */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Statistika</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-purple-500">120</h3>
            <p className="text-gray-600">Faol foydalanuvchilar</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-blue-500">8</h3>
            <p className="text-gray-600">Jami kurslar</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-green-500">15</h3>
            <p className="text-gray-600">Professional o‘qituvchilar</p>
          </div>
        </div>
      </section>

      {/* Kurslar va e'lonlar */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sinf yoki kurslar</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-700">Dasturlash bo‘yicha intensiv kurs</h3>
          <p className="text-gray-600">O‘qituvchi: Akmal Xamidov</p>
          <p className="text-gray-500 text-sm">Frontend va backend asoslari bo‘yicha maxsus kurs.</p>
        </div>
        
        {/* O'qituvchi e'lonlari */}
        <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-700">E’lon</h3>
          <p className="text-gray-600">Hurmatli talabalar, yakshanba kuni qo‘shimcha dars o‘tkaziladi.</p>
        </div>
      </section>
    </div>
  );
}