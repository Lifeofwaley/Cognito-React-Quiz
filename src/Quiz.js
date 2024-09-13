import React, { useState } from 'react';
import quizData from './quizData';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(""); 
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerOptionClick = (option) => {
    const correctAnswer = quizData[currentQuestion].answer;
    setSelectedAnswer(option);
    if (option === correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
        setIsCorrect(null);
        setSelectedAnswer("");
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const getButtonStyle = (option) => {
    if (selectedAnswer) {
      return {
        backgroundColor:
          option === quizData[currentQuestion].answer
            ? 'lightgreen'
            : 'pink',
        color: '#fff',
        cursor: 'not-allowed',
      };
    }
    return { backgroundColor: '#007BFF', color: 'white' };
  };

  return (
    <div style={styles.quizContainer}>
      {showScore ? (
        <div style={styles.scoreSection}>
          You scored {score} out of {quizData.length}
        </div>
      ) : (
        <>
          <div style={styles.questionSection}>
            <div style={styles.questionCount}>
              <span>Question {currentQuestion + 1}</span>/{quizData.length}
            </div>
            <div style={styles.questionText}>
              {quizData[currentQuestion].question}
            </div>
          </div>
          <div style={styles.answerSection}>
            {quizData[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerOptionClick(option)}
                style={getButtonStyle(option)}
                disabled={!!selectedAnswer}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAnswer && (
            <div style={{ marginTop: '10px' }}>
              {isCorrect ? 'Correct! 🎉' : 'Sorry, that’s not right. 😢'}
            </div>
          )}
        </>
      )}
    </div>
  );
}

const styles = {
  quizContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  questionSection: {
    marginBottom: "20px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "80%",
    maxWidth: "500px",
  },
  questionCount: {
    fontSize: "1.2rem",
    color: "#333333",
    marginBottom: "10px",
  },
  questionText: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333333",
  },
  answerSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },
  scoreSection: {
    fontSize: "1.5rem",
    color: "#333333",
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "80%",
    maxWidth: "400px",
  },
};

export default Quiz;
