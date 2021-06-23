/** @jsxImportSource theme-ui */
import React from 'react'
import Flag from 'react-world-flags'
import { participantName as participants, localeName as locales } from './countries'

function Halbfinale({teams = [], matchhf = []}) {
  const [tHF0 = [], tHF1 = []] = teams
  const [mHF0 = {}, mHF1 = {}] = matchhf
  return (
    <div sx={{ width: "100%", gridColumn: ["1 / span 2", "2 / span 1", "4 / span 3"], backgroundColor: "#E6D2B5", margin: "4px", padding: "4px", borderRadius: "20px" }}>
      <div sx={{ fontSize: "14px", textAlign: "center" }}>
        {locales("Semifinal")}
      </div>
      <table sx={{ width: "100%" }}>
        <tbody>
          <tr>
            <HalbfinaleSingle teams={tHF0} match={mHF0} />
          </tr>
          <tr>
            <HalbfinaleSingle teams={tHF1} match={mHF1} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function HalbfinaleSingle({teams, match}) {
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

export { Halbfinale }
