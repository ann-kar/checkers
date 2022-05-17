import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Pawn } from "../Pawn/Pawn";
import { Offset } from "../../types/types";
import { usePawnMovement } from "../../providers/ContextProvider";
import { MoveCheck } from "../../utils/MoveCheck";

const StyledPawnWrapper = styled.div`
  background: transparent;
`;

export const PawnWrapper = () => {
  const pawnEl = useRef<HTMLDivElement>(null);
  const {
    setDirection,
    direction,
    position,
    moveRight,
    moveLeft,
    moveDownRight,
    moveDownLeft,
  } = usePawnMovement();
  const [offset, setOffset] = useState<Offset>({ bottom: 0, left: 0 });
  const [isQueen, setIsQueen] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  useEffect(() => {
    setOffset({
      bottom: position.row * 2 + "rem",
      left: position.col * 2 + "rem",
    });
  }, [position]);

  const checkIfQueen = () => {
    position.row + 1 === 9 && setIsQueen(true);
  };

  const handleKeyUp = (event: React.KeyboardEvent | KeyboardEvent) => {
    if (!pawnEl.current) throw Error("pawn element is not assigned");
    pawnEl.current.focus();
    switch (event.key) {
      case "ArrowUp":
        if (isQueen) setDirection("up");
        break;
      case "ArrowDown":
        if (isQueen) setDirection("down");
        break;
      case "ArrowRight":
        if (MoveCheck.canMoveRight(position)) {
          if (
            isQueen &&
            direction === "down" &&
            MoveCheck.canMoveDown(position)
          ) {
            moveDownRight();
          } else if (MoveCheck.canMoveUp(position)) {
            moveRight();
            checkIfQueen();
          }
        }
        break;
      case "ArrowLeft":
        if (MoveCheck.canMoveLeft(position)) {
          console.log("can");
          if (
            isQueen &&
            direction === "down" &&
            MoveCheck.canMoveDown(position)
          ) {
            moveDownLeft();
          } else if (MoveCheck.canMoveUp(position)) {
            moveLeft();
            checkIfQueen();
          }
        }
        break;
    }
  };

  return (
    <StyledPawnWrapper ref={pawnEl} onKeyUp={handleKeyUp}>
      <Pawn offset={offset} isQueen={isQueen} />
    </StyledPawnWrapper>
  );
};
