/** @jsxImportSource theme-ui */
import React from 'react'
import Flag from 'react-world-flags'
import { participantName as participants, localeName as locales } from './countries'

function Finale({teams = [], matchf = []}) {
  return (
    <div sx={{ width: "100%", gridColumn: ["1 / span 2","1 / span 2", "1 / span 6"], margin: "8px", padding: "8px" }}>
      <div sx={{ fontSize: "14px", textAlign: "center", textTransform: "uppercase", fontWeight: 500, lineHeight: 1.5 }}>
        {locales("Final")}
      </div>
      <table sx={{ width: "100%" }}>
        <tbody>
          <tr>
            <FinaleSingle teams={teams} match={matchf} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function FinaleSingle({teams, match}) {
  const {goals = [], add = ""} = match
  const [ goalsA = "-", goalsB = "-" ] = goals
  const [teamA = undefined, teamB = undefined] = teams
  return (
    <React.Fragment>
      <td><Flag code={teamA} title={participants(teamA)} sx={{ height: "14px" }} fallback={<span>🏴‍☠️</span>} /></td>
      <td><Flag code={teamB} title={participants(teamB)} sx={{ height: "14px" }} fallback={<span>🏴‍☠️</span>} /></td>
      {teamA && teamB ? <td sx={{ fontSize: "14px"}}>{`${typeof goalsA === "number" ? goalsA : "-"}:${typeof goalsB === "number" ? goalsB : "-"} ${add ? add : ""}`}</td> : <td sx={{ fontSize: "14px"}}>-:-</td>}
    </React.Fragment>
  )
}

export { Finale }
