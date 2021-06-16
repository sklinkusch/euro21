import '../styles/App.css';
import { MatchList } from "./MatchList"
import { TableSet } from "./Table"
import matches from "../data/matches"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <aside>
          <MatchList matches={matches} />
        </aside>
        <main>
          <TableSet matches={matches} />
        </main>
      </header>
    </div>
  );
}

export default App;
