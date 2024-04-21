import React, { useState } from 'react';
import { grade } from '../placement/PlacementResults';
import { lessonIndex } from './Dashboard';
import { gradeLessons } from '~/constants';
import * as questions from '~/constants/questions';
import Latex from 'react-latex';
import { useNavigate } from 'react-router-dom';

export const gradeTopicFunctionMap: { [key: number]: { [key: string]: () => {} } } = {
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
  4: {
    "Multiplication and Division (decimals)": () => {
      const num2 = Math.round((Math.random() * 40 + 1) * 10) / 10;
      const multiplier = Math.round((Math.random() * 6 + 1) * 10) / 10;
      const num1 = Math.round((num2 * multiplier) * 10) / 10;
      const operator = Math.random() < 0.5 ? "*" : "/";
      return questions.multDiv(num1, num2, operator);
    },
    "Fractions": () => {
      const operations = ["+", "-", "/", "*"];
      const o1 = operations[Math.floor(Math.random() * operations.length)];
      const o2 = "";

      // Generate random numbers for the fractions
      const w1 = 0;
      const n1 = Math.floor(Math.random() * 10) + 1;
      const d1 = Math.floor(Math.random() * 10) + 1;  // Avoid division by zero
      const w2 = 0;
      const n2 = Math.floor(Math.random() * 10) + 1;
      const d2 = Math.floor(Math.random() * 10) + 1;  // Avoid division by zero
      const w3 = 0;
      const n3 = Math.floor(Math.random() * 10) + 1;
      const d3 = Math.floor(Math.random() * 10) + 1;  // Avoid division by zero
      
      return questions.fourOpsFractions(w1, n1, d1, w2, n2, d2, w3, n3, d3, o1, o2);
    },
    "Geometry": () => {
      if (Math.random() < 0.3) {
          return questions.polygonSides(10);
      } else {
          const radius = Math.floor(Math.random() * 15) + 1;  // Replace with your desired range for the radius
          return questions.areaCircle(radius, true);
      }
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
    "Factors and Multiples": () => {
      const randomIndex = Math.floor(Math.random() * 4);
      const randomNum = () => Math.floor(Math.random() * 10) + 1;

      switch (randomIndex) {
        case 0:
          return questions.factors(5, 10, 300);
        case 1:
          return questions.multiples(randomNum(), randomNum());
        case 2:
          return questions.hcf(randomNum(), randomNum(), randomNum());
        case 3:
          return questions.lcm(randomNum(), randomNum(), randomNum());
        default:
          return { question: '', answer: '' };
      }
    }
  },
  5: {
    "Intro to Algebra": () => {
      const letters = ['x', 'y', 'z'];
      const variables = [];
      const coeff = [];
      const totalTerms = Math.floor(Math.random() * 10) + 1; // Generate a random number of terms between 1 and 10

      for (let i = 0; i < totalTerms; i++) {
          variables.push(letters[Math.floor(Math.random() * letters.length)]); // Randomly select a letter from 'letters'
          coeff.push(Math.floor(Math.random() * 10) - 5); // Generate a random coefficient between -5 and 4
      }

      const mixed = Math.random() < 0.5; // Randomly decide whether the terms are mixed

      return questions.collectingTerms(letters, variables, coeff, mixed);
    },
    "Fractions, Decimals, and Percentages": () => {
      const types = ['PD', 'DP', 'DF', 'PF', 'FD', 'FP'];
      const type = types[Math.floor(Math.random() * types.length)]; // Randomly select a type from 'types'
      const num = Math.floor(Math.random() * 10) + 1; // Generate a random numerator between 1 and 10
      const den = Math.floor(Math.random() * 10) + 1; // Generate a random denominator between 1 and 10

      return questions.convertFDP(type, num, den);
    },
    "Geometry": () => {
      const random = Math.random();
      if (random < 0.1) {
        return questions.polygonSides(10);
      } else if (random < 0.5) {
        const radius = Math.floor(Math.random() * 15) + 1;  // Replace with your desired range for the radius
        return questions.areaCircle(radius, true);
      } else {
        const radius = Math.floor(Math.random() * 15) + 1;  // Replace with your desired range for the radius
        return questions.circumferenceCircle(radius, true);
      }
    },
    "Ratio and Proportion": () => {
      if (Math.random() < 0.5) {
        return questions.combiningRatios(10);
      } else {
        return questions.simplifyingRatios(3, 30);
      }
    },
    "Data Analysis and Probability": () => {
      return questions.basicProbability(Math.floor(Math.random() * 4));
    }
  },
  6: {
    "Number Sense and Operations": () => {
      const randomIndex = Math.floor(Math.random() * 4);
      const randomNum = () => Math.floor(Math.random() * 10) + 1;

      switch (randomIndex) {
        case 0:
          return questions.factors(5, 10, 300);
        case 1:
          return questions.multiples(randomNum(), randomNum());
        case 2:
          return questions.hcf(randomNum(), randomNum(), randomNum());
        case 3:
          return questions.lcm(randomNum(), randomNum(), randomNum());
        default:
          return { question: '', answer: '' };
      }
    },
    "Algebraic Concepts": () => {
      const type = Math.floor(Math.random() * 9); // Generate a random type between 0 and 8
      const x = Math.floor(Math.random() * 10) + 1; // Generate a random x between 1 and 10
      const y = Math.floor(Math.random() * 10) + 1; // Generate a random y between 1 and 10
      const answer = Math.floor(Math.random() * 10) + 1; // Generate a random answer between 1 and 10
      const inequality = Math.random() < 0.5; // Randomly decide whether there is an inequality

      return questions.twoStepEquations(type, x, y, answer, inequality);
    },
    "Geometry": () => {
      const random = Math.random();
      if (random < 0.1) {
        return questions.polygonSides(10);
      } else if (random < 0.5) {
        const radius = Math.floor(Math.random() * 15) + 1;  // Replace with your desired range for the radius
        return questions.areaCircle(radius, true);
      } else {
        const radius = Math.floor(Math.random() * 15) + 1;  // Replace with your desired range for the radius
        return questions.circumferenceCircle(radius, true);
      }
    },
    "Ratio and Proportion": () => {
      if (Math.random() < 0.5) {
        return questions.combiningRatios(10);
      } else {
        return questions.simplifyingRatios(3, 30);
      }
    },
    "Data Analysis and Probability": () => {
      if (Math.random() < 0.5) {
        return questions.basicProbability(Math.floor(Math.random() * 4));
      } else {
        return questions.expectedFrequency(Math.floor(Math.random() * 20) + 6);
      }
    }
  }
  // Add other grades here
};


const Questions = () => {


  const currentGrade = grade;
  const currentTopic = lessonIndex;
  const currentFunction = gradeTopicFunctionMap[grade][gradeLessons[grade][lessonIndex]] as () => { question: string, answer: string };

  const [currentQuestion, setCurrentQuestion] = useState<{ question: string, answer: string }>(currentFunction());
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');
  const [correctCount, setCorrectCount] = useState(0);

  const handleCorrectAnswer = () => {
    setCorrectCount(prevCount => prevCount + 1);
    setMessage('Correct!');
  };

  const handleIncorrectAnswer = () => {
    setCorrectCount(prevCount => 0);
    setMessage('Wrong answer. Try again.');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const correctAnswer = currentQuestion.answer;
    if (userAnswer == correctAnswer) {
      handleCorrectAnswer();
    } else {
      console.log(userAnswer, correctAnswer);
      handleIncorrectAnswer();
    }
    setUserAnswer('');
    setCurrentQuestion(currentFunction());
  };

  const navigate = useNavigate();

  const handleCompletion = (lessonIndex: number) => {
    let completedLessons: any[] = JSON.parse(localStorage.getItem('completedLessons') || "[]");
    if (!completedLessons.includes(lessonIndex)) {
      completedLessons.push(lessonIndex);
    }
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
    navigate('/dashboard');
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
      <p>You have answered {correctCount} questions correctly in a row.</p>
      <p>Get 5 questions in a row to complete this lesson.</p>
      {correctCount >= 5 && (
        <div className='text-green-500 font-bold mt-9 flex flex-col items-center justify-center'>
          <p>You have completed the lesson! Congratulations!</p>
          <button onClick={() => handleCompletion(lessonIndex)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Exit Lesson
          </button>
        </div>
      )}
    </div>
  );
};

export default Questions;