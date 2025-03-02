import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CodeGenerator() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
  
    const handleOptionClick = (level) => {
      console.log(`Selected: ${level}`);
      setIsOpen(false);
      navigate(`/editor?generate=true&level=${level}`);
    };
  
    return (
      <div className="relative inline-block">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-yellow-500 px-4 py-2 rounded-md hover:scale-105 hover:shadow-md hover:shadow-yellow-300 hover:cursor-pointer"
        >
          Generate random code!
        </button>
  
        {isOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200">
            {["Easy", "Medium", "Hard"].map((level) => (
              <button
                key={level}
                onClick={() => handleOptionClick(level)}
                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
              >
                {level}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }