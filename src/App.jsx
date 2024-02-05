import Gameboard from "./components/GameBoard";
import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initisalName=" Player1 " symbol="X" />
          <Player initisalName=" Player2 " symbol="O" />
        </ol>
        <Gameboard/>
      </div>
      log
    </main>
  );
}

export default App;
