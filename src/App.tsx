import { useState } from "react";
import "./App.css";
import { questions } from "./questions";

function App() {
  const [showScore, setShowScore] = useState<boolean>(false);
  const [currentQuestTion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const handleCheckAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      let nextQuestion = currentQuestTion + 1;
      if(nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion)
      } else {
        setShowScore(true)
      }
    };
  };


  return (
    <div className="app">
      {showScore ? (
        <section className="showScore-section">
          Your score is {score} out of {questions.length}
        </section>
      ) : (
        <>
          <section className="question-section">
            <h1>{`${questions[currentQuestTion].questionText}`}</h1>
          </section>
          <section className="flex flex-col gap-y-5 mt-7">
            {questions[currentQuestTion].answerOption.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleCheckAnswer(item.isCorrect)}
                  className="w-full py-3"
                >
                  {item.answerText}
                </button>
              );
            })}
          </section>
        </>
      )}
    </div>
  );
}

export default App;
