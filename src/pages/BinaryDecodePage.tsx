import React, { useState, useEffect } from "react";
import { generateBinaryNumber } from "../utils/generateBinaryNumber";
import { binaryToDecimal } from "../utils/binaryToDecimal";
import "./BinaryDecodePage.css";
import { useScore } from "../context/ScoreContext";

export const BinaryDecodePage: React.FC = () => {
  const [binary, setBinary] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const [options, setOptions] = useState<number[]>([]);

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
    (async () => {
      const newBinary = await generateBinaryNumber();
      setBinary(newBinary);

      const correctNumber = binaryToDecimal(newBinary);
      setCorrectAnswer(correctNumber);
      const newOptions = generateOptions(correctNumber);
      setOptions(newOptions);
    })();
  }, []);

  const handleAnswer = (selectedAnswer: number) => {
    if (selectedAnswer === correctAnswer) {
      increaseScore();
      alert("Correct!");
    } else {
      decreaseScore();
      alert("Incorrect. Try again.");
    }
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
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
