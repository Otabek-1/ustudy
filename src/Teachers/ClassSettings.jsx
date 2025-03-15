import React, { useState } from "react";

const Button = ({ onClick, children, className }) => (
  <button onClick={onClick} className={`px-4 py-2 rounded-lg ${className}`}>{children}</button>
);

const Input = ({ value, onChange, placeholder, type = "text" }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full p-2 border rounded-lg mb-2"
  />
);

const Checkbox = ({ checked, onCheckedChange, label }) => (
  <label className="flex items-center space-x-2">
    <input type="checkbox" checked={checked} onChange={(e) => onCheckedChange(e.target.checked)} />
    <span>{label}</span>
  </label>
);

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {children}
        <button onClick={onClose} className="mt-4 bg-gray-400 px-4 py-2 rounded-lg">Yopish</button>
      </div>
    </div>
  );
};

export default function ClassSettings() {
  const [className, setClassName] = useState("Sinf nomi");
  const [selectedDays, setSelectedDays] = useState([]);
  const [maxStudents, setMaxStudents] = useState(0);
  const [limitStudents, setLimitStudents] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const days = ["Dushanba", "Sechanba", "Chorshanba", "Payshanba", "Juma", "Shanba", "Yakshanba"];

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Sinfni tahrirlash</h2>

      <label className="block text-sm font-medium text-gray-700">Sinf nomi:</label>
      <Input value={className} onChange={(e) => setClassName(e.target.value)} className="mb-4" />

      <label className="block text-sm font-medium text-gray-700">Dars kunlarini tanlang:</label>
      <div className="flex flex-wrap gap-2 mb-4">
        {days.map((day) => (
          <Button
            key={day}
            onClick={() => toggleDay(day)}
            className={selectedDays.includes(day) ? "bg-blue-500 text-white" : "bg-gray-200"}
          >
            {day}
          </Button>
        ))}
      </div>

      <Checkbox
        checked={limitStudents}
        onCheckedChange={setLimitStudents}
        label="O‘quvchilar soniga cheklov o‘rnatilsin"
        className="mb-2"
      />

      {limitStudents && (
        <Input
          type="number"
          value={maxStudents}
          onChange={(e) => setMaxStudents(e.target.value)}
          placeholder="Maksimal o‘quvchi soni"
          className="mb-4"
        />
      )}

      <div className="flex justify-between">
        <Button className="bg-green-500 text-white">Saqlash</Button>
        <Button className="bg-red-500 text-white" onClick={() => setIsModalOpen(true)}>
          Sinfni o‘chirish
        </Button>
      </div>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6 text-center">
          <h3 className="text-lg font-semibold">Rostan ham o‘chirasizmi?</h3>
          <div className="mt-4 flex justify-center gap-4">
            <Button className="bg-gray-400" onClick={() => setIsModalOpen(false)}>
              Yo‘q
            </Button>
            <Button className="bg-red-600 text-white">Ha, o‘chirish</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
