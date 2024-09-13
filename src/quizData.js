import React, { useState } from 'react';

// Array of questions, options, and correct answers
const quizData = [
  {
    question: "What is the largest bone in the human body?",
    options: ["Femur", "Tibia", "Humerus"],
    answer: "Femur"
  },
  {
    question: "Which organ is responsible for filtering blood?",
    options: ["Lungs", "Kidney", "Liver"],
    answer: "Kidney"
  },
  {
    question: "What is the basic unit of life?",
    options: ["Tissue", "Cell", "Organ"],
    answer: "Cell"
  },
  {
    question: "What part of the brain controls balance?",
    options: ["Cerebrum", "Cerebellum", "Brainstem"],
    answer: "Cerebellum"
  },
  {
    question: "How many chambers does the human heart have?",
    options: ["2", "4", "6"],
    answer: "4"
  },
  {
    question: "What muscle is responsible for breathing?",
    options: ["Diaphragm", "Liver", "Spleen"],
    answer: "Diaphragm"
  },
  {
    question: "Where are the smallest bones in the human body found?",
    options: ["Ear", "Nose", "Feet"],
    answer: "Ear"
  },
  {
    question: "Which part of the eye is responsible for focusing light?",
    options: ["Cornea", "Lens", "Retina"],
    answer: "Lens"
  },
  {
    question: "What is the strongest muscle in the human body by weight?",
    options: ["Heart", "Masseter", "Quadriceps"],
    answer: "Masseter"
  },
  {
    question: "Which blood cells help in clotting?",
    options: ["White blood cells", "Red blood cells", "Platelets"],
    answer: "Platelets"
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle the user's answer selection
  const handleAnswerOptionClick = (option) => {
    setSelectedOption(option);

    setTimeout(() => {
      if (option === questions[currentQuestion].answer) {
        setScore(score + 1);
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }

      setSelectedOption(null);
    }, 500); // Delayed transition to next question
  };

  // JavaScript Styling: Change button color based on the selected answer
  const getButtonStyle = (option) => {
    if (selectedOption) {
      return {
        backgroundColor:
          option === questions[currentQuestion].answer
            ? "#28a745"
            : "#dc3545",
        color: "#fff",
        cursor: "not-allowed",
        transition: "all 0.3s ease"
      };
    }
    return { backgroundColor: "#007BFF", color: "white" };
  };

  return (
    <div style={styles.quizContainer}>
      {showScore ? (
        <div style={styles.scoreSection}>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div style={styles.questionSection}>
            <div style={styles.questionCount}>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div style={styles.questionText}>
              {questions[currentQuestion].question}
            </div>
          </div>
          <div style={styles.answerSection}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                style={getButtonStyle(option)}
                disabled={!!selectedOption}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Styles object using JavaScript
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
