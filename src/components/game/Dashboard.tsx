import React, { useState } from 'react';
import { line, curveCardinal } from 'd3';
import { grade } from '~/components/placement/PlacementResults';

const Dashboard = () => {
  const curvePoints = [
    { x: 100, y: 500 },
    { x: 200, y: 350 },
    { x: 100, y: 200 },
    { x: 0, y: 50 },
    { x: 100, y: -100 }
  ];

  const lineGenerator = line()
    .x((d: [number, number]) => d[0])
    .y((d: [number, number]) => d[1])
    .curve(curveCardinal);

  const pathData = lineGenerator(curvePoints.map(point => [point.x, point.y]));

  const [showGradePopup, setShowGradePopup] = useState(false);

  const handleClick = (index: number) => {
    alert(`You clicked point ${index}`);
  };

  const handleButtonClick = () => {
    alert('You clicked the Test Out button');
  };

  

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-100">
      <div className="absolute top-0 left-10 flex flex-col items-end mr-8 mt-6">
        <div className="bg-white p-4 shadow-md">
          <span className="text-lg font-bold cursor-pointer mb-2">Grade Level: {grade}</span>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-24 px-2 mx-auto mt-6 w-1/3 bg-white shadow-md">
        <span className="text-lg font-bold mx-4">Start the <b>Final</b> Test: </span>
        <button onClick={handleButtonClick} className="px-4 py-2 bg-blue-500 text-white rounded">Start</button>
      </div>
      
      <div className="absolute top-0 right-10 flex flex-col items-end mr-8 mt-6">
        <div className="bg-white p-4 shadow-md">
          <span className="text-lg font-bold cursor-pointer mb-2">Percent completed: 0%</span>
        </div>
      </div>

      <svg className="absolute" width="300" height="770">
        <g transform="translate(50,230)">
          <path 
            d={pathData ?? ''}
            stroke="black"
            strokeWidth="2"
            fill="transparent"
          />
          {curvePoints.map((point, index) => (
            <a onClick={() => handleClick(index)} key={index}>
              <circle cx={point.x} cy={point.y} r={24} fill="#00f" className="hover:fill-blue-800"/>
            </a>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Dashboard;
