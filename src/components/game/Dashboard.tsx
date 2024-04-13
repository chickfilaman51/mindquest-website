import React from 'react';
import { line, curveCardinal } from 'd3';

const Dashboard = () => {
  const curvePoints = [
    { x: 100, y: 500 },
    { x: 200, y: 350 },
    { x: 100, y: 200 },
    { x: 0, y: 50},
    { x: 100, y: -100 }
  ];

  const lineGenerator = line()
    .x((d: [number, number]) => d[0])
    .y((d: [number, number]) => d[1])
    .curve(curveCardinal);

  const pathData = lineGenerator(curvePoints.map(point => [point.x, point.y]));

  const handleClick = (index: number) => {
    alert(`You clicked point ${index}`);
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-100">
      <svg className="absolute" width="300" height="700">
        <g transform="translate(50,150)">
          <path 
            d={pathData ?? ''}
            stroke="black"
            strokeWidth="2"
            fill="transparent"
          />
          {curvePoints.map((point, index) => (
            <a onClick={() => handleClick(index)} key={index}>
              <circle cx={point.x} cy={point.y} r={20} fill="#00f" className="hover:fill-blue-600"/>
            </a>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Dashboard;
