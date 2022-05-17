import { Tile } from "../../Tile/Tile";
import { Pawn } from "../Pawn/Pawn";

import "./Board.css";

export const Board = () => {
  const tiles = new Array(10).fill(0).map((el) => new Array(10).fill(0));

  return (
    <div className="Board">
      {tiles.map((row, i) => {
        return (
          <div key={`row-${i}`} className="Row">
            {row.map((tile, j) => {
              return <Tile key={`tile-${i}-${j}`} />;
            })}
          </div>
        );
      })}
      <Pawn />
    </div>
  );
};
