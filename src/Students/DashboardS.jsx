import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import "../fontawesome-free-6.7.2-web/css/all.css";
import Main from './Main';
import MyCourses from './MyCourses';
import Courses from './Courses';
import Profile from './Profile';
import Inbox from './Inbox';

export default function DashboardS() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const { menu } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
        window.location.reload();
    };

    const handleMenuClick = (menuName) => {
        navigate(`/dashboard-s/${menuName}`);
    };

    return (
        <div className={`w-full h-screen flex bg-gray-100 dark:bg-gray-900`}>
            {/* Sidebar */}
            <div className="navbar relative top-0 left-0 w-1/6 h-screen bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center pt-8 border-r border-gray-300 dark:border-gray-700">
                <Link to="/" className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
                    Ustudy
                </Link>

                <ul className="menus flex flex-col gap-4 w-full p-6 mt-8">
                    {[ 
                        { name: 'asosiy', icon: 'fas fa-globe', label: 'Asosiy' },
                        { name: 'my-courses', icon: 'fas fa-book', label: 'Darslarim' },
                        { name: 'courses', icon: 'fas fa-store', label: 'Kurslar' },
                        { name: 'inbox', icon: 'fas fa-inbox', label: 'Inbox' },
                        { name: 'profil', icon: 'fas fa-user', label: 'Otabek Burhonov' },
                    ].map((item) => (
                        <li
                            key={item.name}
                            className={`menu text-lg flex items-center w-full py-3 rounded-lg px-4 gap-4 cursor-pointer transition-all duration-300 
                                hover:bg-gradient-to-r from-purple-500 to-cyan-400 hover:text-white 
                                ${menu === item.name ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white' : 'text-gray-700 dark:text-gray-300'}`}
                            onClick={() => handleMenuClick(item.name)}
                        >
                            <i className={`${item.icon} text-xl`}></i>
                            {item.label}
                        </li>
                    ))}
                </ul>

                <div className="others absolute bottom-10 w-full h-10 flex items-center px-3">
                    <i
                        onClick={toggleTheme}
                        className={`fas ${theme === "light" ? "fa-moon" : "fa-sun"} block p-4 rounded-full text-lg cursor-pointer 
                            bg-slate-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 flex items-center`}
                    ></i>
                </div>
            </div>

            {/* Main Content */}
            <div className="main w-5/6 h-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md rounded-l-xl">
                {menu === 'asosiy' ? <Main /> : menu === "my-courses" ? <MyCourses /> : menu === "courses" ? <Courses /> : menu === "profil" ? <Profile /> : menu === "inbox" ? <Inbox /> : <Main />}
            </div>
        </div>
    );
}