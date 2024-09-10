import React, { useState, useEffect } from 'react';
import { quizQuestions } from '../data/quizData';
import { ChevronLeft, ChevronRight, X, Clock } from 'lucide-react';

export default function QuizComponent({ onComplete, onClose }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutos en segundos

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResults) {
      handleFinish();
    }
  }, [timeLeft, showResults]);

  const handleAnswerSelect = (answerIndex) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleFinish = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === quizQuestions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Resultados del Cuestionario</h2>
          <p className="mb-4">Has acertado {score} de {quizQuestions.length} preguntas.</p>
          {quizQuestions.map((question, index) => (
            <div key={index} className="mb-4 p-3 bg-gray-100 rounded">
              <p className="font-semibold">{question.question}</p>
              <p className={selectedAnswers[index] === question.correctAnswer ? "text-green-600" : "text-red-600"}>
                Tu respuesta: {question.options[selectedAnswers[index]]}
              </p>
              {selectedAnswers[index] !== question.correctAnswer && (
                <p className="text-green-600">Respuesta correcta: {question.options[question.correctAnswer]}</p>
              )}
            </div>
          ))}
          <button
            onClick={() => onComplete(score)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Finalizar Cuestionario
          </button>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Cuestionario</h2>
          <div className="flex items-center">
            <Clock className="mr-2" size={20} />
            <span className="font-semibold">{formatTime(timeLeft)}</span>
            <button onClick={onClose} className="ml-4 text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
        </div>
        <div className="flex justify-center mb-4">
          {quizQuestions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`w-8 h-8 rounded-full mx-1 flex items-center justify-center
                ${currentQuestion === index 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-300 text-gray-600 hover:bg-gray-400'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <p className="mb-4 font-semibold">{question.question}</p>
        {question.options.map((option, index) => (
          <div key={index} className="mb-2">
            <label className="flex items-center p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
              <input
                type="radio"
                name="answer"
                value={index}
                checked={selectedAnswers[currentQuestion] === index}
                onChange={() => handleAnswerSelect(index)}
                className="mr-2"
              />
              {option}
            </label>
          </div>
        ))}
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 disabled:bg-gray-200 disabled:text-gray-400"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={currentQuestion === quizQuestions.length - 1 ? handleFinish : handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {currentQuestion === quizQuestions.length - 1 ? "Finalizar" : "Siguiente"}
          </button>
        </div>
      </div>
    </div>
  );
}