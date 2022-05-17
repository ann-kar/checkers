import styled from "styled-components";
import { Tile } from "../Tile/Tile";
import { PawnWrapper } from "../PawnWrapper/PawnWrapper";
import { Row } from "../Row/Row";

const StyledBoard = styled.div`
  position: relative;
`;

export const Board = () => {
  const tiles = new Array(10).fill(0).map((el) => new Array(10).fill(0));

  return (
    <StyledBoard>
      {tiles.map((row, i) => {
        return (
          <Row key={`row-${i}`}>
            {row.map((tile, j) => {
              let isOdd = true;
              if (((j % 2) && (i % 2)) || (!(j % 2) && !(i % 2))) {
                isOdd = false
              }
              return <Tile isOdd={isOdd} key={`tile-${i}-${j}`} />;
            })}
          </Row>
        );
      })}
      <PawnWrapper />
    </StyledBoard>
  );
};
