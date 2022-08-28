import Profiles from "./components/Profiles";
import Leaderboard from "./components/Leaderboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Marema</h1>
      </header>

      <main className="App-main">
        <Leaderboard />
        <Profiles />
      </main>
    </div>
  );
}

export default App;
