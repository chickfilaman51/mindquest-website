import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Updated import

// @ts-ignore
import { questions } from '~/constants/index.js';

const PlacementTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  const handleAnswer = (answerTotal: number) => {
    setSelectedAnswers([...selectedAnswers, answerTotal]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Here you can calculate and display results
      console.log('Quiz completed. Calculate results based on selectedAnswers');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen"> {/* Updated div with Tailwind CSS classes */}
      <h2 className="text-2xl font-bold mb-4">{questions[currentQuestionIndex].question}</h2>
      <div>
        {Object.entries(questions[currentQuestionIndex]).slice(1, 7).map(([key, value], index) => {
          if (key.startsWith('answer')) {
            return (
              <div key={index} className="mb-2">
                <button 
                  onClick={() => handleAnswer(questions[currentQuestionIndex][`${key}Total`])}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full min-w-40" // Updated button with w-full and min-w-40 classes
                >
                  {String(value)}
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default PlacementTest;