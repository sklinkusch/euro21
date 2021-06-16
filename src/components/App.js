import React, { useState } from 'react'
import '../styles/App.css';
import { MatchList } from "./MatchList"
import { TableSet } from "./Table"
import matches from "../data/matches"

function App() {
  const [groupA, setGroupA] = useState([])
  const [groupB, setGroupB] = useState([])
  const [groupC, setGroupC] = useState([])
  const [groupD, setGroupD] = useState([])
  const [groupE, setGroupE] = useState([])
  const [groupF, setGroupF] = useState([])
  return (
    <div className="App">
      <header className="App-header">
        <aside>
          <MatchList matches={matches} />
        </aside>
        <main>
          <TableSet 
            matches={matches}
            groupA={groupA}
            groupB={groupB}
            groupC={groupC}
            groupD={groupD}
            groupE={groupE}
            groupF={groupF}
            setGroupA={setGroupA}
            setGroupB={setGroupB}
            setGroupC={setGroupC}
            setGroupD={setGroupD}
            setGroupE={setGroupE}
            setGroupF={setGroupF}
          />
        </main>
      </header>
    </div>
  );
}

export default App;
