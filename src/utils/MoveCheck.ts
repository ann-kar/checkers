import { IPosition } from "../types/types";

export class MoveCheck {

    static canMoveDown = (position:IPosition) => {
      return position.row - 1 >= 0;
    };

    static canMoveUp = (position:IPosition) => {
      return position.row + 1 <= 9;
    };

    static canMoveRight = (position:IPosition) => {
      return position.col + 1 <= 9;
    };

    static canMoveLeft = (position:IPosition) => {
      return position.col - 1 >= 0;
    };
  }
