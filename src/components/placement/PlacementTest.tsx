import React, { useState, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

// @ts-ignore
import { questions } from '~/constants/index.ts';


const PlacementTest = ({ selectedAnswers, setSelectedAnswers }: { selectedAnswers: any, setSelectedAnswers: Dispatch<SetStateAction<any>> }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswers((prev: Record<string, any>) => ({ ...prev, [currentQuestionIndex]: answerIndex }));
    console.log("Selected Answers:", selectedAnswers);
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

      <Link to="/placementresults" className="btn bg-blue-500 hover:bg-blue-700 normal-case text-white my-4 font-bold">
        Submit
      </Link>
      
    </div>
    


  );
  
};

export default PlacementTest;
