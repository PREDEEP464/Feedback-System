import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);

  const handleQualityClick = async (feedbackType) => {
    try {
      const response = await fetch(`https://feedback-api.predeepkumar-us2022cse.workers.dev/quality/${feedbackType}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error submitting rating');
      }

      navigate('/final')
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  const handleQualityAwesomeClick = () => handleQualityClick('awesome');
  const handleQualityGoodClick = () => handleQualityClick('good');
  const handleQualityAverageClick = () => handleQualityClick('average');
  const handleQualityPoorClick = () => handleQualityClick('poor');
  const handleQualityWorstClick = () => handleQualityClick('worst');


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

  React.useEffect(() => {
    const feedbackSubmitted = localStorage.getItem('feedbackSubmitted');
    if (feedbackSubmitted === 'true') {
      navigate('/thank-you'); 
    }
  }, [navigate]);


  return (
    <div className="h-screen w-full bg-red-500 flex flex-col">
      <header 
        className="bg-red-800 text-white py-4 text-center fixed top-0 left-0 w-full z-10 cursor-pointer"
        onClick={handleHeaderClick}
      >
        <h1 className="text-3xl font-bold">Feedback System</h1>
      </header>

      <main className="flex-grow pt-24 px-4 text-center">
        <div className="text-white mb-6 slide-in">
          <p className="text-xl font-semibold">Please tell us how you feel about the</p>
          <div className="flex justify-center items-center mb-6">
          <img src="/SVGs/quality.svg" alt="Quality" className="w-12 h-10 mr-0" />
          <h2 className="text-2xl font-semibold text-white">Quality</h2>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto slide-in">
          <div className="grid grid-cols-2">
            <button onClick={handleQualityAwesomeClick} className="flex flex-col items-center p-4 transition-transform duration-150 ease-in-out transform hover:scale-110 active:scale-95">
              <img src="/Pics/Awesome.png" alt="Awesome" className="w-16 h-16" />
              <span className="mt-2 text-gray-700 font-medium">Awesome</span>
            </button>
            <button onClick={handleQualityGoodClick} className="flex flex-col items-center p-4 transition-transform duration-150 ease-in-out transform hover:scale-110 active:scale-95">
              <img src="/Pics/Good.png" alt="Good" className="w-16 h-16" />
              <span className="mt-2 text-gray-700 font-medium">Good</span>
            </button>
            <button onClick={handleQualityAverageClick} className="flex flex-col items-center p-4 transition-transform duration-150 ease-in-out transform hover:scale-110 active:scale-95">
              <img src="/Pics/Average.png" alt="Average" className="w-16 h-16" />
              <span className="mt-2 text-gray-700 font-medium">Average</span>
            </button>
            <button onClick={handleQualityPoorClick} className="flex flex-col items-center p-4 transition-transform duration-150 ease-in-out transform hover:scale-110 active:scale-95">
              <img src="/Pics/Poor.png" alt="Poor" className="w-16 h-16" />
              <span className="mt-2 text-gray-700 font-medium">Poor</span>
            </button>
            <button onClick={handleQualityWorstClick} className="flex flex-col items-center p-4 transition-transform duration-150 ease-in-out transform hover:scale-110 active:scale-95 col-span-2">
              <img src="/Pics/Worst.png" alt="Worst" className="w-16 h-16" />
              <span className="mt-2 text-gray-700 font-medium">Worst</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
