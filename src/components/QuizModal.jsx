import React, { useState } from 'react';
import { X, Check, X as XIcon } from 'lucide-react';
import { quizQuestions } from '../data/quizData'; // Asegúrate de que esta ruta sea correcta

const QuizModal = ({ isOpen, onClose, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  if (!isOpen) return null;

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score
      const newScore = answers.reduce((acc, answer, index) => {
        return answer === quizQuestions[index].correctAnswer ? acc + 1 : acc;
      }, 0);
      setScore(newScore);
      setShowResults(true);
    }
  };

  const handleCloseAndComplete = () => {
    onComplete(score);
    onClose();
  };

  const question = quizQuestions[currentQuestion];

  if (showResults) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Resultados del Cuestionario</h2>
            <button onClick={handleCloseAndComplete} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          <div className="mb-4">
            <p className="text-lg font-semibold">Tu puntuación: {score} de {quizQuestions.length}</p>
            <div className="mt-4">
              {quizQuestions.map((q, index) => (
                <div key={index} className="mb-2">
                  <p className="font-medium">{q.question}</p>
                  <p className={`ml-4 ${answers[index] === q.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                    {answers[index] === q.correctAnswer ? (
                      <><Check size={16} className="inline mr-1" /> Correcto</>
                    ) : (
                      <><XIcon size={16} className="inline mr-1" /> Incorrecto - Respuesta correcta: {q.options[q.correctAnswer]}</>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleCloseAndComplete}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Cuestionario</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="mb-4">
          <p className="font-semibold mb-2">{question.question}</p>
          {question.options.map((option, index) => (
            <div key={index} className="mb-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="answer"
                  checked={answers[currentQuestion] === index}
                  onChange={() => handleAnswer(index)}
                  className="mr-2"
                />
                {option}
              </label>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={answers[currentQuestion] === null}
        >
          {currentQuestion === quizQuestions.length - 1 ? 'Finalizar' : 'Siguiente'}
        </button>
      </div>
    </div>
  );
};

export default QuizModal;