import React, { useState, useEffect, useRef } from "react";
import { generateBinaryNumber } from "../utils/generateBinaryNumber";
import { xorBinaryDigits } from "../utils/xorBinaryDigits";
import "./BinaryXorPage.css";

export const BinaryXorPage: React.FC = () => {
  const [firstBinary, setFirstBinary] = useState<string>("");
  const [secondBinary, setSecondBinary] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<string>("0");
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(5).fill(""));
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const newFirstBinary = await generateBinaryNumber(5);
      setFirstBinary(newFirstBinary);

      const newSecondBinary = await generateBinaryNumber(5);
      setSecondBinary(newSecondBinary);

      const correctNumber = await xorBinaryDigits(
        newFirstBinary,
        newSecondBinary
      );
      setCorrectAnswer(correctNumber);
    };

    fetchData();

    inputRefs.current = Array(secondBinary.length).fill(null);
  }, [secondBinary.length]);

  const handleAnswer = (selectedAnswer: string, index: number) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = selectedAnswer;

    setUserAnswers(updatedAnswers);

    if (inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
    if (index == 4) {
      setIsFinished(true);
    }
  };

  return (
    <div className="binaryDecodeChallenge">
      <h1 className="title">XOR the Binary!</h1>
      <div className="binary">
        {firstBinary.split("").map((number, index) => (
          <span className="binary-number" key={`first-${index}`}>
            {number}
          </span>
        ))}
      </div>
      <div className="binary">
        {secondBinary.split("").map((number, index) => (
          <span className="binary-number" key={`second-${index}`}>
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
            onChange={(e) => handleAnswer(e.target.value, index)}
          />
        ))}
      </div>
    </div>
  );
};
