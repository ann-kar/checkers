import produce from "immer";
import React, { useContext, useState, createContext, ReactNode } from "react";
import { IPosition, Direction } from "../types/types";

interface IPawnMovementContext {
  position: IPosition;
  direction: Direction;
  setDirection: React.Dispatch<React.SetStateAction<Direction>>;
  moveLeft: () => void;
  moveRight: () => void;
  moveDownLeft: () => void;
  moveDownRight: () => void;
}

export const PawnMovementContext = createContext<IPawnMovementContext | null>(
  null
);

export const PawnMovementContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [direction, setDirection] = useState<Direction>("up");
  const [position, setPosition] = useState<IPosition>({ row: 0, col: 0 });

  const moveRight = () => {
    setPosition(
      produce((draft) => {
        return { row: draft.row + 1, col: draft.col + 1 };
      })
    );
  };

  const moveLeft = () => {
    setPosition(
      produce((draft) => {
        return { row: draft.row + 1, col: draft.col - 1 };
      })
    );
  };

  const moveDownLeft = () => {
    setPosition(
      produce((draft) => {
        return { row: draft.row - 1, col: draft.col - 1 };
      })
    );
  };

  const moveDownRight = () => {
    setPosition(
      produce((draft) => {
        return { row: draft.row - 1, col: draft.col + 1 };
      })
    );
  };

  return (
    <PawnMovementContext.Provider
      value={{
        position,
        direction,
        setDirection,
        moveLeft,
        moveRight,
        moveDownLeft,
        moveDownRight,
      }}>
      {children}
    </PawnMovementContext.Provider>
  );
};

export function usePawnMovement() {
  const context = useContext(PawnMovementContext);
  if (!context) {
    throw new Error("No data provided");
  }
  return context;
}
