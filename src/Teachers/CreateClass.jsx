import React, { useState } from 'react'

export default function CreateClass() {
  const [weekdays, setWeekDays] = useState([]);
  const [hasLimit, setHasLimit] = useState(true);
  function changeDay(day) {
    if (weekdays.includes(day)) {
      setWeekDays(weekdays.filter(d => d !== day)); // Elementni olib tashlash
    } else {
      setWeekDays([...weekdays, day]); // Yangi element qo‘shish
    }

    console.log(weekdays);
  }

  return (
    <div className='w-full h-max bg-slate-200 flex p-5 flex-col items-center' >
    
      <form action="" className=" w-1/2 h-max bg-white shadow-xl text-black flex flex-col p-5 items-center gap-4 rounded-lg">
        <h3 className="text-xl font-semibold">Yangi sinf</h3>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="classname" className="text-blue-300 text-lg">Sinf nomini kiriting:</label>
          <input type="text" id="classname" className="border-2 border-gray-500 outline-none p-2 text-md rounded-xl" placeholder='Shu yerga kiriting.' />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="day" className="text-blue-300 text-lg">Dars kunlarini tanlang:</label>
          <ul className="flex flex-col gap-2">
            <li className={`day ${weekdays.includes(1) ? "bg-blue-500" : "bg-gray-300"} rounded-lg w-max px-4 py-1 text-white cursor-pointer`} onClick={() => changeDay(1)}>Dushanba</li>
            <li className={`day ${weekdays.includes(2) ? "bg-blue-500" : "bg-gray-300"} rounded-lg w-max px-4 py-1 text-white cursor-pointer`} onClick={() => changeDay(2)}>Sechanba</li>
            <li className={`day ${weekdays.includes(3) ? "bg-blue-500" : "bg-gray-300"} rounded-lg w-max px-4 py-1 text-white cursor-pointer`} onClick={() => changeDay(3)}>Chorshanba</li>
            <li className={`day ${weekdays.includes(4) ? "bg-blue-500" : "bg-gray-300"} rounded-lg w-max px-4 py-1 text-white cursor-pointer`} onClick={() => changeDay(4)}>Payshanba</li>
            <li className={`day ${weekdays.includes(5) ? "bg-blue-500" : "bg-gray-300"} rounded-lg w-max px-4 py-1 text-white cursor-pointer`} onClick={() => changeDay(5)}>Juma</li>
            <li className={`day ${weekdays.includes(6) ? "bg-blue-500" : "bg-gray-300"} rounded-lg w-max px-4 py-1 text-white cursor-pointer`} onClick={() => changeDay(6)}>Shanba</li>
            <li className={`day ${weekdays.includes(7) ? "bg-blue-500" : "bg-gray-300"} rounded-lg w-max px-4 py-1 text-white cursor-pointer`} onClick={() => changeDay(7)}>Yakshanba</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 mt-4 w-full">
          <div className="flex-items-center gap-2 w-full">
            <input type="checkbox" name="" id="limit" onChange={() => setHasLimit(!hasLimit)} />
            <label htmlFor="limit">O'quvchilar soniga cheklov o'rnatilsin.</label>
          </div>
          <label htmlFor="limitnum" className="text-blue-300 text-lg">Maksimal o'quvchi soni:</label>
          <input
            type="number"
            id="limitnum"
            className={`border-2 border-gray-500 ${hasLimit ? "opacity-50" : ""} outline-none p-2 text-md rounded-xl`}
            disabled={hasLimit}
            placeholder="Shu yerga kiriting."
          />
        </div>

        <input type="submit" value="Saqlash" className='mt-5 text-xl text-white bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-3 rounded-full cursor-pointer transition-all duration-500 hover:scale-105' />
      </form>
    </div>
  )
}
