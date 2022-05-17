import styled from "styled-components";

import { Offset } from "../../types/types";

const StyledPawn = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: red;
  width: 2rem;
  height: 2rem;
  bottom: ${(props: PawnProps) => props.offset.bottom};
  left: ${(props: PawnProps) => props.offset.left};
`;

interface PawnProps {
  offset: Offset;
}

export const Pawn = ({ offset }: PawnProps) => {
  return <StyledPawn offset={offset} />;
};
