/** @jsxImportSource theme-ui */
import React from 'react'
// import Flag from 'react-world-flags'
import { localeName as locales } from './countries'
import { FlagSet } from "./helpers"

function Viertelfinale({ teams = [], matchvf = [] }) {
  const [tVF0 = [], tVF1 = [], tVF2 = [], tVF3 = []] = teams
  const [mVF0 = {}, mVF1 = {}, mVF2 = {}, mVF3 = {}] = matchvf
  return (
    <div sx={{ width: "100%", padding: "4px", margin: "4px", backgroundColor: "greenyellow", borderRadius: "20px", gridColumn: ["1 / span 2","1 / span 1","1 / span 3"] }}>
      <div sx={{ fontSize: 0, textAlign: "center" }}>
        {locales("Quarterfinal")}
      </div>
      <table sx={{ width: "100%" }}>
        <tbody>
          <tr>
            <ViertelfinaleSingle teams={tVF0} match={mVF0} />
          </tr>
          <tr>
            <ViertelfinaleSingle teams={tVF1} match={mVF1} />
          </tr>
          <tr>
            <ViertelfinaleSingle teams={tVF2} match={mVF2} />
          </tr>
          <tr>
            <ViertelfinaleSingle teams={tVF3} match={mVF3} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function ViertelfinaleSingle({ teams, match }) {
  const { goals = [], add = "" } = match
  const [goalsA = "-", goalsB = "-"] = goals
  const [teamA = undefined, teamB = undefined] = teams
  return (
    <React.Fragment>
      <td><FlagSet code={teamA} /></td>
      <td><FlagSet code={teamB} /></td>
      {teamA && teamB ? <td sx={{ fontSize: 0 }}>{`${typeof goalsA === "number" ? goalsA : "-"}:${typeof goalsB === "number" ? goalsB : "-"} ${add ? add : ""}`}</td> : <td sx={{ fontSize: 0 }}>-:-</td>}
    </React.Fragment>
  )
}

export { Viertelfinale }
