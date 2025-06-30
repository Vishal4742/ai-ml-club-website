import React from 'react';

const timelineData = [
  {
    year: '2024',
    title: 'Club Founded',
    description: 'AI & ML Club established at Oriental College of Technology, Bhopal.'
  },
  {
    year: '2024',
    title: 'First Orientation',
    description: 'Welcomed the first batch of club members and introduced the vision.'
  },
  {
    year: '2024',
    title: 'Inaugural Event',
    description: 'Hosted the first AI/ML workshop with 100+ participants.'
  },
  {
    year: '2025',
    title: 'Hackathon',
    description: 'Organized the first inter-college AI hackathon.'
  },
  {
    year: '2025',
    title: 'Research Initiatives',
    description: 'Launched student-led research projects in AI and ML.'
  }
];

const Timeline = () => (
  <div className="w-full max-w-2xl mx-auto py-12">
    <h2 className="text-3xl font-bold text-center mb-8 text-gradient">Our Journey</h2>
    <div className="relative border-l-2 border-gray-300 dark:border-gray-700">
      {timelineData.map((item, idx) => (
        <div key={idx} className="mb-10 ml-6 flex flex-col gap-1 relative">
          <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-4 border-white dark:border-gray-900 shadow-md"></span>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{item.year}</span>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Timeline; 