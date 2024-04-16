import React from 'react';
import { lessonIndex } from './Dashboard';
import { gradeLessons } from '~/constants';
import { grade } from '../placement/PlacementResults';

const Lesson = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">{gradeLessons[grade][lessonIndex]}</h1>
      <div className="w-full lg:w-2/3 h-96">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/z_Xjxqk8E4g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Lesson;
