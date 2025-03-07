import React, { useState, useEffect } from 'react';
import "../fontawesome-free-6.7.2-web/css/all.css";
import ex from "../assets/hero.jpg";
import { Link } from 'react-router-dom';

export default function Courses() {
    const [modal, setModal] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
    }, []);

    return (
        <div className={`w-full h-full ${theme === 'light' ? 'bg-white text-gray-700' : 'bg-gray-900 text-white'} flex flex-col relative ${!modal ? 'overflow-y-scroll' : "overflow-y-hidden"}`}>
            <div className={`modal ${!modal ? "hidden" : ""} absolute top-0 left-0 w-full h-full flex items-center justify-center`} style={{ background: "rgba(0,0,0,0.4)", zIndex: "999" }}>
                <div className={`modal-box w-1/3 h-1/2 ${theme === 'light' ? 'bg-white text-gray-700' : 'bg-gray-800 text-white'} rounded-xl flex items-center flex-col p-3 gap-4`}>
                    <span className="text-2xl font-semibold">Sinf ID sini kiriting:</span>
                    <input type="text" name="course-id" id="course-id" className={`w-full outline-none border-2 ${theme === 'light' ? 'border-gray-600' : 'border-gray-400'} rounded-lg text-xl p-3`} placeholder='XXXXXXXXXX' />
                    <button className="join w-full text-white bg-gradient-to-r from-purple-700 to-cyan-500 rounded-xl p-3 cursor-pointer text-xl">Qo'shilish</button>
                    <button onClick={() => setModal(false)} className="join w-full border-2 border-cyan-500 rounded-xl p-3 cursor-pointer text-xl">Bekor qilish</button>
                </div>
            </div>

            <div className={`search-field py-3 w-full ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} h-20 flex items-center text-center justify-center px-5`}>
                <div className="search w-full justify-center flex items-center relative">
                    <i className="fa-solid fa-magnifying-glass absolute left-1/4 ml-4 text-gray-500"></i>
                    <input type="text" name="search" id="search" placeholder='Kurslarni qidiring...' className={`text-lg py-2 px-6 pl-10 rounded-full border-2 ${theme === 'light' ? 'border-gray-300 text-gray-500' : 'border-gray-600 text-gray-300'} outline-none w-1/2`} />
                </div>
                <button onClick={() => setModal(true)} className="text-white bg-gradient-to-r from-purple-700 to-cyan-400 w-1/5 py-2 rounded-full h-max text-xl cursor-pointer">Sinfga qo'shilish</button>
            </div>

            <h3 className="font-semibold text-3xl m-3">Barcha kurslar</h3>
            <div className="courses w-full h-full flex flex-wrap p-3 gap-3 justify-center">
                <div className={`course-card w-1/5 h-max rounded-xl ${theme === 'light' ? 'bg-slate-100' : 'bg-gray-800'} flex flex-col p-3 gap-2`}>
                    <img src={ex} className='rounded-lg' alt="" />
                    <span className="text-lg font-semibold">Buxgalteriya: kirish va asosiy prinsiplar</span>
                    <span className="author flex items-center gap-3">
                        <i className="fas fa-user"></i> Javohir Abdullayev
                    </span>
                    <span className="participants flex items-center text-md gap-2">
                        <i className="fas fa-user-group"></i> 300 o'quvchi
                    </span>
                    <span className="cost flex items-center text-md gap-2">
                        <i className="fa-solid fa-money-bill"></i>
                        <span className="font-semibold bg-green-200 px-2 rounded-lg text-green-600">Bepul</span>
                    </span>
                    <div className="rate flex items-center gap-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span className="rate-num">4.5</span>
                    </div>
                    <Link to={`/join-course?id=${1}`} target='_blank' className='w-full text-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-center text-white font-semibold py-2 rounded-lg'>Kursni ko'rish</Link>
                </div>
            </div>
        </div>
    );
}
