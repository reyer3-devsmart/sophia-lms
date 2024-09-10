import React from 'react';

const Sidebar = ({ courses, selectedCourseIndex, onSelectCourse }) => (
  <div className="bg-gray-900 text-white w-64 flex flex-col h-screen overflow-y-auto">
    <div className="p-4 flex items-center space-x-2 border-b border-gray-700">
      <img src="https://workspace.mibot.cl/assets/img/logo.png" alt="Sophia Logo" className="h-8 w-8" />
      <span className="text-xl font-bold">Sophia</span>
    </div>
    <nav className="flex-1 mt-4">
      <h3 className="text-gray-400 uppercase text-xs font-semibold mb-2 px-4">Cursos</h3>
      <ul className="space-y-1">
        {courses.map((course, index) => (
          <li 
            key={index} 
            className={`px-4 py-2 cursor-pointer ${selectedCourseIndex === index ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}
            onClick={() => onSelectCourse(index)}
          >
            {course}
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Sidebar;