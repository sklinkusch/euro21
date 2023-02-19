/** @jsxImportSource theme-ui */
import React from 'react'
import { localeName as locales } from './countries'
import { FlagSet } from './helpers'

function Finale({teams = [], matchf = []}) {
  return (
    <div sx={{ width: "100%", gridColumn: ["1 / span 2","1 / span 2", "1 / span 6"], my: "8px", padding: "8px" }}>
      <h3 sx={{ textAlign: "center", textTransform: "uppercase", py: 0, my: "2px" }}>
        {locales("Final")}
      </h3>
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
      <h3 sx={{ textAlign: "center", textTransform: "uppercase", my: "2px", py: 0 }}>
        {locales("Place3")}
      </h3>
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
  const {goals = [], add = "", date } = match
  const [ goalsA = "-", goalsB = "-" ] = goals
  const [teamA = undefined, teamB = undefined] = teams
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
  const formattedDate = date ? new Date(date).toLocaleString(navigator.language, { year: "2-digit", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", timeZone: tz }) : null
  return (
    <React.Fragment>
      <td sx={{ width: "25%" }}><FlagSet code={teamA} /></td>
      <td sx={{ width: "25%" }}><FlagSet code={teamB} /></td>
      {teamA && teamB && typeof goalsA === 'number' && typeof goalsB === 'number' ? (<td sx={{ fontSize: 0, width: "50%" }}>{`${typeof goalsA === "number" ? goalsA : "-"}:${typeof goalsB === "number" ? goalsB : "-"} ${add ? add : ""}`}</td>) : formattedDate ? (<td sx={{ fontSize: 0, width: "50%" }}>{formattedDate}</td>) : (<td sx={{ fontSize: 0, width: "50%" }}>-:-</td>)}
    </React.Fragment>
  )
}

export { Finale, Platz3 }
