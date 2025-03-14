import React, { useState } from 'react'
import "../fontawesome-free-6.7.2-web/css/all.css";

export default function CreateExam() {
    const [title, setTitle] = useState("");
    const [maxScore, setMaxScore] = useState(100);
    const [chance,setChance] = useState(1);
    const [showResult, setShowResult] = useState(false);
    return (
        <div className='w-full h-screen bg-gray-900 flex flex-col p-5'>
            <div className="mains w-full h-1/3 bg-gray-600 rounded-xl shadow-xl p-3 flex flex-col">
                <div className="line w-full flex flex-col gap-2">
                    <div className="flex items-center w-1/2 gap-2">
                        <label htmlFor="exam-name" className="text-white text-lg">Sarlavha kiriting:</label>
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" name="exam-name" id="exam-name" placeholder='Shu yerga...' className="text-white w-full outline-none border-2 border-transparent border-b-cyan-500 rounded-b-none text-xl py-2 px-3" />
                    </div>
                    <div className="flex items-center w-1/2 gap-2">
                        <label htmlFor="max-score" className="text-white text-lg">Umumiy ball kiriting:</label>
                        <input value={maxScore} onChange={(e)=>setMaxScore(e.target.value)} type="number" name="max-score" id="max-score" placeholder='Shu yerga...' className="text-white w-full outline-none border-2 border-transparent border-b-cyan-500 rounded-b-none text-xl py-2 px-3" />
                    </div>
                    <div className="flex items-center w-1/2 gap-2">
                        <label htmlFor="chance" className="text-white text-lg">Test topshrish imkoniyati:</label>
                        <input value={chance} onChange={(e)=>setChance(e.target.value)} type="number" name="chance" id="chance" placeholder="O'quvchi necha marta imtihonni qayta topshira oladi" className="text-white w-full outline-none border-2 border-transparent border-b-cyan-500 rounded-b-none text-lg py-2 px-3" />
                    </div>
                    <div className="flex items-center w-1/2 gap-2">
                        <input checked={showResult?true:false} onChange={()=>setShowResult(!showResult)} type="checkbox" name="show-score" id="show-score" />
                        <label htmlFor="show-score" className="text-white text-lg cursor-pointer select-none">Natijalar imtihon topshirish vaqti tugagach ko'rsatilsin. (O'quvchi/ a'zolarga)</label>
                    </div>
                    <span className="text-gray-400 text-md flex items-center gap-2 px-5 py-3 cursor-pointer transition-all duration-500 active:bg-gray-400 rounded-full select-none active:text-gray-700"><i className="fas fa-circle-exclamation"></i> Savollar orasida ochiq (variantsiz) testlar mavjud bo'lsa natija avtomatik hisoblanmaydi va tugatgach sizga yuboriladi, natija test egasi tomonidan baholanadi (to'liq).</span>
                </div>
            </div>

        </div>
    )
}
