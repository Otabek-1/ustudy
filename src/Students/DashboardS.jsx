import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import "../fontawesome-free-6.7.2-web/css/all.css";

export default function DashboardS() {
    const { menu } = useParams(); // URL parametrini olish
    const navigate = useNavigate(); // Navigatsiya qilish uchun

    // Menu elementlari uchun funksiya
    const handleMenuClick = (menuName) => {
        navigate(`/dashboard-s/${menuName}`);
    };

    return (
        <div className='w-full h-screen flex bg-slate-200'>
            {/* Sidebar */}
            <div className="navbar w-1/7 h-screen bg-white shadow-md flex flex-col items-center pt-10">
                <Link to="/" className="text-4xl py-2 font-semibold bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
                    Ustudy
                </Link>

                {/* Menular */}
                <ul className="menus flex flex-col gap-2 w-full p-5">
                    <li 
                        className={`menu text-xl flex items-center w-full py-2 rounded-lg px-2 gap-3 cursor-pointer transition-all duration-500 hover:bg-slate-300 ${menu === 'asosiy' ? 'bg-slate-300' : ''}`}
                        onClick={() => handleMenuClick('asosiy')}
                    >
                        <i className="fas fa-globe"></i>
                        Asosiy
                    </li>

                    <li 
                        className={`menu text-xl flex items-center w-full py-2 rounded-lg px-2 gap-3 cursor-pointer transition-all duration-500 hover:bg-slate-300 ${menu === 'darslarim' ? 'bg-slate-300' : ''}`}
                        onClick={() => handleMenuClick('darslarim')}
                    >
                        <i className="fas fa-book"></i>
                        Darslarim
                    </li>

                    <li 
                        className={`menu text-xl flex items-center w-full py-2 rounded-lg px-2 gap-3 cursor-pointer transition-all duration-500 hover:bg-slate-300 ${menu === 'profil' ? 'bg-slate-300' : ''}`}
                        onClick={() => handleMenuClick('profil')}
                    >
                        <i className="fas fa-user"></i>
                        Otabek Burhonov
                    </li>
                </ul>
            </div>

            <div className="main w-6/7 h-full bg-transparent"></div>
        </div>
    );
}
