import React, { useState, useEffect } from 'react';

export default function Profile() {
    const [theme, setTheme] = useState('light');
    const [name, setName] = useState("Otabek Burhonov");
    const [email, setEmail] = useState("burhonovotabek5@gmail.com");
    const [phone, setPhone] = useState("992282108");
    const [age, setAge] = useState("16");

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
    }, []);

    return (
        <div className={`w-full h-full overflow-y-scroll ${theme === 'light' ? 'bg-slate-200' : 'bg-gray-900'} flex flex-col p-5 gap-3`}>
            <div className={`info-box w-full h-1/2 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-lg flex p-4 gap-2`}>
                <div className="logo w-1/3 h-full flex flex-col items-center select-none py-5 gap-5">
                    <img
                        src="https://picsum.photos/100/100"
                        className="w-40 h-40 object-cover rounded-full transition-all duration-700 hover:rounded-xl hover:shadow-lg hover:opacity-90 cursor-pointer"
                        alt="Logo"
                    />
                    <button className="change w-full bg-gradient-to-r from-purple-400 to-cyan-500 text-white py-2 rounded-full">Rasmni o'zgartirish</button>

                    <span className={`${theme === 'light'? 'text-gray-700':'text-white'}  flex items-center text-lg font-semibold`}>🟢 Talaba/ o'quvchi</span>
                </div>
                <form className="info flex-wrap w-full h-full flex flex-col p-3 gap-3">
                    {[
                        { label: "Ism familya", value: name, setValue: setName },
                        { label: "Email", value: email, setValue: setEmail },
                        { label: "Telefon raqam", value: phone, setValue: setPhone },
                        { label: "Yoshingiz", value: age, setValue: setAge }
                    ].map((field, index) => (
                        <div key={index} className="flex w-max flex-col">
                            <label className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{field.label}</label>
                            <div className="flex items-center">
                                <input type="text" className={`border-2 ${theme === 'light' ? 'border-cyan-300 text-gray-700' : 'border-gray-500 text-gray-300'} outline-none rounded-lg px-5 py-2 min-w-80`} value={field.value} onChange={(e) => field.setValue(e.target.value)} readOnly />
                            </div>
                        </div>
                    ))}

                    <div className="flex w-max flex-col">
                        <label className={`text-lg ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>Manzil</label>
                        <select disabled className={`border-2 w-full outline-none ${theme === 'light' ? 'border-cyan-300 text-gray-700' : 'border-gray-500 text-gray-300'} rounded-lg px-4 py-2`}>
                            <option value="">Viloyatni tanlang</option>
                                <option value="Toshkent">Toshkent</option>
                                <option value="Qoraqalpog'iston">Qoraqalpog'iston</option>
                                <option value="Andijon">Andijon viloyati</option>
                                <option value="Buxoro">Buxoro  viloyati</option>
                                <option value="Farg‘ona">Farg‘ona viloyati</option>
                                <option value="Jizzax">Jizzax viloyati</option>
                                <option value="Namangan">Namangan viloyati</option>
                                <option value="Navoiy">Navoiy viloyati</option>
                                <option value="Qashqadaryo">Qashqadaryo viloyati</option>
                                <option value="Samarqand">Samarqand viloyati</option>
                                <option value="Sirdaryo">Sirdaryo viloyati</option>
                                <option value="Surxondaryo">Surxondaryo viloyati</option>
                                <option value="Xorazm">Xorazm viloyati</option>
                        </select>
                    </div>

                    <div className="flex mt-5 flex-col">
                        <button className="text-white text-xl cursor-pointer rounded-lg py-2 bg-gradient-to-t w-full from-purple-400 to-cyan-500">Tahrirlash</button>
                    </div>
                </form>
            </div>

            <div className={`info-box w-full h-max ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-lg flex flex-col p-6 gap-4`}>
                <h2 className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} text-4xl`}>Xavfsizlik</h2>
                <form className="flex flex-col w-full gap-2">
                    {["Joriy parolni kiriting:", "Yangi parolni kiriting:", "Yangi parolni takrorlang:"].map((label, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <label className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>{label}</label>
                            <input type="password" className={`max-w-80 border-2 ${theme === 'light' ? 'border-cyan-400 text-gray-700' : 'border-gray-500 text-gray-300'} rounded-lg text-xl outline-none px-5 py-2`} />
                        </div>
                    ))}
                    <button type="submit" className="text-white cursor-pointer bg-gradient-to-r from-purple-400 to-cyan-500 rounded-lg text-xl py-2 w-max px-5">Saqlash</button>
                </form>
            </div>

            <div className={`info-box w-full h-max ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-lg flex p-6 gap-4`}>
                <button className="bg-red-500 text-white px-5 py-2 rounded-lg text-xl cursor-pointer transition-all duration-500 hover:bg-red-800">Chiqish</button>
            </div>
        </div>
    );
}
