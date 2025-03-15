import React, { useState } from 'react';
import "../fontawesome-free-6.7.2-web/css/all.css";

export default function CreateExam() {
    const [title, setTitle] = useState("");
    const [maxScore, setMaxScore] = useState(100);
    const [chance, setChance] = useState(1);
    const [showResult, setShowResult] = useState(false);
    const [time, setTime] = useState(0);

    const [tests, setTests] = useState([
        { id: 1, text: "Hello world", options: ["1", "2", "3", "4"], correct: 0 }
    ]);

    const addTest = () => {
        const newTest = {
            id: tests.length + 1,
            text: "",
            options: ["", "", "", ""],
            correct: 0
        };
        setTests([...tests, newTest]);
    };

    const deleteTest = (id) => {
        setTests(tests.filter(test => test.id !== id));
    };

    const handleOptionChange = (testId, optionIndex, value) => {
        setTests(tests.map(test => {
            if (test.id === testId) {
                const updatedOptions = [...test.options];
                updatedOptions[optionIndex] = value;
                return { ...test, options: updatedOptions };
            }
            return test;
        }));
    };

    const handleTestTextChange = (testId, text) => {
        setTests(tests.map(test => {
            if (test.id === testId) {
                return { ...test, text: text };
            }
            return test;
        }));
    };

    const handlePublish = () => {
        // Add logic to publish or submit the exam here
        console.log("Publishing exam:", { title, maxScore, chance, showResult, tests });
    };

    return (
        <div className='w-full min-h-screen h-max bg-gray-900 flex flex-col gap-2 p-5'>
            <div className="mains w-full h-1/3 bg-gray-600 rounded-xl shadow-xl p-3 flex flex-col">
                <div className="line w-full flex flex-col gap-2">
                    <div className="flex items-center w-1/2 gap-2">
                        <label htmlFor="exam-name" className="text-white text-lg">Sarlavha kiriting:</label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                            name="exam-name"
                            id="exam-name"
                            placeholder='Shu yerga...'
                            className="text-white w-full outline-none border-2 border-transparent border-b-cyan-500 rounded-b-none text-xl py-2 px-3"
                        />
                    </div>
                    <div className="flex items-center w-1/2 gap-2">
                        <label htmlFor="max-score" className="text-white text-lg">Umumiy ball kiriting:</label>
                        <input
                            value={maxScore}
                            onChange={(e) => setMaxScore(e.target.value)}
                            type="number"
                            name="max-score"
                            id="max-score"
                            placeholder='Shu yerga...'
                            className="text-white w-full outline-none border-2 border-transparent border-b-cyan-500 rounded-b-none text-xl py-2 px-3"
                        />
                    </div>
                    <div className="flex items-center w-1/2 gap-2">
                        <label htmlFor="chance" className="text-white text-lg">Test topshrish imkoniyati:</label>
                        <input
                            value={chance}
                            onChange={(e) => setChance(e.target.value)}
                            type="number"
                            name="chance"
                            id="chance"
                            placeholder="O'quvchi necha marta imtihonni qayta topshira oladi"
                            className="text-white w-full outline-none border-2 border-transparent border-b-cyan-500 rounded-b-none text-lg py-2 px-3"
                        />
                    </div>
                    <div className="flex items-center w-1/2 gap-2">
                        <label htmlFor="time" className="text-white text-lg">Vaqt (daqiqada) :</label>
                        <input
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            type="number"
                            name="time"
                            id="time"
                            placeholder="Daqiqada"
                            className="text-white w-full outline-none border-2 border-transparent border-b-cyan-500 rounded-b-none text-lg py-2 px-3"
                        />
                    </div>
                    <div className="flex items-center w-1/2 gap-2">
                        <input
                            checked={showResult ? true : false}
                            onChange={() => setShowResult(!showResult)}
                            type="checkbox"
                            name="show-score"
                            id="show-score"
                        />
                        <label htmlFor="show-score" className="text-white text-lg cursor-pointer select-none">
                            Natijalar imtihon topshirish vaqti tugagach ko'rsatilsin. (O'quvchi/ a'zolarga)
                        </label>
                    </div>
                    <span className="text-gray-400 text-md flex items-center gap-2 px-5 py-3 cursor-pointer transition-all duration-500 active:bg-gray-400 rounded-full select-none active:text-gray-700">
                        <i className="fas fa-circle-exclamation"></i> Savollar orasida ochiq (variantsiz) testlar mavjud bo'lsa natija avtomatik hisoblanmaydi va tugatgach sizga yuboriladi, natija test egasi tomonidan baholanadi (to'liq).
                    </span>
                </div>
            </div>

            <div className="tests w-full h-max bg-gray-600 rounded-xl p-3">
                <div className="test-list w-full flex flex-col">
                    {tests.map((test, index) => (
                        <div key={test.id} className="test w-full flex flex-col p-3">
                            <span className="text-white text-xl font-semibold">
                                {index + 1}.{" "}
                                <input
                                    type="text"
                                    value={test.text}
                                    onChange={(e) => handleTestTextChange(test.id, e.target.value)}
                                    className="text-white w-full outline-none border-2 border-transparent border-b-cyan-500 rounded-b-none text-xl py-2 px-3 mb-2"
                                />
                            </span>
                            <ul className="options flex flex-col gap-3">
                                {test.options.map((option, optionIndex) => (
                                    <li key={optionIndex} className="option flex gap-3">
                                        <input
                                            type="radio"
                                            name={`question-${index}`}
                                            id={`option-${index}-${optionIndex}`}
                                            value={option}
                                        />
                                        <input
                                            type="text"
                                            value={option}
                                            onChange={(e) => handleOptionChange(test.id, optionIndex, e.target.value)}
                                            className="min-w-1/2 bg-transparent border-2 border-b-cyan-500 border-transparent text-white outline-none px-2"
                                        />
                                        
                                    </li>
                                ))}
                                <button
                                            type="button"
                                            onClick={() => deleteTest(test.id)}
                                            className="text-red-500"
                                        >
                                            Delete
                                        </button>
                            </ul>
                        </div>
                    ))}
                    <button
                        onClick={addTest}
                        className="text-white bg-blue-500 py-2 px-4 rounded mt-2"
                    >
                        Add Test
                    </button>
                </div>
            </div>

            <button
                onClick={handlePublish}
                className="bg-green-500 text-white py-2 px-6 rounded mt-4 self-center"
            >
                Publish
            </button>
        </div>
    );
}
