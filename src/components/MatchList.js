/** @jsxImportSource theme-ui */
import React from 'react'
import FlagWrapper from './FlagWrapper'
import { participantName as participants } from "./countries"
import { getColor } from "./helpers"

export function MatchList({ matches }) {
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

export function MatchListTwo({matches}) {
  const { A: groupA, B: groupB } = matches
  return (
    <div>
      <GroupMatchList matches={groupA} number={0} />
      <GroupMatchList matches={groupB} number={1} />
    </div>
  )
}

export function MatchListThree({ matches }) {
  const { A: groupA, B: groupB, C: groupC } = matches
  return (
    <div sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gridTemplateRows: "repeat(2,1fr)"}}>
      <GroupMatchList matches={groupA} number={0} />
      <GroupMatchList matches={groupB} number={1} />
      <GroupMatchList matches={groupC} number={2} />
    </div>
  )
}

export function MatchListFour({ matches }) {
  const { A: groupA, B: groupB, C: groupC, D: groupD } = matches
  return (
    <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(2,1fr)"], gridTemplateRows: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(2,1fr)"]}}>
      <GroupMatchList matches={groupA} number={0} />
      <GroupMatchList matches={groupB} number={1} />
      <GroupMatchList matches={groupC} number={2} />
      <GroupMatchList matches={groupD} number={3} />
    </div>
  )
}

export function MatchListEight({ matches }) {
  const { A: groupA, B: groupB, C: groupC, D: groupD, E: groupE, F: groupF, G: groupG, H: groupH } = matches
  return (
    <div sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gridTemplateRows: "repeat(4, 1fr)" }}>
      <GroupMatchList matches={groupA} number={0} />
      <GroupMatchList matches={groupB} number={1} />
      <GroupMatchList matches={groupC} number={2} />
      <GroupMatchList matches={groupD} number={3} />
      <GroupMatchList matches={groupE} number={4} />
      <GroupMatchList matches={groupF} number={5} />
      <GroupMatchList matches={groupG} number={6} />
      <GroupMatchList matches={groupH} number={7} />
    </div>
  )
}

function GroupMatchList({ matches, border, number }) {
  const bgcolor = getColor(number)
  return (
    <table sx={{ width: "100%", my: "4px", mx: "4px", py: "2px", px: "2px", backgroundColor: bgcolor, borderRadius: "20px" }}>
      <tbody>
      {matches.map((match, index) => {
        const { teams, goals, date } = match
        const [teamA, teamB] = teams
        const [goalsA, goalsB] = goals
        const aGoals = typeof goalsA === "number" ? `${goalsA}` : "-"
        const bGoals = typeof goalsB === "number" ? `${goalsB}` : "-"
        const aParticipants = participants(teamA) ? participants(teamA) : teamA
        const bParticipants = participants(teamB) ? participants(teamB) : teamB
        const language = navigator.language
        const formattedDate = date ? new Date(date).toLocaleDateString(language, { year: "2-digit", month: "2-digit", day: "2-digit" }) : null
        return (
          <tr key={index} sx={{ height: "14px" }}>
            <td sx={{ width: "25%" }}><FlagWrapper team={teamA} participant={aParticipants} /></td>
            <td sx={{ width: "25%" }}><FlagWrapper team={teamB} participant={bParticipants} /></td>
            {typeof goalsA === 'number' && typeof goalsB === 'number' ? (<td sx={{ width: "50%" }}><span sx={{ fontSize: 0, lineHeight: "16px", color: "ft" }}>{`${aGoals}:${bGoals}`}</span></td>) : formattedDate ? (<td sx={{ width: "50%"}}><span sx={{ fontSize: 0, lineHeight: "16px", color: "ft" }}>{formattedDate}</span></td>) : (<td sx={{ width: "50%" }}><span sx={{ fontSize: 0, lineHeight: "16px", color: "ft" }}>-:-</span></td>)}
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}