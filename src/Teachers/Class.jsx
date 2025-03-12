import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../fontawesome-free-6.7.2-web/css/all.css";

export default function Class() {
    const { id } = useParams(); // TO‘G‘RI FOYDALANISH
    const [chatWindow, setchatWindow] = useState(false);
    const [alertModal, setAlertModal] = useState(false);

    return (
        <div className='w-full h-screen bg-gray-900 flex flex-col p-5'>
            <div className="over w-full h-20 bg-gray-700 rounded-lg p-5 py-2 flex">
                <div className="flex flex-col">
                    <h1 className="text-white text-2xl p-0">II sinf </h1>
                    <span className="text-gray-400 flex items-center gap-2 p-0 text-sm">
                        <i className="fas fa-calendar"></i>
                        Dushanba - Chorchanba - Juma <span className="font-bold">|</span>
                        <i className="fas fa-user-group"></i>
                        25 nafar <span className="font-bold">|</span>
                        <i className="fas fa-clock"></i>
                        15:00 - 17:00
                    </span>
                </div>
            </div>
            <div className="w-full h-screen p-3 flex flex-col relative">
                <div className="flex items-center gap-2">
                    <button className="text-white px-4 py-2 text-lg bg-gradient-to-r rounded-lg from-purple-400 to-cyan-400 flex items-center gap-2 cursor-pointer transition-all duration-500 hover:opacity-85 hover:scale-95"> <i className="fas fa-video"></i> Videochat tashkillashtirish</button>
                    <Link to='/desk' target='_blank' className="text-white px-4 py-2 text-lg bg-gradient-to-r rounded-lg from-purple-400 to-cyan-400 flex items-center gap-2 cursor-pointer transition-all duration-500 hover:opacity-85 hover:scale-95"><i class="fa-solid fa-chalkboard"></i>Doska orqali translyatsiya</Link>
                    <button onClick={() => setchatWindow(true)} className="text-white px-4 py-2 text-lg bg-gradient-to-r rounded-lg from-purple-400 to-cyan-400 flex items-center gap-2 cursor-pointer transition-all duration-500 hover:opacity-85 hover:scale-95"><i class="fa-solid fa-message"></i> Chat</button>
                    <button onClick={() => setAlertModal(true)} className="text-white px-4 py-2 text-lg bg-gradient-to-r rounded-lg from-purple-400 to-cyan-400 flex items-center gap-2 cursor-pointer transition-all duration-500 hover:opacity-85 hover:scale-95"><i class="fa-solid fa-circle-exclamation"></i> O'quvchilarga e'lon qilish</button>
                </div>
            </div>

            {chatWindow && (
                <div className="chat-box transition-all duration-500 w-1/3 h-[90vh] overflow-hidden bg-gray-700 absolute right-0 top-10 rounded-tl-xl rounded-bl-xl flex flex-col">
                    <div className="nav w-full flex items-center h-[7%] gap-5 px-4 bg-gray-900">
                        <i onClick={() => setchatWindow(false)} className="fas fa-x text-white cursor-pointer select-none"></i>
                        <span className="text-white text-lg">Chat</span>
                    </div>
                    <div className="messages w-full h-full flex flex-col">
                        <div className="w-full flex items-bottom relative p-3 relative h-max gap-2">
                            <img src="https://picsum.photos/seed/picsum/200/300" className="w-8 h-8 rounded-full" alt="" />
                            <span className="w-max h-max bg-gray-600 max-w-[80%] text-white p-2 rounded-tl-lg rounded-br-lg rounded-tr-lg">Hi there!</span>
                        </div>

                        <div className="w-full flex items-bottom relative p-3 justify-end relative h-max gap-2">
                            {/* <img src="https://picsum.photos/seed/picsum/200/300" className="w-8 h-8 rounded-full" alt="" /> */}
                            <span className=" h-max bg-cyan-600 max-w-[80%] text-white p-2 rounded-tl-lg rounded-bl-lg rounded-tr-lg">Hi there!jnnnnnnnnnjinuininuininu njjnnnnnnnnnnnnnnnnnnnnnn jnknjnj nononio nono</span>
                        </div>
                    </div>

                    <div className="send w-full h-10 bg-gray-900 relative transition-all duration-500">
                        <button className="w-12 h-full absolute bg-cyan-600 text-white rounded-tl-xl text-center py-2 px-3 cursor-pointer transition-all duration-500 hover:scale-95 right-0"> <i className="fas fa-paper-plane"></i> </button>
                        <textarea name="" id="" className='w-full pr-10 h-full rounded-bl-xl text-white px-2 outline-none border-2 border-transparent focus:border-cyan-600 '></textarea>
                    </div>

                </div>
            )}

            {alertModal && (
                <div className="modal absolute w-full h-screen flex items-center justify-center">
                    <div className="w-1/2 h-1/2 bg-gray-800 shadow-xl flex flex-col p-3 rounded-lg">
                        <h3 className="text-white text-3xl">E'lon jo'natish</h3>
                        <form action="" className="w-full h-full flex flex-col mt-5">
                            <label htmlFor="ad" className="text-cyan-400 text-md select-none cursor-pointer">E'lon matnini yozing:</label>
                            <textarea name="" className='w-full h-1/2 outline-none border-2 border-gray-500 rounded-lg p-2 text-white' id="ad"></textarea>

                            <div className="flex w-full justify-center mt-3 items-center gap-4">
                                <button className="text-white px-4 py-2 text-lg bg-gradient-to-r rounded-lg from-purple-400 to-cyan-400 flex items-center gap-2 cursor-pointer transition-all duration-500 hover:opacity-85 hover:scale-95">Jo'natish</button>
                                <button onClick={()=>setAlertModal(false)} className="text-white px-4 py-2 rounded-lg text-lg bg-gray-600 flex items-center gap-2 cursor-pointer transition-all duration-500 hover:opacity-85 hover:scale-95">Bekor qilish</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
