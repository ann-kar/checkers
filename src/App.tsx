import styled from "styled-components";

import { Board } from "./components/Board/Board";
import { Instructions } from "./components/instructions/Instructions";
import { PawnMovementContextProvider } from "./providers/ContextProvider";

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <PawnMovementContextProvider>
      <StyledApp>
        <div>
        <Board />
        <Instructions/>
        </div>
      </StyledApp>
    </PawnMovementContextProvider>
  );
}

export default App;
