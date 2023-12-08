import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import { styled } from "styled-components";
import RoleDice from "./RoleDice";
import { Button, OutlineButton } from "../Styled/Button";
import Rules from "./Rules";

function GamePlay() {
  const [currentDice, setCurrentDice] = useState("1");
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState("0");
  const [error, setError] = useState("");
  const [showRule, setShowRule] = useState(false);

  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number please select");
      return;
    }

    const randomNumber = getRndInteger(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(null);
  };

  return (
    <>
      <MainContainer>
        <div className="top_section">
          <TotalScore score={score} />
          <NumberSelector
            setError={setError}
            error={error}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice} />
        <div className="btn">
          <OutlineButton
            onClick={() => {
              setScore(0);
            }}
          >
            Reset
          </OutlineButton>
          <Button onClick={() => setShowRule((prev) => !prev)}>
            {showRule ? "Hide Rules" : "Show Rule"}
          </Button>
        </div>
        {showRule && <Rules />}
      </MainContainer>
    </>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
  }
`;
