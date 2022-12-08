/** @jsxImportSource theme-ui */
import React from 'react'
import { localeName as locales } from './countries'
import { FlagSet } from './helpers'
import { useLocation } from "react-router-dom"

function Halbfinale({teams = [], matchhf = [], full = false}) {
  const [tHF0 = [], tHF1 = []] = teams
  const [mHF0 = {}, mHF1 = {}] = matchhf
  const location = useLocation()
  let gridColumn
  if (full) {
    gridColumn = "1 / 7"
  } else if (location.pathname.includes("worldcup")) {
    gridColumn = ["1 / 3", "1 / 3", "1 / 5"]
  } else {
    gridColumn = ["1 / 3", "2 / 3", "1 / 7"]
  }
  return (
    <div sx={{ width: "100%", gridColumn: gridColumn, backgroundColor: "#E6D2B5", my: "4px", padding: "4px", borderRadius: "20px" }}>
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
  const {goals = [], add = "", date } = match
  const [ goalsA = "-", goalsB = "-" ] = goals
  const [teamA = undefined, teamB = undefined] = teams
  const formattedDate = date ? new Date(date).toLocaleDateString(navigator.language, { year: "2-digit", month: "2-digit", day: "2-digit" }) : null
  return (
    <React.Fragment>
      <td><FlagSet code={teamA} /></td>
      <td><FlagSet code={teamB} /></td>
      {teamA && teamB && typeof goalsA === 'number' && typeof goalsB === 'number' ? (<td sx={{ fontSize: 0 }}>{`${typeof goalsA === "number" ? goalsA : "-"}:${typeof goalsB === "number" ? goalsB : "-"} ${add ? add : ""}`}</td>) : formattedDate ? (<td sx={{ fontSize: 0 }}>{formattedDate}</td>) : (<td sx={{ fontSize: 0 }}>-:-</td>)}
    </React.Fragment>
  )
}

export { Halbfinale }
