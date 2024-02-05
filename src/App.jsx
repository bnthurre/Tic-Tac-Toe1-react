function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <li>
          <span className="player-name">Player 1</span>{" "}
          <span className="palyer-symbol">X</span>
        </li>
        <li>
          <span className="player-name">Player 2</span>{" "}
          <span className="palyer-symbol">O</span>
        </li>
      </ol>
    </div>
  );
}

export default App;
