/* eslint-disable react/prop-types */
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Option.css";

const Option = ({ option, selectOption, answer, hide }) => {
  const [quizState] = useContext(QuizContext);

  return (
    <div
      className={`option ${
        quizState.answerSelected && option === answer ? "correct" : ""
      } ${quizState.answerSelected && option !== answer ? "wrong" : ""}
       ${hide ? "hide" : ""}`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;
