import styled from "styled-components";

const StyledTile = styled.div`
  height: 2rem;
  width: 2rem;
  background: ${(props: TileProps) => (props.isOdd ? "#000" : "#56144D")};
`;

interface TileProps {
  isOdd: boolean;
}

export const Tile = ({ isOdd }: TileProps) => {
  return <StyledTile isOdd={isOdd} />;
};
