import React, { useState, useEffect } from "react";
import { generateBinaryNumber } from "../utils/generateBinaryNumber";
import { binaryToDecimal } from "../utils/binaryToDecimal";
import "../styles/BinaryDecodePage.css";
import { useScore } from "../context/ScoreContext";
import Swal from "sweetalert2";

export const BinaryDecodePage: React.FC = () => {
  const [binary, setBinary] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const [options, setOptions] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const { increaseScore, decreaseScore } = useScore();

  const generateOptions = (correctNumber: number): number[] => {
    const options = [correctNumber];
    while (options.length < 4) {
      const randomNum = Math.floor(Math.random() * 50);
      if (!options.includes(randomNum)) {
        options.push(randomNum);
      }
    }
    return options.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    startGame();
  }, []);

  const handleAnswer = (selectedAnswer: number) => {
    setIsFinished(true);
    if (selectedAnswer === correctAnswer) {
      increaseScore();
      Swal.fire({
        title: "Good job!",
        text: `${binary} => ${correctAnswer}`,
        icon: "success",
      });
    } else {
      decreaseScore();
      Swal.fire({
        title: "Try Again!",
        text: `${binary} => ${correctAnswer}`,
        icon: "error",
      });
    }
  };

  const handleClick = async () => {
    startGame();
  };

  const startGame = async () => {
    setIsFinished(false);
    const newBinary = await generateBinaryNumber();
    setBinary(newBinary);

    const correctNumber = binaryToDecimal(newBinary);
    setCorrectAnswer(correctNumber);
    const newOptions = generateOptions(correctNumber);
    setOptions(newOptions);
  };
  return (
    <div className="binaryDecodeChallenge">
      <h1 className="title">Decode the Binary!</h1>
      <p className="binary">
        Binary:{" "}
        {binary.split("").map((number) => (
          <span className="binary-number">{number}</span>
        ))}
      </p>
      <div className="answers">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className={
              isFinished
                ? option === correctAnswer
                  ? "correct"
                  : "incorrect"
                : ""
            }
          >
            {option}
          </button>
        ))}
      </div>
      <button onClick={handleClick}>Try Again</button>
    </div>
  );
};
