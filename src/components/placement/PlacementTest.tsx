import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// @ts-ignore
import { questions } from '~/constants/index.ts';


const PlacementTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionIndex: number]: number }>({});

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [currentQuestionIndex]: answerIndex }));
  };

  const handleLeftClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    console.log(selectedAnswers);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl font-bold mb-4">{`Question ${currentQuestionIndex + 1}:`} <br /></h2>
      <h2 className="text-2xl font-bold mb-4">{questions[currentQuestionIndex].question}</h2>

      <div>
        {Object.entries(questions[currentQuestionIndex]).slice(1, 5).map(([key, value], index) => {
          if (key.startsWith('answer')) {
            const isSelected = selectedAnswers[currentQuestionIndex] === index;
            return (
              <div key={index} className="mb-2">
                <button 
                  onClick={() => handleAnswer(index)}
                  className={`bg-blue-500 text-white font-bold py-2 px-4 rounded min-w-80 w-full ${
                    isSelected ? 'bg-blue-700' : 'hover:bg-blue-700'
                  }`}
                >
                  {value}
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="flex justify-center mt-4 w-full px-4">
        <button onClick={handleLeftClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-4 px-4 min-w-40 rounded">
          Previous
        </button>
        <button onClick={handleRightClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-4 py-2 px-4 min-w-40 rounded">
          Next
        </button>
      </div>
      <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-4 px-4 rounded">
        Submit
      </button>
    </div>
  );
};

export default PlacementTest;