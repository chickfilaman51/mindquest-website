import React from 'react';
import { Link } from 'react-router-dom';
import { correct } from './Test';
import { grade } from '../placement/PlacementResults';

const passThreshold = 2;
const passed = correct >= passThreshold;

const TestResults = () => {
    

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h2 className="text-8xl font-bold my-4">Test Results</h2>
            <p className="text-2xl">Number of correct answers: {correct}</p>
            {passed ? (
                <p className="text-2xl text-wrap my-5">Congratulations! You passed the test. You are finished with {grade}th grade. You can always look back to the lessons to practice!</p>
            ) : (
                <p className="text-2xl my-5">Sorry, you need to retake the test. Look over your lessons again!</p>
            )}
            <Link to="/dashboard" className="btn bg-blue-500 hover:bg-blue-700 normal-case text-white my-4 font-bold">
                Back to Dashboard
            </Link>
        </div>
    );
};

export { passed };
export default TestResults;