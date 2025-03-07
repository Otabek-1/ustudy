import React, { useState } from 'react'

export default function Profile() {
    const [name, setName] = useState("Otabek Burhonov");
    const [email, setEmail] = useState("burhonovotabek5@gmail.com");
    const [phone, setPhone] = useState("992282108");
    const [age, setAge] = useState("16");
    return (
        <div className='w-full h-full overflow-y-scroll bg-slate-200 flex flex-col p-5 gap-3'>
            <div className="info-box w-full h-1/2 bg-white rounded-lg flex p-4 gap-2">
                <div className="logo w-1/3 h-full  flex flex-col items-center select-none py-5 gap-5">
                    <img
                        src="https://picsum.photos/100/100"
                        className="w-40 h-40 object-cover rounded-full transition-all duration-700 hover:rounded-xl hover:shadow-lg hover:opacity-90 cursor-pointer"
                        alt="Logo"
                    />
                    <button className="change w-full bg-gradient-to-r from-purple-400 to-cyan-500 text-white py-2 rounded-full">Rasmni o'zgartirish</button>
                </div>
                <form className="info flex-wrap w-full h-full  flex flex-col p-3 gap-3">
                    <div className="flex w-max  flex-col">
                        <label htmlFor="name" className="text-gray-700 text-lg">Ism familya</label>
                        <div className="flex items-center">
                            <input type="text" name="name" id="name" className="border-2 border-cyan-300 outline-none text-gray-700 rounded-lg px-5 py-2 min-w-80" value={name} onChange={(e) => setName(e.target.value)} readOnly />
                        </div>
                    </div>

                    <div className="flex w-max  flex-col">
                        <label htmlFor="email" className="text-gray-700 text-lg">Email</label>
                        <div className="flex items-center">
                            <input type="email" name="email" id="email" className="border-2 border-cyan-300 outline-none text-gray-700 rounded-lg px-5 py-2 min-w-80" value={email} onChange={(e) => setEmail(e.target.value)} readOnly />
                        </div>
                    </div>

                    <div className="flex w-max  flex-col">
                        <label htmlFor="phone" className="text-gray-700 text-lg">Telefon raqam</label>
                        <div className="flex items-center">
                            <input type="phone" name="phone" id="phone" className="border-2 border-cyan-300 outline-none text-gray-700 rounded-lg px-5 py-2 min-w-80" value={phone} onChange={(e) => setPhone(e.target.value)} readOnly />
                        </div>
                    </div>

                    <div className="flex w-max  flex-col">
                        <label htmlFor="age" className="text-gray-700 text-lg">Yoshingiz</label>
                        <div className="flex items-center">
                            <input type="age" name="age" id="age" className="border-2 border-cyan-300 outline-none text-gray-700 rounded-lg px-5 py-2 min-w-80" value={age} onChange={(e) => setAge(e.target.value)} readOnly />
                        </div>
                    </div>

                    <div className="flex w-max  flex-col">
                        <label htmlFor="district" className="text-gray-700 text-lg">Manzil</label>
                        <select name="district" id="district" className="border-2 w-full outline-none border-cyan-300 rounded-lg px-4 py-2">
                            <option value="">Viloyatni tanlang</option>

                            <optgroup label="Qoraqalpog‘iston Respublikasi">
                                <option value="Nukus">Nukus</option>
                                <option value="Beruniy">Beruniy</option>
                                <option value="Chimboy">Chimboy</option>
                                <option value="Xo‘jayli">Xo‘jayli</option>
                            </optgroup>

                            <optgroup label="Andijon viloyati">
                                <option value="Andijon">Andijon</option>
                                <option value="Asaka">Asaka</option>
                                <option value="Baliqchi">Baliqchi</option>
                                <option value="Bo'ston">Bo'ston</option>
                            </optgroup>

                            <optgroup label="Buxoro viloyati">
                                <option value="Buxoro">Buxoro</option>
                                <option value="G‘ijduvon">G‘ijduvon</option>
                                <option value="Kogon">Kogon</option>
                                <option value="Shofirkon">Shofirkon</option>
                            </optgroup>

                            <optgroup label="Farg‘ona viloyati">
                                <option value="Farg‘ona">Farg‘ona</option>
                                <option value="Qo‘qon">Qo‘qon</option>
                                <option value="Marg‘ilon">Marg‘ilon</option>
                                <option value="Rishton">Rishton</option>
                            </optgroup>

                            <optgroup label="Jizzax viloyati">
                                <option value="Jizzax">Jizzax</option>
                                <option value="Zomin">Zomin</option>
                                <option value="G‘allaorol">G‘allaorol</option>
                                <option value="Do‘stlik">Do‘stlik</option>
                            </optgroup>

                            <optgroup label="Namangan viloyati">
                                <option value="Namangan">Namangan</option>
                                <option value="Chortoq">Chortoq</option>
                                <option value="Chust">Chust</option>
                                <option value="Uchqo‘rg‘on">Uchqo‘rg‘on</option>
                            </optgroup>

                            <optgroup label="Navoiy viloyati">
                                <option value="Navoiy">Navoiy</option>
                                <option value="Zarafshon">Zarafshon</option>
                                <option value="Karmana">Karmana</option>
                                <option value="Uchquduq">Uchquduq</option>
                            </optgroup>

                            <optgroup label="Qashqadaryo viloyati">
                                <option value="Qarshi">Qarshi</option>
                                <option value="Shahrisabz">Shahrisabz</option>
                                <option value="Dehqonobod">Dehqonobod</option>
                                <option value="Muborak">Muborak</option>
                            </optgroup>

                            <optgroup label="Samarqand viloyati">
                                <option value="Samarqand">Samarqand</option>
                                <option value="Urgut">Urgut</option>
                                <option value="Kattaqo‘rg‘on">Kattaqo‘rg‘on</option>
                                <option value="Pastdarg‘om">Pastdarg‘om</option>
                            </optgroup>

                            <optgroup label="Sirdaryo viloyati">
                                <option value="Guliston">Guliston</option>
                                <option value="Shirin">Shirin</option>
                                <option value="Yangiyer">Yangiyer</option>
                                <option value="Sardoba">Sardoba</option>
                            </optgroup>

                            <optgroup label="Surxondaryo viloyati">
                                <option value="Termiz">Termiz</option>
                                <option value="Denov">Denov</option>
                                <option value="Sherobod">Sherobod</option>
                                <option value="Boysun">Boysun</option>
                            </optgroup>

                            <optgroup label="Toshkent viloyati">
                                <option value="Toshkent">Toshkent</option>
                                <option value="Chirchiq">Chirchiq</option>
                                <option value="Bekobod">Bekobod</option>
                                <option value="Angren">Angren</option>
                            </optgroup>

                            <optgroup label="Xorazm viloyati">
                                <option value="Urganch">Urganch</option>
                                <option value="Xiva">Xiva</option>
                                <option value="Gurlan">Gurlan</option>
                                <option value="Shovot">Shovot</option>
                            </optgroup>
                        </select>
                    </div>

                    <div className="flex mt-5  flex-col">
                       <button className="text-white text-xl cursor-pointer rounded-lg py-2 bg-gradient-to-t w-full from-purple-400 to-cyan-500">Tahrirlash</button>
                    </div>
                </form>
            </div>

            <div className="info-box w-full h-max bg-white rounded-lg flex flex-col p-6 gap-4">
                <h2 className="text-gray-700 text-4xl">Xavfsizlik</h2>
                <form action="" className="flex flex-col w-full gap-2">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="current_password" className="text-gray-700">Joriy parolni kiriting:</label>
                        <input type="password" name="current_password" id="current_password" className='max-w-80 border-2 border-cyan-400 rounded-lg text-xl text-gray-700 outline-none px-5 py-2' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="current_password" className="text-gray-700">Yangi parolni kiriting:</label>
                        <input type="password" name="current_password" id="current_password" className='max-w-80 border-2 border-cyan-400 rounded-lg text-xl text-gray-700 outline-none px-5 py-2' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="current_password" className="text-gray-700">Yangi parolni takrorlang:</label>
                        <input type="password" name="current_password" id="current_password" className='max-w-80 border-2 border-cyan-400 rounded-lg text-xl text-gray-700 outline-none px-5 py-2' />
                    </div>
                    <button type="submit" className="text-white cursor-pointer bg-gradient-to-r from-purple-400 to-cyan-500 rounded-lg text-xl py-2 w-max px-5">Saqlash</button>
                </form>
            </div>

            <div className="info-box w-full h-max bg-white rounded-lg flex p-6 gap-4">
                <button className="bg-red-500 text-white px-5 py-2 rounded-lg text-xl cursor-pointer transition-all duration-500 hover:bg-red-800">Chiqish</button>
            </div>
        </div>
    )
}
