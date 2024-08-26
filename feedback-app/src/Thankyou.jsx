import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);

  const handleHeaderClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 3) {
        navigate('/'); 
        return 0;
      }
      return newCount;
    });
  };

  const handleHomeClick = () => {
    navigate('/'); 
  };

  return (
    <div className="h-screen w-full bg-red-500 flex flex-col">
      <header 
        className="bg-red-800 text-white py-4 text-center fixed top-0 left-0 w-full z-10 cursor-pointer"
        onClick={handleHeaderClick}
      >
        <h1 className="text-3xl font-bold">Feedback System</h1>
      </header>

      <main className="flex-grow flex items-center justify-center pt-24 px-4 text-center">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
          <div className="text-center flex flex-col gap-5 items-center justify-center">
            <span className="text-gray-700 font-extrabold text-2xl">Thank you for your valuable feedback!</span>
            <span classname="mt-20"></span>
            <img src="/Pics/Thank you.png" alt="Thank you" className="w-32 h-32" />
            <span classname="mt-20"></span>
          </div>
          <div className="mb-6"></div>
          <button
            type="button"
            onClick={handleHomeClick}
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Home
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
