import React from 'react';

type Question = {
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
};

type Props = {
  selectedAnswers: { [questionIndex: number]: number };
  questions: Question[];
  correctAnswers: number[];
};

const PlacementResults: React.FC<Props> = ({ selectedAnswers, questions, correctAnswers }) => {
  const results: { [key: string]: number } = { correct: 0, incorrect: 0 };
  console.log("hi");
  questions.forEach((question, index) => {
    const selectedAnswer = selectedAnswers[index];
    const correctAnswerIndex = correctAnswers[index];
    console.log(selectedAnswer, correctAnswerIndex);
    if (selectedAnswer === correctAnswerIndex) {
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
