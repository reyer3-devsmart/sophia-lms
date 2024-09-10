import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import ActivityItem from './ActivityItem';
import QuizModal from './QuizModal';

const CourseContent = ({ courseContent, onCompleteActivity, completedActivities }) => {
  const [expandedSections, setExpandedSections] = useState(new Set([0]));
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const toggleSection = (index) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleOpenQuiz = () => {
    setIsQuizOpen(true);
  };

  const handleCloseQuiz = () => {
    setIsQuizOpen(false);
  };

  const handleQuizComplete = (score) => {
    console.log(`Quiz completed with score: ${score}`);
    // Aquí puedes añadir lógica adicional, como guardar el score o mostrar un mensaje
    setIsQuizOpen(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      {courseContent.map((topic, topicIndex) => (
        <div key={topicIndex} className="mb-4">
          <div 
            className="flex justify-between items-center cursor-pointer bg-gray-100 p-2 rounded"
            onClick={() => toggleSection(topicIndex)}
          >
            <h4 className="font-semibold">{topic.title}</h4>
            <ChevronRight 
              size={20} 
              className={`transform transition-transform ${expandedSections.has(topicIndex) ? 'rotate-90' : ''}`}
            />
          </div>
          {expandedSections.has(topicIndex) && (
            <ul className="list-none pl-5 mt-2">
              {topic.activities.map(activity => (
                <ActivityItem
                  key={activity.id}
                  activity={activity}
                  isCompleted={completedActivities.includes(activity.id)}
                  onComplete={onCompleteActivity}
                />
              ))}
              {topic.title === "Tema 2: Tipos comunes de objeciones" && (
                <li className="mt-4">
                  <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    onClick={handleOpenQuiz}
                  >
                    Ir al Cuestionario
                  </button>
                </li>
              )}
            </ul>
          )}
        </div>
      ))}
      <QuizModal 
        isOpen={isQuizOpen}
        onClose={handleCloseQuiz}
        onComplete={handleQuizComplete}
      />
    </div>
  );
};

export default CourseContent;