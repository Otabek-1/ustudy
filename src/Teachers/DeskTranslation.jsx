import React, { useRef, useState, useEffect } from 'react';
import "../fontawesome-free-6.7.2-web/css/all.css";

export default function DeskTranslation() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [isStarted, setIsStarted] = useState(false);
  const [participantCount, setParticipantCount] = useState(20);
  const [color, setColor] = useState("#fff");
  const [bg, setBG] = useState("black");
  const [penWidth, setWidth] = useState(5);
  const [shape, setShape] = useState("free");

  const handleStartTranslation = () => setIsStarted(true);
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    setIsDrawing(true);
    setLastPosition({
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    });
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const currentX = (e.clientX - rect.left) * scaleX;
    const currentY = (e.clientY - rect.top) * scaleY;
    ctx.beginPath();
    ctx.moveTo(lastPosition.x, lastPosition.y);
    ctx.lineTo(currentX, currentY);
    ctx.strokeStyle = color;
    ctx.lineWidth = penWidth;
    ctx.lineCap = "round";
    ctx.stroke();
    setLastPosition({ x: currentX, y: currentY });
  };

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  useEffect(() => {
    if (!isStarted) return;
    const interval = setInterval(() => setParticipantCount((prev) => prev + 1), 5000);
    return () => clearInterval(interval);
  }, [isStarted]);

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col">
      {/* Navbar */}
      <div className="w-full bg-gray-800 text-white py-3 px-5 flex justify-between items-center">
        <h3 className="text-xl font-semibold">II sinf</h3>
        <span className={`px-3 py-1 rounded ${isStarted ? "bg-green-500" : "bg-red-500"}`}>
          {isStarted ? "Translyatsiya jarayonida" : "Translyatsiya boshlanmagan"}
        </span>
        <div className="font-semibold">{participantCount} ta kuzatuvchi</div>
      </div>
      
      {/* Main Content */}
      <div className="w-full h-full flex relative overflow-y-hidden">
        <div className="w-1/6 h-full bg-gray-700 flex flex-col items-center py-5 space-y-4">
          <button className="text-white px-3 py-2 bg-green-500 rounded-full" onClick={handleStartTranslation}>
            {isStarted ? "Translyatsiya davom etmoqda" : "Translyatsiyani boshlash"}
          </button>
          <button className="text-white px-3 py-2 bg-red-500 rounded-full" onClick={clearCanvas}>Tozalash</button>
          <div className="flex items-center gap-3">
            <span className="text-white">Chizma rangi:</span>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-10 h-10 rounded-full cursor-pointer" />
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white">Chiziq qalinligi:</span>
            <input type="range" min="1" max="20" value={penWidth} onChange={(e) => setWidth(e.target.value)} />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white">Orqa fon</span>
            <input type="color" value={bg} onChange={(e) => setBG(e.target.value)} className="w-10 h-10 rounded-full cursor-pointer" />
          </div>
        </div>
        <div className="w-full h-full relative">
          <canvas ref={canvasRef} className="w-full h-full" style={{ background: bg }} onMouseDown={startDrawing} onMouseMove={draw} onMouseUp={() => setIsDrawing(false)} onMouseLeave={() => setIsDrawing(false)} />
        </div>
      </div>
    </div>
  );
}
