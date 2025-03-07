import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import "../fontawesome-free-6.7.2-web/css/all.css";
import Main from './Main';
import MyCourses from './MyCourses';
import Courses from './Courses';
import Profile from './Profile';
import Inbox from './Inbox';

export default function DashboardS() {
    const { menu } = useParams();
    const navigate = useNavigate();

    const handleMenuClick = (menuName) => {
        navigate(`/dashboard-s/${menuName}`);
    };

    return (
        <div className='w-full h-screen flex bg-gray-100'>
            {/* Sidebar */}
            <div className="navbar  top-0 left-0 w-1/6 h-screen bg-white shadow-lg flex flex-col items-center pt-8 border-r border-gray-300">
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
                            className={`menu text-lg flex items-center w-full py-3 rounded-lg px-4 gap-4 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r from-purple-500 to-cyan-400 hover:text-white ${menu === item.name ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white' : 'text-gray-700'}`}
                            onClick={() => handleMenuClick(item.name)}
                        >
                            <i className={`${item.icon} text-xl`}></i>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="main w-5/6 h-full bg-white flex items-center justify-center shadow-md rounded-l-xl">
                {menu === 'asosiy'? <Main />: menu=="my-courses"? <MyCourses />:menu=="courses"?<Courses/>:menu==="profil"?<Profile />:menu==="inbox"? <Inbox />:<Main />}   
            </div>
        </div>
    );
}