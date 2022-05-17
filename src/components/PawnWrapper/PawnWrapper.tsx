import { useEffect, useRef, useState } from "react";

import { Pawn } from "../Pawn/Pawn";
import { Offset } from "../../types/types";
import { usePawnMovement } from "../../providers/ContextProvider";
import styled from "styled-components";

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
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    setOffset({
      bottom: position.col * 2 + "rem",
      left: position.row * 2 + "rem",
    });
  }, [position]);

  const checkIfQueen = () => {
    position.col + 1 === 9 && setIsQueen(true);
  };

  const handleKeyDown = (event: any) => {
    if (!pawnEl.current) throw Error("pawn element is not assigned");
    pawnEl.current.focus();
    if (event.key === "ArrowRight") {
      if (isQueen && direction === "down") {
        if (position.row + 1 <= 9 && position.col - 1 >= 0) {
          moveDownRight();
        }
      } else if (position.row + 1 <= 9 && position.col + 1 <= 9) {
        moveRight();
        checkIfQueen();
      }
    } else if (event.key === "ArrowLeft") {
      if (isQueen && direction === "down") {
        if (position.row - 1 >= 0 && position.col - 1 >= 0) {
          moveDownLeft();
        }
      } else {
        if (position.row - 1 >= 0 && position.col + 1 <= 9) {
          moveLeft();
          checkIfQueen();
        }
      }
    }

    if (isQueen) {
      if (event.key === "ArrowUp" && position.col + 1 <= 9) {
        setDirection("up");
      } else if (event.key === "ArrowDown" && position.col - 1 >= 0) {
        setDirection("down");
      }
    }
  };

  return (
    <StyledPawnWrapper ref={pawnEl} onKeyUp={handleKeyDown}>
      <Pawn offset={offset} isQueen={isQueen} />
    </StyledPawnWrapper>
  );
};
