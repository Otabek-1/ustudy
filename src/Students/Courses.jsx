import React, { useState } from 'react'
import "../fontawesome-free-6.7.2-web/css/all.css";
import ex from "../assets/hero.jpg";
import { Link } from 'react-router-dom';

export default function Courses() {
    const [modal, setModal] =useState(false);
    return (
        <div className={`w-full h-full bg-slate-200 flex flex-col relative ${!modal?'overflow-y-scroll':"overflow-y-hidden"}`}>
            <div className={`modal ${!modal?"hidden":""} absolute top-0 left-0 w-full h-full flex items-center justify-center`} style={{background:"rgba(0,0,0,0.4)",zIndex:"999"}}>
                <div className="modal-box w-1/3 h-1/2 bg-white rounded-xl flex items-center flex-col p-3 gap-4">
                <span className="text-gray-700 text-2xl font-semibold">Sinf ID sini kiriting:</span>
                <input type="text" name="course-id" id="course-id" className='w-full outline-none border-2 border-gray-600 rounded-lg text-xl p-3 text-gray-700' placeholder='XXXXXXXXXX' />
                <button className="join w-full text-white bg-gradient-to-r from-purple-700 to-cyan-500 rounded-xl p-3 cursor-pointer text-xl">Qo'shilish</button>
                <button onClick={()=>setModal(false)} className="join w-full text-gray-700 bg-transparent border-2 border-cyan-500  rounded-xl p-3 cursor-pointer text-xl">Bekor qilish</button>
                </div>
            </div>
            <div className="search-field py-3 w-full bg-white h-20 flex items-center  text-center justify-center px-5">
                {/* <h3 className="text-gray-700 font-semibold text-xl">O'zingiz qiziqqan sohani o'rganing.</h3> */}
                <div className="search w-full justify-center flex items-center relative">
                    <i class="fa-solid fa-magnifying-glass absolute left-1/4 ml-4 text-gray-500"></i>   
                    <input type="text" name="search" id="search" placeholder='Kurslarni qidiring...' className='text-lg py-2 px-6 pl-10 rounded-full border-2 border-gray-300 outline-none w-1/2 text-gray-500' />
                </div>
                <button onClick={()=>setModal(true)} className="text-white bg-gradient-to-r from-purple-700 to-cyan-400 w-1/5 py-2 rounded-full h-max text-xl cursor-pointer">Sinfga qo'shilish</button>
            </div>
            <h3 className="text-gray-700 font-semibold text-3xl m-3">Barcha kurslar</h3>
            <div className="courses w-full h-full flex flex-wrap p-3 gap-3 justify-center">
                <div className="course-card w-1/5 h-max rounded-xl bg-white flex flex-col p-3 gap-2">
                    <img src={ex} className='rounded-lg' alt="" />
                    <span className="text-lg text-gray-700 font-semibold">Buxgalteriya: kirish va asosiy prinsiplar</span>
                    <span className="author text-gray-700 flex items-center gap-3">
                        <i className="fas fa-user"></i>
                        Javohir Abdullayev
                    </span>
                    <span className="participants text-gray-700 flex items-center text-md gap-2">
                        <i className="fas fa-user-group"></i>
                        300 o'quvchi
                    </span>
                    <span className="cost text-gray-700 flex items-center text-md gap-2">
                    <i class="fa-solid fa-money-bill"></i>
                        <span className="font-semibold bg-green-200 px-2 rounded-lg text-green-600">Bepul</span>
                    </span>
                    <div className="rate flex items-center gap-2 text-gray-700">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span className="rate-num">4.5</span>
                    </div>

                    <Link to={`/join-course?id=${1}`} target='_blank' className='w-full text-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-center text-white font-semibold py-2 rounded-lg'>Kursni ko'rish</Link>
                </div>

                <div className="course-card w-1/5 h-max rounded-xl bg-white flex flex-col p-3 gap-2">
                    <img src={ex} className='rounded-lg' alt="" />
                    <span className="text-lg text-gray-700 font-semibold">Buxgalteriya: kirish va asosiy prinsiplar</span>
                    <span className="author text-gray-700 flex items-center gap-3">
                        <i className="fas fa-user"></i>
                        Javohir Abdullayev
                    </span>
                    <span className="participants text-gray-700 flex items-center text-md gap-2">
                        <i className="fas fa-user-group"></i>
                        300 o'quvchi
                    </span>
                    <span className="cost text-gray-700 flex items-center text-md gap-2">
                    <i class="fa-solid fa-money-bill"></i>
                        3 500 000 so'm
                    </span>
                    <div className="rate flex items-center gap-2 text-gray-700">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span className="rate-num">4.5</span>
                    </div>

                    <Link to={`/join-course?id=${1}`} target='_blank'  className='w-full text-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-center text-white font-semibold py-2 rounded-lg'>Kursni ko'rish</Link>
                </div>

                <div className="course-card w-1/5 h-max rounded-xl bg-white flex flex-col p-3 gap-2">
                    <img src={ex} className='rounded-lg' alt="" />
                    <span className="text-lg text-gray-700 font-semibold">Buxgalteriya: kirish va asosiy prinsiplar</span>
                    <span className="author text-gray-700 flex items-center gap-3">
                        <i className="fas fa-user"></i>
                        Javohir Abdullayev
                    </span>
                    <span className="participants text-gray-700 flex items-center text-md gap-2">
                        <i className="fas fa-user-group"></i>
                        300 o'quvchi
                    </span>
                    <span className="cost text-gray-700 flex items-center text-md gap-2">
                    <i class="fa-solid fa-money-bill"></i>
                        <span className="font-semibold bg-green-200 px-2 rounded-lg text-green-600">Bepul</span>
                    </span>
                    <div className="rate flex items-center gap-2 text-gray-700">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span className="rate-num">4.5</span>
                    </div>

                    <Link to={`/join-course?id=${1}`} target='_blank' className='w-full text-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-center text-white font-semibold py-2 rounded-lg'>Kursni ko'rish</Link>
                </div>

                <div className="course-card w-1/5 h-max rounded-xl bg-white flex flex-col p-3 gap-2">
                    <img src={ex} className='rounded-lg' alt="" />
                    <span className="text-lg text-gray-700 font-semibold">Buxgalteriya: kirish va asosiy prinsiplar</span>
                    <span className="author text-gray-700 flex items-center gap-3">
                        <i className="fas fa-user"></i>
                        Javohir Abdullayev
                    </span>
                    <span className="participants text-gray-700 flex items-center text-md gap-2">
                        <i className="fas fa-user-group"></i>
                        300 o'quvchi
                    </span>
                    <span className="cost text-gray-700 flex items-center text-md gap-2">
                    <i class="fa-solid fa-money-bill"></i>
                        3 500 000 so'm
                    </span>
                    <div className="rate flex items-center gap-2 text-gray-700">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span className="rate-num">4.5</span>
                    </div>

                    <Link to={`/join-course?id=${1}`} target='_blank' className='w-full text-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-center text-white font-semibold py-2 rounded-lg'>Kursni ko'rish</Link>
                </div>

                <div className="course-card w-1/5 h-max rounded-xl bg-white flex flex-col p-3 gap-2">
                    <img src={ex} className='rounded-lg' alt="" />
                    <span className="text-lg text-gray-700 font-semibold">Buxgalteriya: kirish va asosiy prinsiplar</span>
                    <span className="author text-gray-700 flex items-center gap-3">
                        <i className="fas fa-user"></i>
                        Javohir Abdullayev
                    </span>
                    <span className="participants text-gray-700 flex items-center text-md gap-2">
                        <i className="fas fa-user-group"></i>
                        300 o'quvchi
                    </span>
                    <span className="cost text-gray-700 flex items-center text-md gap-2">
                    <i class="fa-solid fa-money-bill"></i>
                        <span className="font-semibold bg-green-200 px-2 rounded-lg text-green-600">Bepul</span>
                    </span>
                    <div className="rate flex items-center gap-2 text-gray-700">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span className="rate-num">4.5</span>
                    </div>

                    <Link to={`/join-course?id=${1}`} target='_blank' className='w-full text-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-center text-white font-semibold py-2 rounded-lg'>Kursni ko'rish</Link>
                </div>

                <div className="course-card w-1/5 h-max rounded-xl bg-white flex flex-col p-3 gap-2">
                    <img src={ex} className='rounded-lg' alt="" />
                    <span className="text-lg text-gray-700 font-semibold">Buxgalteriya: kirish va asosiy prinsiplar</span>
                    <span className="author text-gray-700 flex items-center gap-3">
                        <i className="fas fa-user"></i>
                        Javohir Abdullayev
                    </span>
                    <span className="participants text-gray-700 flex items-center text-md gap-2">
                        <i className="fas fa-user-group"></i>
                        300 o'quvchi
                    </span>
                    <span className="cost text-gray-700 flex items-center text-md gap-2">
                    <i class="fa-solid fa-money-bill"></i>
                        3 500 000 so'm
                    </span>
                    <div className="rate flex items-center gap-2 text-gray-700">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span className="rate-num">4.5</span>
                    </div>

                    <Link to={`/join-course?id=${1}`} target='_blank' className='w-full text-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-center text-white font-semibold py-2 rounded-lg'>Kursni ko'rish</Link>
                </div>

                <div className="course-card w-1/5 h-max rounded-xl bg-white flex flex-col p-3 gap-2">
                    <img src={ex} className='rounded-lg' alt="" />
                    <span className="text-lg text-gray-700 font-semibold">Buxgalteriya: kirish va asosiy prinsiplar</span>
                    <span className="author text-gray-700 flex items-center gap-3">
                        <i className="fas fa-user"></i>
                        Javohir Abdullayev
                    </span>
                    <span className="participants text-gray-700 flex items-center text-md gap-2">
                        <i className="fas fa-user-group"></i>
                        300 o'quvchi
                    </span>
                    <span className="cost text-gray-700 flex items-center text-md gap-2">
                    <i class="fa-solid fa-money-bill"></i>
                        <span className="font-semibold bg-green-200 px-2 rounded-lg text-green-600">Bepul</span>
                    </span>
                    <div className="rate flex items-center gap-2 text-gray-700">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span className="rate-num">4.5</span>
                    </div>

                    <Link to={`/join-course?id=${1}`} target='_blank' className='w-full text-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-center text-white font-semibold py-2 rounded-lg'>Kursni ko'rish</Link>
                </div>

                <div className="course-card w-1/5 h-max rounded-xl bg-white flex flex-col p-3 gap-2">
                    <img src={ex} className='rounded-lg' alt="" />
                    <span className="text-lg text-gray-700 font-semibold">Buxgalteriya: kirish va asosiy prinsiplar</span>
                    <span className="author text-gray-700 flex items-center gap-3">
                        <i className="fas fa-user"></i>
                        Javohir Abdullayev
                    </span>
                    <span className="participants text-gray-700 flex items-center text-md gap-2">
                        <i className="fas fa-user-group"></i>
                        300 o'quvchi
                    </span>
                    <span className="cost text-gray-700 flex items-center text-md gap-2">
                    <i class="fa-solid fa-money-bill"></i>
                        3 500 000 so'm
                    </span>
                    <div className="rate flex items-center gap-2 text-gray-700">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span className="rate-num">4.5</span>
                    </div>

                    <Link to={`/join-course?id=${1}`} target='_blank' className='w-full text-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-center text-white font-semibold py-2 rounded-lg'>Kursni ko'rish</Link>
                </div>

                <div className="course-card w-1/5 h-max rounded-xl bg-white flex flex-col p-3 gap-2">
                    <img src={ex} className='rounded-lg' alt="" />
                    <span className="text-lg text-gray-700 font-semibold">Buxgalteriya: kirish va asosiy prinsiplar</span>
                    <span className="author text-gray-700 flex items-center gap-3">
                        <i className="fas fa-user"></i>
                        Javohir Abdullayev
                    </span>
                    <span className="participants text-gray-700 flex items-center text-md gap-2">
                        <i className="fas fa-user-group"></i>
                        300 o'quvchi
                    </span>
                    <span className="cost text-gray-700 flex items-center text-md gap-2">
                    <i class="fa-solid fa-money-bill"></i>
                        <span className="font-semibold bg-green-200 px-2 rounded-lg text-green-600">Bepul</span>
                    </span>
                    <div className="rate flex items-center gap-2 text-gray-700">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span className="rate-num">4.5</span>
                    </div>

                    <Link to={`/join-course?id=${1}`} target='_blank' className='w-full text-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-center text-white font-semibold py-2 rounded-lg'>Kursni ko'rish</Link>
                </div>

                <div className="course-card w-1/5 h-max rounded-xl bg-white flex flex-col p-3 gap-2">
                    <img src={ex} className='rounded-lg' alt="" />
                    <span className="text-lg text-gray-700 font-semibold">Buxgalteriya: kirish va asosiy prinsiplar</span>
                    <span className="author text-gray-700 flex items-center gap-3">
                        <i className="fas fa-user"></i>
                        Javohir Abdullayev
                    </span>
                    <span className="participants text-gray-700 flex items-center text-md gap-2">
                        <i className="fas fa-user-group"></i>
                        300 o'quvchi
                    </span>
                    <span className="cost text-gray-700 flex items-center text-md gap-2">
                    <i class="fa-solid fa-money-bill"></i>
                        3 500 000 so'm
                    </span>
                    <div className="rate flex items-center gap-2 text-gray-700">
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
    )
}
