import { createContext, useContext, useState, ReactNode } from "react";

type ScoreContextType = {
  score: number;
  increaseScore: () => void;
  decreaseScore: () => void;
};

const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

type ScoreProviderProps = {
  children: ReactNode;
};

export const ScoreProvider: React.FC<ScoreProviderProps> = ({ children }) => {
  const [score, setScore] = useState<number>(0);

  const increaseScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const decreaseScore = () => {
    setScore((prevScore) => (prevScore > 0 ? prevScore - 1 : 0));
  };

  return (
    <ScoreContext.Provider value={{ score, increaseScore, decreaseScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = (): ScoreContextType => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error("useScore must be used within a ScoreProvider");
  }
  return context;
};
