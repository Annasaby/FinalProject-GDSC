import { useState } from "react";

export default function Category({ setCardShow }) {
  const [activeTab, setActiveTab] = useState('Semua');

  function handleClick(value) {
    setCardShow(value);
    setActiveTab(value);
  }

  const getIndicatorPosition = () => {
    switch (activeTab) {
      case 'Semua':
        return 'left-0';
      case 'Beasiswa':
        return 'left-1/3';
      case 'Lomba':
        return 'left-2/3';
      default:
        return 'left-0';
    }
  };

  return (
    <section className="overflow-hidden rounded-full shadow-lg">
      <div className="bg-white py-1 px-5 border-2 border-white flex gap-10 justify-center items-center rounded-full relative">
        <div
          className={`absolute top-0 left-0 w-1/3 h-full bg-dongker rounded-full transition-all duration-300 ease-in-out ${getIndicatorPosition()}`}
        ></div>
        <a href="#">
        <button
          onClick={() => { handleClick("Semua") }}
          className={`text-xs rounded-full px-2 py-1 z-20 relative ${activeTab === 'Semua' ? 'text-white' : 'text-dongker'
            }`}
        >
          Semua
        </button>
        </a>
        <a href="#">
        <button
          onClick={() => { handleClick("Beasiswa") }}
          className={`text-xs rounded-full px-2 py-1 z-20 relative ${activeTab === 'Beasiswa' ? 'text-white' : 'text-dongker'
            }`}
        >
          Beasiswa
        </button>
        </a>
        <a href="#">
        <button
          onClick={() => { handleClick("Lomba") }}
          className={`text-xs rounded-full px-2 py-1 z-20 relative ${activeTab === 'Lomba' ? 'text-white' : 'text-dongker'
            }`}
        >
          Lomba
        </button>
        </a>
      </div>
    </section>
  );
}
