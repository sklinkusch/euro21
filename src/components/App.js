import React, { useState, useEffect } from 'react'
import '../styles/App.css';
import { MatchList } from "./MatchList"
import { TableSet, TableThird } from "./Table"
import matches from "../data/matches"
import { Achtelfinale } from "./Achtelfinale"
import { getAssociation } from './helpers';
/* eslint-disable react-hooks/exhaustive-deps */

function App() {
  const uefaCoefficient = ["ES", "NL", "DE", "IT", "GB-ENG", "RU", "HR", "PT", "SE", "DK", "FR", "CZ", "UA", "CH", "TR", "SK", "HU", "FI", "GB-SCT", "PL", "AT", "BE", "GB-WLS", "MK"]
  const [groupA, setGroupA] = useState([])
  const [groupB, setGroupB] = useState([])
  const [groupC, setGroupC] = useState([])
  const [groupD, setGroupD] = useState([])
  const [groupE, setGroupE] = useState([])
  const [groupF, setGroupF] = useState([])
  const [first, setFirst] = useState([])
  const [second, setSecond] = useState([])
  const [third, setThird] = useState([])
  const [winningTeams, setWinningTeams] = useState([])
  const [association, setAssociation] = useState([])
  useEffect(() => {
    const mergedGroups = [groupA, groupB, groupC, groupD, groupE, groupF ]
    const firstPlace = mergedGroups.map(group => group[0])
    const secondPlace = mergedGroups.map(group => group[1])
    const thirdPlace = mergedGroups.map(group => group[2])
    const sortedThird = thirdPlace.sort((a, b) => {
      const aUefa = uefaCoefficient.indexOf(a.team)
      const bUefa = uefaCoefficient.indexOf(b.team)
      if(a.points > b.points) {
        return -1
      } else if(b.points > a.points) {
        return +1
      } else if(a.goalDifference > b.goalDifference) {
        return -1
      } else if(b.goalDifference > a.goalDifference) {
        return +1
      } else if(a.fairPlay < b.fairPlay) {
        return -1
      } else if(b.fairPlay < a.fairPlay) {
        return +1
      }
      return aUefa - bUefa
    })
    const bestThirds = sortedThird.slice(0,4).map(item => { 
      if(item && item.hasOwnProperty("group") && item.hasOwnProperty("team")) {
        const { group, team } = item
        return {group, team}
      }
      return {}
    })
    const winningCombination = bestThirds.map(item => {
      return item.group || ""
    }).sort((a, b) => a < b ? -1 : +1).join("")
    const wTeams = bestThirds.sort((a, b) => a.group < b.group ? -1 : +1).map(item => item.team)
    const assoc = getAssociation(winningCombination)
    setFirst(firstPlace)
    setSecond(secondPlace)
    setThird(sortedThird)
    setWinningTeams(wTeams)
    setAssociation(assoc)
  }, [groupA, groupB, groupC, groupD, groupE, groupF])
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
          <TableThird third={third} />
          <Achtelfinale first={first} second={second} third={winningTeams} assoc={association} />
        </main>
      </header>
    </div>
  );
}

export default App;
