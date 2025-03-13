import { useState } from "react";

const ColorGenerator = () => {
  const [color, setColor] = useState("#ffffff");

  const generateColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
        <h1 className="text-2xl font-bold text-gray-800">Random Color Generator</h1>
        <p className="text-lg my-2 text-gray-700">
          Current Color: <span className="font-mono">{color}</span>
        </p>
        <button
          onClick={generateColor}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-2 text-center"
        >
          Generate Color
        </button>
      </div>
    </div>
  );
};

export default ColorGenerator;
