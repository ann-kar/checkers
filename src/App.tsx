import { Board } from "./components/Board/Board";
import { PawnMovementContextProvider } from "./providers/ContextProvider";

function App() {
  return (
    <PawnMovementContextProvider>
      <div className="App">
        <Board />
      </div>
    </PawnMovementContextProvider>
  );
}

export default App;
