import React, { useState } from 'react';
import { polygonSides } from '~/constants/questions';

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(polygonSides(10));
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Number(userAnswer) === currentQuestion.answer) {
      setMessage('Correct!');
    } else {
      setMessage('Wrong answer. Try again.');
    }
    setUserAnswer('');
    setCurrentQuestion(polygonSides(10));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl font-bold mb-4">{`Question: ${currentQuestion.question.replace(/<\/?[^>]+(>|$)/g, "")}`}</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={userAnswer} 
          onChange={(e) => setUserAnswer(e.target.value)} 
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Questions;