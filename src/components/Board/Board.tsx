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
              return <Tile key={`tile-${i}-${j}`} />;
            })}
          </Row>
        );
      })}
      <PawnWrapper />
    </StyledBoard>
  );
};
