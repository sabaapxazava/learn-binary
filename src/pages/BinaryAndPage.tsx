import React, { useState, useEffect, useRef } from "react";
import { generateBinaryNumber } from "../utils/generateBinaryNumber";
import { andBinaryDigits } from "../utils/andBinaryDigits";
import "../styles/BinaryAndPage.css";
import { useScore } from "../context/ScoreContext";

export const BinaryAndPage: React.FC = () => {
  const [firstBinary, setFirstBinary] = useState<string>("");
  const [secondBinary, setSecondBinary] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<string>("0");
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(5).fill(""));
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { increaseScore, decreaseScore } = useScore();

  useEffect(() => {
    startGame();
  }, [secondBinary.length]);

  function startGame() {
    const fetchData = async () => {
      const newFirstBinary = await generateBinaryNumber(5);
      setFirstBinary(newFirstBinary);

      const newSecondBinary = await generateBinaryNumber(5);
      setSecondBinary(newSecondBinary);

      const correctNumber = await andBinaryDigits(
        newFirstBinary,
        newSecondBinary
      );
      setCorrectAnswer(correctNumber);
    };

    fetchData();

    inputRefs.current = Array(secondBinary.length).fill(null);
  }
  const handleAnswer = (selectedAnswer: string, index: number) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = selectedAnswer;

    setUserAnswers(updatedAnswers);
    if (!(inputRefs.current[index]?.value === "")) {
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
      for (let item in inputRefs.current) {
        if (inputRefs.current[item]?.value === "") break;
        if (Number(item) === inputRefs.current.length - 1) {
          setIsFinished(true);
          userAnswers.forEach((item, index) => {
            if (item == correctAnswer[index]) {
              increaseScore();
            } else {
              decreaseScore();
            }
          });
        }
      }
    }
  };

  const handleClick = async () => {
    setIsFinished(false);
    inputRefs.current.forEach((item: HTMLInputElement | null) => {
      if (item) {
        item.value = "";
        item.className = "binary-number";
      }
    });
    startGame();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.keyCode === 8 && event.currentTarget.value === "" && index > 0) {
      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1]?.focus();
      }
    }
    console.log(event.keyCode);
  };

  return (
    <div className="binaryDecodeChallenge">
      <h1 className="title">AND the Binary!</h1>
      <div className="binary">
        {firstBinary.split("").map((number, index) => (
          <span className="binary-number" key={index}>
            {number}
          </span>
        ))}
      </div>
      <div className="binary">
        {secondBinary.split("").map((number, index) => (
          <span className="binary-number" key={index}>
            {number}
          </span>
        ))}
      </div>
      <div className="answers">
        {secondBinary.split("").map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            className={
              isFinished
                ? userAnswers[index] === correctAnswer[index]
                  ? "binary-number correct"
                  : "binary-number incorrect"
                : "binary-number"
            }
            maxLength={1}
            pattern="[01]"
            onChange={(e) => handleAnswer(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            disabled={isFinished}
          />
        ))}
      </div>
      <button onClick={handleClick}>Try Again</button>
    </div>
  );
};
