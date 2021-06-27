/** @jsxImportSource theme-ui */
import React from 'react'
import Flag from "react-world-flags"
import { participantName as participants } from "./countries"
import { getColor } from "./helpers"

function MatchList({ matches }) {
  const { A: groupA, B: groupB, C: groupC, D: groupD, E: groupE, F: groupF } = matches
  return (
    <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(3,1fr)", "repeat(2,1fr)"], gridTemplateRows: ["repeat(3,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"] }}>
      <GroupMatchList matches={groupA} number={0} />
      <GroupMatchList matches={groupB} number={1} />
      <GroupMatchList matches={groupC} number={2} />
      <GroupMatchList matches={groupD} number={3} />
      <GroupMatchList matches={groupE} number={4} />
      <GroupMatchList matches={groupF} number={5} />
    </div>
  )
}

function GroupMatchList({ matches, border, number }) {
  const bgcolor = getColor(number)
  return (
    <table sx={{ width: "100%", my: "4px", mx: "4px", py: "2px", px: "2px", backgroundColor: bgcolor, borderRadius: "20px" }}>
      <tbody>
      {matches.map((match, index) => {
        const { teams, goals } = match
        const [teamA, teamB] = teams
        const [goalsA, goalsB] = goals
        const aGoals = typeof goalsA === "number" ? `${goalsA}` : "-"
        const bGoals = typeof goalsB === "number" ? `${goalsB}` : "-"
        return (
          <tr key={index} sx={{ height: "14px" }}>
            <td><Flag code={teamA} title={participants(teamA)} sx={{ height: "14px", marginRight: "8px" }} fallback={<span>🏴‍☠️</span>} /></td>
            <td><Flag code={teamB} title={participants(teamB)} sx={{ height: "14px", marginRight: "16px" }} fallback={<span>🏴‍☠️</span>} /></td>
            <td><span sx={{ fontSize: 0, lineHeight: "16px", color: "ft" }}>{`${aGoals}:${bGoals}`}</span></td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

export { MatchList }