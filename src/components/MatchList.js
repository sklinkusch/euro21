import React from 'react'
import Flag from "react-world-flags"
import participants from "./countries"

function MatchList({matches}){
  const { A: groupA, B: groupB, C: groupC, D: groupD, E: groupE, F: groupF } = matches 
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "repeat(3,1fr)" }}>
      <GroupMatchList matches={groupA} border={true} number={0} />
      <GroupMatchList matches={groupB} border={true} number={1} />
      <GroupMatchList matches={groupC} border={true} number={2} />
      <GroupMatchList matches={groupD} border={true} number={3} />
      <GroupMatchList matches={groupE} border={false} number={4} />
      <GroupMatchList matches={groupF} border={false} number={5} />
    </div>
  )
}

function GroupMatchList({matches, border, number}) {
  const borderLeft = number % 2 === 1 ? "1px solid black" : "none"
  const borderBottom = border ? "1px solid black" : "none"
  return (
    <table style={{ width: "100%", borderBottom, borderLeft }}>
      {matches.map((match, index) => {
        const {teams, goals} = match 
        const [teamA, teamB] = teams 
        const [goalsA, goalsB] = goals
        const aGoals = typeof goalsA === "number" ? `${goalsA}` : "-"
        const bGoals = typeof goalsB === "number" ? `${goalsB}` : "-"
          return (
          <tr key={index} style={{ height: "14px" }}>
            <td><Flag code={teamA} title={participants[teamA]} style={{ height: "14px", marginRight: "8px"}} fallback={<span>🏴‍☠️</span>} /></td>
            <td><Flag code={teamB} title={participants[teamB]} style={{ height: "14px", marginRight: "16px"}} fallback={<span>🏴‍☠️</span>} /></td>
            <td><span style={{ fontSize: "14px", lineHeight: "16px", color: "black" }}>{`${aGoals}:${bGoals}`}</span></td>
          </tr>
          )
      })}
    </table>
  )
}

export { MatchList }