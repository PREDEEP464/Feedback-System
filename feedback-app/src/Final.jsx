import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function FormPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [clickCount, setClickCount] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://feedback-api.predeepkumar-us2022cse.workers.dev/details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
      });

      if (!response.ok) {
        throw new Error('Error submitting rating');
      }

      localStorage.setItem('feedbackSubmitted', 'true');

      navigate('/thank-you'); 
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

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

      <main className="flex-grow pt-28 px-4 text-center">
        <div className="text-white mb-6 slide-in">
          <p className="text-xl font-semibold">Fill your details (Optional)</p>
          <div className="flex justify-center items-center mt-4 mb-10">
            <img src="/SVGs/details.svg" alt="Details" className="w-12 h-10 mr-0" />
            <h2 className="text-2xl font-semibold text-white">Details</h2>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto slide-in">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-6">
              <label htmlFor="name" className="text-gray-700 font-medium">Enter your Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="phone" className="text-gray-700 font-medium">Phone</label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                placeholder="Your Phone"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default FormPage;
