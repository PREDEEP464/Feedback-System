import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function ThankYou() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const feedbackSubmitted = localStorage.getItem('feedbackSubmitted');
    if (feedbackSubmitted !== 'true') {
      navigate('/'); 
    }
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-red-500 flex flex-col">
      <header 
        className="bg-red-800 text-white py-4 text-center fixed top-0 left-0 w-full z-10 cursor-pointer"
      >
        <h1 className="text-3xl font-bold">Feedback System</h1>
      </header>

      <main className="flex-grow flex items-center justify-center pt-24 px-4 text-center">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
          <div className="text-center flex flex-col gap-5 items-center justify-center">
            <span className="text-gray-700 font-extrabold text-2xl">Thank you for your valuable feedback!</span>
            <span className="mt-20"></span>
            <img src="/Pics/Thank you.png" alt="Thank you" className="w-32 h-32" />
            <span className="mt-20"></span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ThankYou;