import React, { useState } from 'react'
import student from "./assets/student.jpg"
import teacher from "./assets/teacher.jpg"

export default function Auth() {
    const [isLogin, setisLogin] = useState(true);
    const [role, setRole] = useState("student"); // teacher
    return (
        <div className='w-full h-screen relative'>
            <img src={role == "student" ? student : teacher} className='w-full h-full object-cover' alt="" />
            <div className=" absolute w-full h-full top-0 left-0 flex items-center px-20" style={{ background: "linear-gradient(41deg, rgba(2,0,36,1) 0%, rgba(10,135,167,1) 35%, rgba(0,212,255,0) 100%)" }} >
                <div className="box w-80 h-100 flex flex-col items-center">
                    <h2 className="text-white text-4xl mb-5">{isLogin ? "Kirish" : "Ro'yxatdan o'tish"}</h2>
                    <div className={`modes mt-3 flex items-center ${isLogin ? 'hidden' : ""}`}>
                        <span onClick={() => setRole("teacher")}
                            className="text-white px-10 py-3 border-b-2 border-b-cyan-300 cursor-pointer transition-all duration-500 hover:text-cyan-300 rounded-lg rounded-b-none"
                            style={{ boxShadow: `inset 0px -4px 10px rgba(0, 255, 255, ${role === "teacher" ? '0.5' : '0'})` }}
                        >
                            O'qituvchi
                        </span>
                        <span onClick={() => setRole("student")}
                            className="text-white px-10 py-3 border-b-2 border-b-cyan-300 cursor-pointer transition-all duration-500 hover:text-cyan-300 rounded-lg rounded-b-none"
                            style={{ boxShadow: `inset 0px -4px 10px rgba(0, 255, 255, ${role === "student" ? '0.5' : '0'}) ` }}
                        >
                            O'quvchi
                        </span>
                    </div>

                    {isLogin && (
                        <form action="" className='flex flex-col mt-5 gap-5'>
                            <input type="email" name="" id="" className='w-full text-white rounded-lg px-5 text-xl py-2 min-w-80 outline-none border-2 border-cyan-300' placeholder='Email manzilingizni kiriting...' required />
                            <input type="password" name="" id="" className='w-full text-white rounded-lg px-5 text-xl py-2 min-w-80 outline-none border-2 border-cyan-300' placeholder='Parolni kiriting...' required />
                            <div className="flex items-center text-md gap-2 px-2">
                                <input type="checkbox" name="" id="remember" />
                                <label htmlFor="remember" className="text-white">30 kunga eslab qol.</label>
                            </div>
                            <button className="login text-white text-2xl bg-cyan-400 py-3 rounded-full">Kirish</button>

                            <span className="text-white text-center">Yangimisiz? <span className="text-cyan-300 cursor-pointer trnasition-all duration-500 hover:text-cyan-500" onClick={() => setisLogin(!isLogin)}>Ro'yxatdan o'ting.</span></span>
                        </form>
                    ) || (
                            <form action="" className='flex flex-col mt-5 gap-5'>
                                <input type="text" name="name" id="name" className='w-full text-white rounded-lg px-5 text-xl py-2 min-w-80 outline-none border-2 border-cyan-300' placeholder="To'liq ism- familya kiriting" required />
                                <input type="email" name="email" id="email" className='w-full text-white rounded-lg px-5 text-xl py-2 min-w-80 outline-none border-2 border-cyan-300' placeholder='Email manzilingizni kriting' required />
                                <div className="flex items-center">
                                    <span className="text-white text-xl py-2 border-2 border-cyan-300 rounded-bl-lg rounded-tl-lg w-20 bg-cyan-300">+998</span>
                                    <input type="number" name="" id="" className='w-full text-white rounded-lg px-5 text-xl py-2 min-w-80 outline-none border-2 border-cyan-300 rounded-tl-none rounded-bl-none ' placeholder='Telefon raqamingizni kriting' required />
                                </div>
                                <input type="password" name="" id="" className='w-full text-white rounded-lg px-5 text-xl py-2 min-w-80 outline-none border-2 border-cyan-300' placeholder='Parolni kiriting...' required />

                                <div className="flex items-center text-md gap-2 px-2">
                                    <input type="checkbox" name="" id="remember" />
                                    <label htmlFor="remember" className="text-white">30 kunga eslab qol.</label>
                                </div>
                                <button className="login text-white text-2xl bg-cyan-400 py-3 rounded-full">Ro'yxatdan o'tish</button>

                                <span className="text-white text-center">Allaqachon hisobingiz bormi? <span className="text-cyan-300 cursor-pointer trnasition-all duration-500 hover:text-cyan-500" onClick={() => setisLogin(!isLogin)}>Kirish</span></span>
                            </form>
                        )}


                </div>
            </div>
        </div>
    )
}
