import React from 'react';
import { Link } from 'react-router-dom';

export default function MyCourses() {
  const courses = [
    {
      id: 1,
      title: "React Dasturlash",
      teacher: "Anvar Rasulov",
      description: "Frontend dasturlash asoslari va React kutubxonasi bilan ishlash.",
      students: 120,
      duration: "3 oy",
      level: "Boshlang‘ich",
    },
    {
      id: 2,
      title: "Python Backend",
      teacher: "Dilshod Karimov",
      description: "Django va Flask frameworklaridan foydalanib backend yaratish.",
      students: 95,
      duration: "4 oy",
      level: "O‘rta",
    },
  ];

  const classes = [
    {
      id: 1,
      name: "Frontend Guruh A",
      teacher: "Sanjar Axmedov",
      description: "React va VueJS texnologiyalari bo‘yicha maxsus guruh.",
      students: 30,
      lessons: 24,
      level: "O‘rta",
    },
    {
      id: 2,
      name: "Backend Guruh B",
      teacher: "Zokir Abdullayev",
      description: "Node.js va Python bo‘yicha chuqur o‘rganuvchilar uchun guruh.",
      students: 28,
      lessons: 30,
      level: "Yuqori",
    },
  ];

  return (
    <div className="p-6 w-full h-full bg-gray-100 overflow-y-auto">
      
      {/* Kurslar bo'limi */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">📚 Mening Kurslarim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <Link 
              key={course.id}
              to={`/course/${course.id}`}
              className="bg-white p-5 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-700">{course.title}</h3>
              <p className="text-gray-600">👨‍🏫 O‘qituvchi: {course.teacher}</p>
              <p className="text-gray-500 text-sm">{course.description}</p>
              <div className="mt-3 flex justify-between text-gray-600 text-sm">
                <span>👨‍🎓 O‘quvchilar: {course.students} ta</span>
                <span>⏳ Davomiylik: {course.duration}</span>
              </div>
              <span className="block mt-2 text-sm font-semibold text-blue-500">📈 Daraja: {course.level}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Sinflar bo'limi */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">🏫 Mening Sinflarim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {classes.map((cls) => (
            <Link 
              key={cls.id}
              to={`/class/${cls.id}`}
              className="bg-white p-5 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-700">{cls.name}</h3>
              <p className="text-gray-600">👨‍🏫 Guruh rahbari: {cls.teacher}</p>
              <p className="text-gray-500 text-sm">{cls.description}</p>
              <div className="mt-3 flex justify-between text-gray-600 text-sm">
                <span>👨‍🎓 O‘quvchilar: {cls.students} ta</span>
                <span>📚 Darslar: {cls.lessons} ta</span>
              </div>
              <span className="block mt-2 text-sm font-semibold text-green-500">🔰 Daraja: {cls.level}</span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
