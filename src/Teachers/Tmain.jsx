import React, { useState } from 'react'
import "../fontawesome-free-6.7.2-web/css/all.css";
import { Link } from 'react-router-dom';

export default function Tmain() {
    const [copied, setCopied] = useState(false);
    return (
        <div className='w-full h-full flex flex-col p-5'>
            <div className="clesses w-full flex flex-col items-start">
                <Link to="/create-class" target='_blank' className="create-class text-white bg-gradient-to-r from-purple-400 to-cyan-500 py-2 px-5 rounded-full cursor-pointer transition-all duration-500 hover:opacity-85 hover:scale-95">Sinf yaratish</Link>
                <ul className="class-list w-full flex flex-col mt-5 gap-2">
                    <li className="text-white text-xl my-2">Sinflar</li>
                    <li className="class w-full h-max bg-gray-600 rounded-xl p-3 flex flex-col relative gap-2">
                        <div className="flex relative items-center w-full gap-5">
                            <span className="class-name text-white font-semibold text-xl">11- sinf</span>
                            <span className="times text-gray-300 flex text-xs items-center gap-2">
                                <i className="fas fa-calendar"></i>
                                Dush - Juma  <span className="font-semibold">09:00 - 12:00</span>
                            </span>
                            <span className="id text-gray-300 flex text-xs items-center gap-2">
                                ID: <span onClick={() => { navigator.clipboard.writeText("S2g4V3Qgkr"); setCopied(true) }} className='cursor-pointer transition-all duration-500 hover:bg-gray-500 hover:opacity-80 px-1 py-1 rounded-md select-none'>S2g4V3Qgkr</span>
                                {copied ? <i className="fas fa-check text-green-500"> copied</i> : null}
                            </span>
                            <div className="notification w-3 h-3 rounded-full bg-cyan-300 absolute top-[20%] right-0"></div>
                        </div>
                        <div className="reminder">
                            <span className="flex items-center bg-blue-300 text-blue-500 py-3 text-xl rounded-xl px-4 gap-5">
                                <i class="fa-solid fa-exclamation text-cyan-700"></i>
                                Dars 15 daqiqadan keyin boshlanadi!
                            </span>
                        </div>
                        <div className="flex items-center gap-4 relative">
                            <Link to={`/class/${"S2g4V3Qgkr"}`} className="text-white w-max flex items-center gap-2 text-lg px-4 py-2 rounded-lg bg-green-400 cursor-pointer transition-all duration-500 hover:opacity-85 hover:scale-95">
                                <i class="fa-solid fa-door-open"></i>
                                Kirish</Link>
                            <button className="text-white w-max flex items-center gap-2 text-lg px-4 py-2 rounded-lg bg-slate-400  transition-all duration-500 hover:opacity-85 hover:scale-95 cursor-pointer">
                                <i className="fas fa-cog"></i>
                                Sozlamalar</button>
                            <button className="text-white w-max flex items-center gap-2 text-lg px-4 py-2 rounded-lg bg-slate-400  transition-all duration-500 hover:opacity-85 hover:scale-95 cursor-pointer">
                                <i className="fas fa-circle-info"></i>
                                Info</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
