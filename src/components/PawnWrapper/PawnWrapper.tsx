import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Pawn } from "../Pawn/Pawn";
import { Offset } from "../../types/types";
import { usePawnMovement } from "../../providers/ContextProvider";

const StyledPawnWrapper = styled.div`
  background-color: transparent;
`;

export const PawnWrapper = () => {
  const pawnEl = useRef<any>();
  const { setDirection, position, moveRight, moveLeft } = usePawnMovement();
  const [offset, setOffset] = useState<Offset>({ bottom: 0, left: 0 });

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

  const handleKeyDown = (event: any) => {
    pawnEl.current.focus();
    if (event.key === "ArrowUp") {
      if (position.col + 1 <= 9) {
        setDirection("up");
      }
    } else if (event.key === "ArrowRight") {
      if (position.row + 1 <= 9 && position.col + 1 <= 9) {
        moveRight();
      }
    } else if (event.key === "ArrowLeft") {
      if (position.row - 1 >= 0 && position.col + 1 <= 9) {
       moveLeft();
      }
    } else if (event.key === "ArrowDown") {
      if (position.col - 1 >= 0) {
        setDirection("down");
      }
    }
  };

  return (
    <StyledPawnWrapper ref={pawnEl} onKeyUp={handleKeyDown}>
      <Pawn offset={offset} />
    </StyledPawnWrapper>
  );
};
