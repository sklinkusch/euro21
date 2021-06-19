import React, { useState, useEffect } from 'react'
import Flag from "react-world-flags"
import '../styles/App.css';
import { MatchList } from "./MatchList"
import { TableSet, TableThird } from "./Table"
import matches, { matchaf, matchvf, matchhf, matchf } from "../data/matches"
import { Achtelfinale } from "./Achtelfinale"
import { Viertelfinale } from "./Viertelfinale"
import { Halbfinale } from './Halbfinale';
import { getAssociation } from './helpers';
import { Finale } from './Finale';
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
  const aTeamVF1 = matchaf[5].goals[0] ? matchaf[5].goals[0] > matchaf[5].goals[1] ? first[5] : winningTeams[association.indexOf(5)] : null
  const bTeamVF1 = matchaf[4].goals[0] ? matchaf[4].goals[0] > matchaf[4].goals[1] ? second[3] : second[4] : null
  const teamsVF1 = [aTeamVF1, bTeamVF1]
  const aTeamVF2 = matchaf[3].goals[0] ? matchaf[3].goals[0] > matchaf[3].goals[1] ? first[1] : winningTeams[association.indexOf(3)] : null
  const bTeamVF2 = matchaf[1].goals[0] ? matchaf[1].goals[0] > matchaf[1].goals[1] ? first[0] : second[2] : null
  const teamsVF2 = [aTeamVF2, bTeamVF2] 
  const aTeamVF3 = matchaf[2].goals[0] ? matchaf[2].goals[0] > matchaf[2].goals[1] ? first[2] : winningTeams[association.indexOf(2)] : null 
  const bTeamVF3 = matchaf[0].goals[0] ? matchaf[0].goals[0] > matchaf[0].goals[1] ? second[0] : second[1] : null 
  const teamsVF3 = [aTeamVF3, bTeamVF3] 
  const aTeamVF4 = matchaf[7].goals[0] ? matchaf[7].goals[0] > matchaf[7].goals[1] ? first[6] : winningTeams[association.indexOf(7)] : null 
  const bTeamVF4 = matchaf[6].goals[0] ? matchaf[6].goals[0] > matchaf[6].goals[1] ? first[3] : second[5] : null 
  const teamsVF4 = [aTeamVF4, bTeamVF4] 
  const teamsVF = [teamsVF1, teamsVF2, teamsVF3, teamsVF4] 
  const aTeamHF1 = matchvf[1].goals[0] ? matchvf[1].goals[0] > matchvf[1].goals[1] ? aTeamVF2 : bTeamVF2 : null 
  const bTeamHF1 = matchvf[0].goals[0] ? matchvf[0].goals[0] > matchvf[0].goals[1] ? aTeamVF1 : bTeamVF1 : null 
  const teamsHF1 = [aTeamHF1, bTeamHF1]
  const aTeamHF2 = matchvf[3].goals[0] ? matchvf[3].goals[0] > matchvf[3].goals[1] ? aTeamVF4 : bTeamVF4 : null 
  const bTeamHF2 = matchvf[2].goals[0] ? matchvf[2].goals[0] > matchvf[2].goals[1] ? aTeamVF3 : bTeamVF3 : null 
  const teamsHF2 = [aTeamHF2, bTeamHF2] 
  const teamsHF = [teamsHF1, teamsHF2]
  const aTeamF = matchhf[0].goals[0] ? matchhf[0].goals[0] > matchhf[0].goals[1] ? aTeamHF1 : bTeamHF1 : null 
  const bTeamF = matchhf[1].goals[0] ? matchhf[1].goals[0] > matchhf[1].goals[1] ? aTeamHF2 : bTeamHF2 : null 
  const teamsF = [aTeamF, bTeamF]
  const champion = matchf.goals[0] ? matchf.goals[0] > matchf.goals[1] ? aTeamF : bTeamF : null
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
        <main style={{ borderLeft: "1px solid black" }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderBottom: "1px solid black"}}>
            <TableThird third={third} />
            <Achtelfinale first={first} second={second} third={winningTeams} assoc={association} matchaf={matchaf} />
            <Viertelfinale teams={teamsVF} matchvf={matchvf} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", borderBottom: "1px solid black"}}>
            <Halbfinale teams={teamsHF} matchhf={matchhf} />
            <Finale teams={teamsF} matchf={matchf} />
          </div>
          <h2>
            Europameister: <Flag code={champion} style={{ height: "16px" }} fallback={<span>🏴‍☠️</span>} />
          </h2>
        </main>
      </header>
    </div>
  );
}

export default App;
