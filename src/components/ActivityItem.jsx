import React, { useState } from 'react';
import { ExternalLink, CheckCircle, Circle, Video, FileText, MessageSquare, ClipboardList } from 'lucide-react';
import VideoModal from './VideoModal';

const ActivityItem = ({ activity, isCompleted, onComplete }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleOpenVideo = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoModalOpen(false);
  };

  // Función para extraer el ID del video de YouTube del enlace
  const getYoutubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = activity.videoUrl ? getYoutubeVideoId(activity.videoUrl) : null;

  const getIcon = () => {
    switch (activity.type) {
      case 'video':
        return <Video size={18} className="mr-2" />;
      case 'lectura':
        return <FileText size={18} className="mr-2" />;
      case 'foro':
        return <MessageSquare size={18} className="mr-2" />;
      case 'tarea':
        return <ClipboardList size={18} className="mr-2" />;
      default:
        return null;
    }
  };

  return (
    <li className="flex items-start mb-4">
      <div 
        className="cursor-pointer mr-2 mt-1" 
        onClick={() => onComplete(activity.id)}
      >
        {isCompleted ? (
          <CheckCircle size={20} className="text-green-500" />
        ) : (
          <Circle size={20} className="text-gray-300" />
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          {getIcon()}
          <span className="font-semibold">{activity.title}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
        {activity.videoUrl && (
          <button 
            onClick={handleOpenVideo}
            className="mt-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm flex items-center"
          >
            Ver video <ExternalLink size={14} className="ml-1" />
          </button>
        )}
      </div>
      {videoId && (
        <VideoModal 
          isOpen={isVideoModalOpen} 
          onClose={handleCloseVideo} 
          videoId={videoId}
        />
      )}
    </li>
  );
};

export default ActivityItem;