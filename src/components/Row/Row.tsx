import { ReactNode } from "react";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
`;

export const Row = ({ children }: { children: ReactNode }) => {
  return <StyledRow>{children}</StyledRow>;
};
