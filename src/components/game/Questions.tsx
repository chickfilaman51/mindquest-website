import React, { useState } from 'react';
import { grade } from '../placement/PlacementResults';
import { lessonIndex } from './Dashboard';
import { gradeLessons } from '~/constants';
import * as questions from '~/constants/questions';
import Latex from 'react-latex';

const Questions = () => {

  const gradeTopicFunctionMap: { [key: number]: { [key: string]: () => {} } } = {
    2: {
      "Addition and Subtraction": () => {
        const num1 = Math.floor(Math.random() * 60) + 1;
        const num2 = Math.floor(Math.random() * 60) + 1;
        const operator = Math.random() < 0.5 ? "+" : "-";
        return questions.addSub(num1, num2, operator);
      },
      "Place Value": () => {
        return questions.ordering(6, false, false, Math.random() < 0.5 ? true : false, 20);
      },
      "Intro to Multiplication and Division": () => {
        const num2 = Math.floor(Math.random() * 5) + 1;
        const multiplier = Math.floor(Math.random() * 5) + 1;
        const num1 = num2 * multiplier;
        const operator = Math.random() < 0.5 ? "*" : "/";
        return questions.multDiv(num1, num2, operator);
      },
      "Measurement (Length, Weight, Capacity)": () => {
        const measurementFunctions = [
          questions.convertingMetricLength,
          questions.convertingMetricWeight,
          questions.convertingMetricVolume
        ];
        const randomFunction = measurementFunctions[Math.floor(Math.random() * measurementFunctions.length)];
        return randomFunction(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 4), Math.floor(Math.random() * 4));
      },
      "Introduction to Geometry (Shapes and Patterns)": () => {
        return questions.polygonSides(10);
      }    
    },
    3: {
      "Multiplication and Division (2-3 digits)": () => {
        const num2 = Math.floor(Math.random() * 40) + 1;
        const multiplier = Math.floor(Math.random() * 6) + 1;
        const num1 = num2 * multiplier;
        const operator = Math.random() < 0.5 ? "*" : "/";
        return questions.multDiv(num1, num2, operator);
      },
      "Time": () => {
        return questions.convertingTime(Math.floor(Math.random() * 5),Math.floor(Math.random() * 5), Math.floor(Math.random() * 100));
      },
      "Measurement and Data": () => {
        const measurementFunctions = [
          questions.convertingMetricLength,
          questions.convertingMetricWeight,
          questions.convertingMetricVolume
        ];
        const randomFunction = measurementFunctions[Math.floor(Math.random() * measurementFunctions.length)];
        return randomFunction(Math.floor(Math.random() * 20) + 1, Math.floor(Math.random() * 4), Math.floor(Math.random() * 4));
      },
      "Geometry": () => {
        return questions.polygonSides(20);
      },
      "Problem-Solving Strategies": () => {
        return questions.equationsIfThen(Math.floor(Math.random() * 8),Math.floor(Math.random() * 10),Math.floor(Math.random() * 10),Math.floor(Math.random() * 40));
      }

    },
    // Add other grades here
  };

  const currentGrade = grade;
  const currentTopic = lessonIndex;
  const currentFunction = gradeTopicFunctionMap[grade][gradeLessons[grade][lessonIndex]] as () => { question: string, answer: string };

  const [currentQuestion, setCurrentQuestion] = useState<{ question: string, answer: string }>(currentFunction());
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const correctAnswer = currentQuestion.answer;
    if (userAnswer == correctAnswer) {
      setMessage('Correct!');
    } else {
      setMessage('Wrong answer. Try again.');
      console.log(correctAnswer, userAnswer);
    }
    setUserAnswer('');
    setCurrentQuestion(currentFunction());
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl font-bold mb-4">
        Question: {currentQuestion.question}
      </h2>
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