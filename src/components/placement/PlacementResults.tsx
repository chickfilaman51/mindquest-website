import React from 'react';
import { questions, correctAnswers } from '~/constants/index';
import { selectedAnswers } from './PlacementTest';


const PlacementResults = () => {
  const results: { [key: string]: number } = { correct: 0, incorrect: 0 };
  console.log(correctAnswers[1]);
  questions.forEach((question, index) => {
    const selectedAnswer = selectedAnswers[index];
    const correctAnswerIndex = correctAnswers[index];
    console.log("selectedAnswer", selectedAnswer, "correctAnswerIndex", correctAnswerIndex);
    if (1==1) {
      results['correct']++;
    } else {
      results['incorrect']++;
    }
  });

  return (
    <div>
      <h2>Results</h2>
      <p>Correct: {results['correct']}</p>
      <p>Incorrect: {results['incorrect']}</p>
    </div>
  );
};

export default PlacementResults;
