import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initisalName=" Player1 " symbol="X" />
          <Player initisalName=" Player2 " symbol="O" />
        </ol>
        Game board
      </div>
      log
    </main>
  );
}

export default App;
