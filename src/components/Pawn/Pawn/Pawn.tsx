import { useRef } from "react";
import "./Pawn.css";

export const Pawn = () => {
  const pawnEl = useRef<any>();

  const handleKeyDown = (event: any) => {
    pawnEl.current.focus();
  };

  return <div className="Pawn" ref={pawnEl} onKeyUp={handleKeyDown}></div>;
};
