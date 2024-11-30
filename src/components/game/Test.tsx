import React, { useState,useEffect } from 'react';
import { grade } from '../placement/PlacementResults';
import { gradeLessons } from '~/constants';
import * as questions from '~/constants/questions';
import { useNavigate } from 'react-router-dom';
import { gradeTopicFunctionMap } from './Questions';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import { useContext } from 'react';

var correct = 0;

const TestComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [testQuestions, setTestQuestions] = useState<any[]>([]);
  const navigate = useNavigate();
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const gradeTopics = gradeLessons[grade];
    const generatedQuestions = Object.values(gradeTopics).flatMap(topic => {
      const generateQuestion = gradeTopicFunctionMap[grade][topic];
      if (typeof generateQuestion === 'function') {
        return Array.from({length: 4}, () => generateQuestion());
      } else {
        console.error(`gradeTopicFunctionMap[${grade}][${topic}] is not a function`);
        return [];
      }
    });
    setTestQuestions(generatedQuestions);
  }, []);

  const nextQuestion = () => {
    if (currentQuestionIndex < testQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const currentQuestion = testQuestions.length > 0 ? testQuestions[currentQuestionIndex] as { question: string, answer: string } : null;

  const handleSubmit = () => {
    for (let i = 0; i < testQuestions.length; i++) {
      console.log('Answer:', answers[i], 'Correct:', testQuestions[i].answer);
      if (String(answers[i]) == String(testQuestions[i].answer)) {
        correct++;
      }
    }
    console.log('Correct answers:', correct);
    setCorrectAnswers(correct);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white dark:bg-black high-contrast:bg-black high-contrast:text-white">
      <h2 className="text-2xl font-bold mb-4">{currentQuestion ? `Question ${currentQuestionIndex + 1}:` : 'Loading...'} <br /></h2>
      <h2 className="text-2xl font-bold mb-4">{currentQuestion ? currentQuestion.question : 'Loading...'}</h2>
      
      <div className="mb-2">
      <input 
            type="text" 
            value={answers[currentQuestionIndex] || ''}
            onChange={(e) => handleAnswer(e.target.value)}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded min-w-80 w-full hover:bg-blue-700"
            placeholder="Enter your answer here"
        />
      </div>
      <div className="flex justify-center mt-4 w-full px-4">
        <button onClick={prevQuestion} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-4 px-4 min-w-40 rounded">
          Previous
        </button>
        <button onClick={nextQuestion} className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-4 py-2 px-4 min-w-40 rounded">
          Next
        </button>
      </div>

      <Link to="/testresults" onClick={handleSubmit} className="btn bg-blue-500 hover:bg-blue-700 normal-case text-white my-4 font-bold">
        Submit
      </Link>
    </div>
  );
};

export { correct };
export default TestComponent;