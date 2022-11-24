/** @jsxImportSource theme-ui */
import React from 'react'
import { localeName as locales } from './countries'
import { FlagSet } from './helpers'

function Finale({teams = [], matchf = []}) {
  return (
    <div sx={{ width: "100%", gridColumn: ["1 / span 2","1 / span 2", "1 / span 6"], my: "8px", padding: "8px" }}>
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

function Platz3({ teams = [], match3p = []}) {
  return (
    <div sx={{ width: "100%", gridColumn: ["1 / span 2","1 / span 2", "1 / span 6"], my: "8px", padding: "8px" }}>
      <div sx={{ fontSize: "14px", textAlign: "center", textTransform: "uppercase", fontWeight: 500, lineHeight: 1.5 }}>
        {locales("Place3")}
      </div>
      <table sx={{ width: "100%" }}>
        <tbody>
          <tr>
            <FinaleSingle teams={teams} match={match3p} />
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
      <td><FlagSet code={teamA} /></td>
      <td><FlagSet code={teamB} /></td>
      {teamA && teamB ? <td sx={{ fontSize: "14px"}}>{`${typeof goalsA === "number" ? goalsA : "-"}:${typeof goalsB === "number" ? goalsB : "-"} ${add ? add : ""}`}</td> : <td sx={{ fontSize: "14px"}}>-:-</td>}
    </React.Fragment>
  )
}

export { Finale, Platz3 }
