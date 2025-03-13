import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    if (is24Hour) {
      return date.toLocaleTimeString("en-GB"); // 24-hour format
    } else {
      return date.toLocaleTimeString("en-US"); // 12-hour format
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center border-4 border-purple-500">
        <h1 className="text-3xl font-bold text-purple-400">Digital Clock</h1>
        <p className="text-5xl my-4 font-mono font-bold text-cyan-400 animate-pulse drop-shadow-md">
          {formatTime(time)}
        </p>
        <button
          onClick={() => setIs24Hour(!is24Hour)}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        >
          Switch to {is24Hour ? "12-hour" : "24-hour"} format
        </button>
      </div>
    </div>
  );
};

export default DigitalClock;
