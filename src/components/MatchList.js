/** @jsxImportSource theme-ui */
import React from 'react'
import FlagWrapper from './FlagWrapper'
import { participantName as participants } from "./countries"
import { getColor } from "./helpers"

export function MatchList({ matches }) {
  const { A: groupA, B: groupB, C: groupC, D: groupD, E: groupE, F: groupF } = matches
  return (
    <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(3,1fr)"], gridTemplateRows: ["repeat(3,1fr)", "repeat(2,1fr)", "repeat(2,1fr)"] }}>
      <GroupMatchList matches={groupA} number={0} identifier="A" />
      <GroupMatchList matches={groupB} number={1} identifier="B" />
      <GroupMatchList matches={groupC} number={2} identifier="C" />
      <GroupMatchList matches={groupD} number={3} identifier="D" />
      <GroupMatchList matches={groupE} number={4} identifier="E" />
      <GroupMatchList matches={groupF} number={5} identifier="F" />
    </div>
  )
}

export function MatchListTwo({matches}) {
  const { A: groupA, B: groupB } = matches
  return (
    <div sx={{ display: "grid", gridTemplateColumns: ["1fr", "1fr", "repeat(2,1fr)"] }}>
      <GroupMatchList matches={groupA} number={0} identifier="A" />
      <GroupMatchList matches={groupB} number={1} identifier="B" />
    </div>
  )
}

export function MatchListThree({ matches }) {
  const { A: groupA, B: groupB, C: groupC } = matches
  return (
    <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)","repeat(3,1fr)"], gridTemplateRows: ["repeat(2,1fr)", "repeat(2,1fr)","1fr"]}}>
      <GroupMatchList matches={groupA} number={0} identifier="A" />
      <GroupMatchList matches={groupB} number={1} identifier="B" />
      <GroupMatchList matches={groupC} number={2} identifier="C" />
    </div>
  )
}

export function MatchListFour({ matches }) {
  const { A: groupA, B: groupB, C: groupC, D: groupD } = matches
  return (
    <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"], gridTemplateRows: ["repeat(2,1fr)", "repeat(2,1fr)", "1fr"]}}>
      <GroupMatchList matches={groupA} number={0} identifier="A" />
      <GroupMatchList matches={groupB} number={1} identifier="B" />
      <GroupMatchList matches={groupC} number={2} identifier="C" />
      <GroupMatchList matches={groupD} number={3} identifier="D" />
    </div>
  )
}

export function MatchListEight({ matches }) {
  const { A: groupA, B: groupB, C: groupC, D: groupD, E: groupE, F: groupF, G: groupG, H: groupH } = matches
  return (
    <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"], gridTemplateRows: ["repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(2, 1fr)"] }}>
      <GroupMatchList matches={groupA} number={0} identifier="A" />
      <GroupMatchList matches={groupB} number={1} identifier="B" />
      <GroupMatchList matches={groupC} number={2} identifier="C" />
      <GroupMatchList matches={groupD} number={3} identifier="D" />
      <GroupMatchList matches={groupE} number={4} identifier="E" />
      <GroupMatchList matches={groupF} number={5} identifier="F" />
      <GroupMatchList matches={groupG} number={6} identifier="G" />
      <GroupMatchList matches={groupH} number={7} identifier="H" />
    </div>
  )
}

function GroupMatchList({ matches, border, number, identifier }) {
  const bgcolor = getColor(number)
  return (
    <div sx={{ width: "100%", my: "4px", mx: "4px", py: "2px", px: "2px", backgroundColor: bgcolor, borderRadius: "20px", position: "relative" }}>
      <div sx={{ fontSize: "10vw", width: "100%", height: "100%", fontWeight: "bold", color: "#ffffff70", position: "absolute" }}>{identifier}</div>
      <table sx={{ width: "100%" }}>
        <tbody>
          {matches.map((match, index) =>{
            const { teams, goals, date } = match 
            const [teamA, teamB] = teams 
            const [goalsA, goalsB] = goals
            const aGoals = typeof goalsA === "number" ? `${goalsA}` : "-"
            const bGoals = typeof goalsB === "number" ? `${goalsB}` : "-"
            const aParticipants = participants(teamA) ? participants(teamA) : teamA
            const bParticipants = participants(teamB) ? participants(teamB) : teamB
            const language = navigator.language
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
            const formattedDate = date ? new Date(date).toLocaleString(language, { year: "2-digit", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", timeZone: tz }) : null
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
    </div>
  )
}