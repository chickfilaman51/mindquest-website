import React, { useState } from 'react';
import { line, curveCardinal } from 'd3';
import { grade } from '~/components/placement/PlacementResults';
import { gradeLessons } from '~/constants';

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

  const currentGradeLessons = gradeLessons[grade];

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-100">
      {/* Code for displaying Test Out button */}
      <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-24 px-2 mx-auto mt-6 w-1/3 bg-white shadow-md">
        <span className="text-lg font-bold mx-4">Start the <b>Final</b> Test: </span>
        <button onClick={handleButtonClick} className="px-4 py-2 bg-blue-500 text-white rounded">Start</button>
      </div>

      {/* Code for displaying the curve and dots */}
      <svg className="absolute" width="400" height="770">
        <g transform="translate(50,230)">
          <path 
            d={pathData ?? ''}
            stroke="black"
            strokeWidth="2"
            fill="transparent"
          />
          {curvePoints.map((point, index) => (
            <g key={index}>
              <a onClick={() => handleClick(index)}>
                <circle cx={point.x} cy={point.y} r={24} fill="#00f" className="hover:fill-blue-800"/>
              </a>
              {/* Code for displaying labels next to dots */}
              <text x={point.x + 30} y={point.y + 6} className="text-xs">{currentGradeLessons[index]}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Dashboard;
