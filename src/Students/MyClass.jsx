import React, { useState } from 'react';

export default function MyClass() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            setMessages([...messages, { text: inputMessage, sender: 'Siz' }]);
            setInputMessage('');
        }
    };

    return (
        <div className='w-full min-h-screen h-max p-5 flex flex-col gap-3 bg-gray-800'>
            <div className="w-full h-10 bg-gray-700 justify-between p-3 rounded-lg shadow-xl flex items-center">
                <div className="flex items-center gap-3">
                    <h2 className="text-xl text-white font-semibold">II sinf</h2>
                    <span className="text-white text-sm opacity-50">ID: <span className="text-white px-1 rounded-lg bg-gray-500">D3fjJ9j94</span></span>
                </div>
                <div className="flex items-center">
                    <button className="text-white bg-red-500 rounded-lg px-2 py-1">Sinfni tark etish</button>
                </div>
            </div>
            
            <div className="main w-full bg-gray-700 rounded-lg p-4 flex flex-col gap-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Translyatsiyani boshlash</button>
                
                <div className="bg-gray-600 p-4 rounded-lg">
                    <h3 className="text-white text-lg font-semibold">Yangiliklar va Testlar</h3>
                    <div className="mt-2 bg-gray-500 p-3 rounded-lg text-white">Matematika testi yuklandi!</div>
                    <div className="mt-2 bg-gray-500 p-3 rounded-lg text-white">Ona tili imtihoni boshlandi!</div>
                </div>
            </div>
            
            <div className="chat w-full bg-gray-700 p-4 rounded-lg mt-4">
                <h3 className="text-white text-lg font-semibold">Sinf Chat</h3>
                <div className="chat-box h-40 overflow-y-auto bg-gray-600 p-3 rounded-lg mt-2">
                    {messages.map((msg, index) => (
                        <div key={index} className={`p-2 rounded-lg ${msg.sender === 'Siz' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white'}`}>
                            <strong>{msg.sender}: </strong>{msg.text}
                        </div>
                    ))}
                </div>
                <div className="mt-2 flex gap-2">
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Xabar yozing..."
                        className="flex-1 p-2 rounded-lg bg-gray-500 text-white"
                    />
                    <button onClick={handleSendMessage} className="bg-green-500 text-white px-4 py-2 rounded-lg">Yuborish</button>
                </div>
            </div>
        </div>
    );
}
