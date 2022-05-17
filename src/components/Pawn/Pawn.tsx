import styled from "styled-components";

import { IOffset } from "../../types/types";

const StyledPawn = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color:  ${(props: PawnProps) => props.isQueen ? "#FFB300" : "#CAEEC2"};
  width: 2rem;
  height: 2rem;
  bottom: ${(props: PawnProps) => props.offset.bottom};
  left: ${(props: PawnProps) => props.offset.left};
`;

interface PawnProps {
  offset: IOffset;
  isQueen: boolean;
}

export const Pawn = ({ offset, isQueen }: PawnProps) => {
  return <StyledPawn offset={offset} isQueen={isQueen} />;
};
