import React, { useState } from 'react';
import { Home, Book, Bell, User, ChevronDown, Search } from 'lucide-react';
import Sidebar from './components/Sidebar';
import CourseContent from './components/CourseContent';
import Notification from './components/Notification';
import { courses, coursesContent } from './data/courseData';

function App() {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [completedActivities, setCompletedActivities] = useState([]);
  const [notification, setNotification] = useState(null);

  const selectedCourse = coursesContent[selectedCourseIndex];

  const handleCompleteActivity = (activityId) => {
    if (completedActivities.includes(activityId)) {
      setCompletedActivities(completedActivities.filter(id => id !== activityId));
      setNotification({ message: "Actividad desmarcada como completada", type: 'alert' });
    } else {
      setCompletedActivities([...completedActivities, activityId]);
      setNotification({ message: "¡Actividad completada!", type: 'success' });
    }
    setTimeout(() => setNotification(null), 3000);
  };

  const calculateProgress = () => {
    const totalActivities = selectedCourse.content.reduce(
      (sum, topic) => sum + topic.activities.length,
      0
    );
    return Math.round((completedActivities.length / totalActivities) * 100);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar 
        courses={courses} 
        selectedCourseIndex={selectedCourseIndex} 
        onSelectCourse={setSelectedCourseIndex} 
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Home size={24} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            <Book size={24} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            <Bell size={24} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input type="text" placeholder="Buscar cursos" className="pl-8 pr-2 py-1 border rounded" />
              <Search size={18} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex items-center space-x-2">
              <User size={24} />
              <span>jorge@onbotgo.com</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </nav>
        
        <main className="flex-1 overflow-y-auto bg-gray-100 p-8">
          <h1 className="text-2xl font-bold mb-6">{selectedCourse.title}</h1>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-white rounded-lg shadow p-6">
              <CourseContent 
                courseContent={selectedCourse.content} 
                onCompleteActivity={handleCompleteActivity} 
                completedActivities={completedActivities} 
              />
            </div>
            <div>
              <div className="bg-white p-4 rounded-lg shadow mb-6">
                <h3 className="font-bold mb-2">Progreso del curso</h3>
                <div className="bg-gray-200 rounded-full h-4 w-full">
                  <div 
                    className="bg-green-500 h-4 rounded-full transition-all duration-500 ease-in-out" 
                    style={{width: `${calculateProgress()}%`}}
                  ></div>
                </div>
                <p className="text-right mt-1">{calculateProgress()}% completado</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold mb-2">Actividades próximas</h3>
                <ul className="list-none p-0">
                  <li className="mb-2">Entrega de tarea: 15 Sept</li>
                  <li className="mb-2">Examen parcial: 22 Sept</li>
                  <li className="mb-2">Foro de discusión: 30 Sept</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
      {notification && <Notification message={notification.message} type={notification.type} />}
    </div>
  );
}


export default App;