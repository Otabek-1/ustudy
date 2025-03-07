import React, { useState, useEffect } from 'react';
import hero from "./assets/hero.jpg";
import { Link } from 'react-router-dom';
import "./fontawesome-free-6.7.2-web/css/all.min.css";

export default function App() {
  const sentences = [
    "Qo'shimcha o'z ustingizda ishlang.",
    "Doimiy fikr almashish.",
    "Yanada ko'proq bilimga ega bo'ling."
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && charIndex < sentences[index].length) {
        setText((prev) => prev + sentences[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === sentences[index].length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % sentences.length);
      }
    };

    const typingSpeed = isDeleting ? 10 : 100;
    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, sentences]);

  return (
    <div className='w-full h-max g-slate-200 flex flex-col'>
      <div className=" hero w-full h-screen relative">
        <img src={hero} className='w-full h-screen object-cover' alt="Hero" />
        <div className="hero-texts w-full h-screen bg-blue-200 absolute top-0 left-0 z-10 flex flex-col justify-center p-10 gap-5" style={{ background: "linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(57,162,201,1) 35%, rgba(0,212,255,0) 100%)" }}>
          <h1 className="text-white text-9xl font-semibold">Biz bilan <br /> yanada <span className="text-cyan-300">qulay</span> ta'lim!</h1>
          <div className="animation mt-5 flex items-center">
            <span className="desc text-white text-lg">{text}</span>
            <div className="dot w-5 h-5 bg-white rounded-full animate-pulse ml-2"></div>
          </div>
          <div className="flex gap-3">
            <Link
              to="/auth"
              className="text-white text-2xl bg-gradient-to-l from-cyan-400 to-blue-600 py-3 px-12 rounded-full w-max transition-all hover:shadow-lg hover:shadow-cyan-400/50"
            >
              Kirish
            </Link>

            <a
              href="#about-us"
              className="text-white text-2xl bg-transparent border-2 border-cyan-300 py-3 px-12 rounded-full w-max transition-all hover:shadow-lg hover:shadow-cyan-400/50"
            >
              Batafsil
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-max bg-slate-100 flex flex-col" id='about-us'  >
        <div className="about-us w-full h-screen flex items-center justify-start gap-5 p-5">
          <div className="flex flex-col w-1/2 gap-8 ">
            <h2 className="text-gray-700 text-8xl ">Biz haqimizda</h2>
            <span className="text-gray-700 ">
              <Link to="/" className="text-cyan-400">Ustudy</Link> – zamonaviy va innovatsion ta'lim platformasi bo‘lib,
              o‘quvchilar va o‘qituvchilar o‘rtasida samarali masofaviy ta’lim jarayonini yo‘lga qo‘yishga xizmat qiladi.
              Platforma onlayn ta’lim sifatini oshirish, bilim olish jarayonini yanada qulay va interaktiv qilish,
              hamda ta’lim resurslariga kengroq imkoniyat yaratishga yo‘naltirilgan.
            </span></div>

          <div className="w-1/2 h-full flex items-center justify-center relative" style={{ transform: "scale(1.4)" }}>
            <i
              className="fas fa-brain fa-10x text-cyan-400 relative"
              style={{
                textShadow: "0px 0px 10px rgba(0, 238, 255, 0.8)"
              }}
            ></i>
            <span className="absolute w-60 h-60 border-2 border-cyan-400 rounded-full animate-spin-slow"></span>
            <span className="absolute w-80 h-80 border-2 border-cyan-400 rounded-full animate-spin-reverse"></span>
          </div>
        </div>

        <div className="opp w-full h-screen bg-slate-200 flex flex-col items-center pt-5 gap-10">
          <h2 className="text-gray-700 text-5xl ">Bizning imkoniyatlar</h2>
          <div className="opps flex w-full items-center justify-around">
            <div className="opp-box flex flex-col items-center relative">
              <div className="line w-[1px] h-full absolute bg-gray-700"></div>
              <span className="text-white bg-gradient-to-r from-cyan-400 to-blue-600  text-2xl font-semibold py-5 px-20 rounded-full z-50">O'qituvchilar uchun</span>

              <span className="opps w-full shadow-lg bg-white py-3 rounded-full my-3 text-lg text-center z-50">Muntazam va mukammal nazorat</span>
              <span className="opps w-full shadow-lg bg-white py-3 rounded-full my-3 text-lg text-center z-50">Mavzularni turli yo'l bilan tushuntirish</span>
              <span className="opps w-full shadow-lg bg-white py-3 rounded-full my-3 text-lg text-center z-50">Sinf va guruhlar online ochish</span>
              <span className="opps w-full shadow-lg bg-white py-3 rounded-full my-3 text-lg text-center z-50">Test va nazorat ishlari uchun qulay</span>
            </div>

            <div className="opp-box flex flex-col items-center relative">
              <div className="line w-[1px] h-full absolute bg-gray-700"></div>
              <span className="text-white bg-gradient-to-r from-yellow-400 to-orange-600  text-2xl font-semibold py-5 px-20 rounded-full z-50">O'quvchilar uchun</span>

              <span className="opps w-full shadow-lg bg-white py-3 px-5 rounded-full my-3 text-lg text-center z-50">
                Sinfdan tashqari hohlagan ochiq kursda o'qish
              </span>
              <span className="opps w-full shadow-lg bg-white py-3 rounded-full my-3 text-lg text-center z-50">
                Har qanday vaqtda va istalgan joyda o‘qish
              </span>
              <span className="opps w-full shadow-lg bg-white py-3 rounded-full my-3 text-lg text-center z-50">
                Tajribali o‘qituvchilardan individual yondashuv
              </span>
              <span className="opps w-full shadow-lg bg-white py-3 rounded-full my-3 text-lg text-center z-50">
                Mustaqil bilimlarni sinab ko‘rish uchun testlar
              </span>
            </div>
          </div>
        </div>

        <div className="contact w-full h-screen flex flex-col items-center pt-10">
          <h2 className="text-gray-700 text-5xl ">Biz bilan bog'lanish</h2>
          <form action="" className='w-[90%] gap-5 h-[60%] mt-20 flex'>
            <div className="infos w-1/2 flex flex-col gap-5 text-gray-700">
              <div className="flex flex-col ">
                <label htmlFor="name">To'liq ismingizni kiriting*</label>
                <input type="text" name="" id="name" className=" bg-white text-lg p-2 border-2 border-cyan-300 outline-none rounded-2xl " required/>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email">Emailingizni kiriting*</label>
                <input type="email" name="" id="email" className=" bg-white text-lg p-2 border-2 border-cyan-300 outline-none rounded-2xl " required/>
              </div>

              <input type="submit" value="Jo'natish" className='w-full bg-cyan-500 text-white font-semibold text-lg p-2 rounded-full cursor-pointer' />
            </div>
            <textarea name="" className='w-1/2 outline-none border-2 border-cyan-300 rounded-lg p-5 text-gray-700 bg-white' required id=""></textarea>
          </form>
        </div>
      </div>
    </div>
  );
}