import React from 'react';
import { questions, correctAnswers } from '~/constants/index';
import { LearningButton } from './LearningButton';
import { useNavigate } from 'react-router-dom';
let grade = 6; // Declare grade outside of the function

const PlacementResults = ({ selectedAnswers }: { selectedAnswers: any }) => {
  const results: { [key: string]: number } = { correct: 0, incorrect: 0 };
  console.log(selectedAnswers)
  let count = 0;
  questions.forEach((question, index) => {
    const selectedAnswer = selectedAnswers[index];
    const correctAnswerIndex = correctAnswers[index];
    console.log("selectedAnswer", selectedAnswer, "correctAnswerIndex", correctAnswerIndex);
    if (selectedAnswer == correctAnswerIndex) {
      results['correct']++;
    } else {
      results['incorrect']++;
      count++;
    }
    if (count >= 3) {
      grade = Math.min(Math.ceil(index / 4) + 1, grade);
    }
    if (index % 4 == 3) {
      count = 0;
    }
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white dark:bg-black high-contrast:bg-black high-contrast:text-white">
      <h2 className="text-black dark:text-white high-contrast:text-white text-8xl font-bold my-4  ">Results</h2>
      <p className="text-black dark:text-white high-contrast:text-white text-2xl">Correct: {results['correct']}</p>
      <p className="text-black dark:text-white high-contrast:text-white text-2xl">Incorrect: {results['incorrect']}</p>
      <p className="text-black dark:text-white high-contrast:text-white text-2xl">You are in grade {grade}!</p>
      <LearningButton />
    </div>
  );
};

export { grade };
export default PlacementResults; // Export PlacementResults and grade separately
