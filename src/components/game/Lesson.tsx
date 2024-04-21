import React from 'react';
import { lessonIndex } from './Dashboard';
import { gradeLessons } from '~/constants';
import { grade } from '../placement/PlacementResults';
// Import Link from react-router-dom
import { Link } from 'react-router-dom';
import { lessonVideos } from '~/constants';



const Lesson = () => {
  console.log(lessonVideos[grade][lessonIndex]);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">{gradeLessons[grade][lessonIndex]}</h1>
        <div className="w-full lg:w-1/2 xl:w-1/3 h-auto aspect-video">
            <iframe
            width="100%"
            height="100%"
            src={lessonVideos[grade][lessonIndex]}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        </div>
        {/* Link to Questions module */}
        <Link to="/questions" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
            Go to Questions
        </Link>
    </div>
  );
};

export default Lesson;