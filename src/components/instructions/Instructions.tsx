import styled from "styled-components";
const StyledInstructions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledH1 = styled.h1`
  padding-top: 1rem;
  margin: 0;
`;

const StyledH2 = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.25rem;
`;

export const Instructions = () => {
  return (
    <StyledInstructions>
      <StyledH1>Checkers</StyledH1>
      <StyledH2>How to move around as a pawn?</StyledH2>
      <div>
        <strong>Move up left: </strong>Arrow Left
      </div>
      <div>
        <strong>Move up right: </strong>Arrow Right
      </div>
      <StyledH2>How to move around as a queen?</StyledH2>
      <div>
        <strong>Set direction: </strong>Arrow Up / Arrow Down
      </div>
      <div>
        <strong>Move: </strong>Arrow Left / Arrow Right
      </div>
    </StyledInstructions>
  );
};
