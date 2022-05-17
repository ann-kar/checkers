import { useEffect, useRef, useState } from "react";
import { produce } from "immer";
import styled from "styled-components";

import { Pawn } from "../Pawn/Pawn";
import { Offset } from "../../types/types";

const StyledPawnWrapper = styled.div`
  background-color: transparent;
`;

export const PawnWrapper = () => {
  const pawnEl = useRef<any>();
  const [direction, setDirection] = useState("up");
  const [position, setPosition] = useState({ row: 0, col: 0 });
  const [offset, setOffset] = useState<Offset>({ bottom: 0, left: 0 });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    setOffset(
      produce((draft) => {
        return {
          bottom: position.col * 2.1 + "rem",
          left: position.row * 2.1 + "rem",
        };
      })
    );
  }, [position]);

  const handleKeyDown = (event: any) => {
    pawnEl.current.focus();
    if (event.key === "ArrowUp") {
      if (position.col + 1 <= 9) {
        setDirection("up");
        setPosition(
          produce((draft) => {
            return { row: draft.row, col: draft.col + 1 };
          })
        );
      }
    } else if (event.key === "ArrowRight") {
      setDirection("right");
      if (position.row + 1 <= 9) {
        setPosition(
          produce((draft) => {
            return { row: draft.row + 1, col: draft.col };
          })
        );
      }
    } else if (event.key === "ArrowLeft") {
      if (position.row - 1 >= 0) {
        setPosition(
          produce((draft) => {
            return { row: draft.row - 1, col: draft.col };
          })
        );
      }
    } else if (event.key === "ArrowDown") {
      if (position.col - 1 >= 0) {
        setPosition(
          produce((draft) => {
            return { row: draft.row, col: draft.col - 1 };
          })
        );
      }
    }
  };

  return (
    <StyledPawnWrapper ref={pawnEl} onKeyUp={handleKeyDown}>
      <Pawn offset={offset} />
    </StyledPawnWrapper>
  );
};
