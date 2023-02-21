/** @jsxImportSource theme-ui */
import React from 'react'
// import Flag from 'react-world-flags'
import { localeName as locales } from './countries'
import { FlagSet } from "./helpers"
import { useLocation } from "react-router-dom"

function ViertelfinaleNew({ matches, maxColumns }) {
  const location = useLocation()
  const gridColumn = maxColumns ? `1 / span ${maxColumns}` : location.pathname.includes("worldcup") ? "1 / span 4" : "1 / span 6"
  return (
    <div sx={{ width: "100%", padding: "4px", my: "4px", backgroundColor: "greenyellow", borderRadius: "20px", gridColumn: ["1 / span 2", "1 / span 2", gridColumn ] }}>
      <h3 sx={{ textAlign: "center", py: 0, my: "2px" }}>
        {locales("Quarterfinal")}
      </h3>
      <table sx={{ width: "100%" }}>
        <tbody>
          {matches.length > 0 && matches.map((match, index) => (
            <tr key={index}>
              <ViertelfinaleSingleNew match={match} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Viertelfinale({ teams = [], matchvf = [], maxColumns }) {
  const [tVF0 = [], tVF1 = [], tVF2 = [], tVF3 = []] = teams
  const [mVF0 = {}, mVF1 = {}, mVF2 = {}, mVF3 = {}] = matchvf
  const location = useLocation()
  const gridColumn = maxColumns ? `1 / span ${maxColumns}` : location.pathname.includes("worldcup") ? "1 / span 4" : "1 / span 6"
  return (
    <div sx={{ width: "100%", padding: "4px", my: "4px", backgroundColor: "greenyellow", borderRadius: "20px", gridColumn: ["1 / span 2","1 / span 2",gridColumn] }}>
      <h3 sx={{ textAlign: "center", py: 0, my: "2px" }}>
        {locales("Quarterfinal")}
      </h3>
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

function ViertelfinaleSingleNew({ match }) {
  const { teams, goals, add, date } = match
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
  const formattedDate = date ? new Date(date).toLocaleString(navigator.language, { year: "2-digit", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", timeZone: tz }) : null
  return (
    <React.Fragment>
      <td sx={{ width: "25%" }}><FlagSet code={teams[0]} /></td>
      <td sx={{ width: "25%" }}><FlagSet code={teams[1]} /></td>
      {teams[0] && teams[1] && typeof goals[0] === 'number' && typeof goals[1] === 'number' ? (<td sx={{ fontSize: 0, width: "50%" }}>{`${typeof goals[0] === "number" ? goals[0] : "-"}:${typeof goals[1] === "number" ? goals[1] : "-"} ${add ? add : ""}`}</td>) : formattedDate ? (<td sx={{ fontSize: 0, width: "50%" }}>{formattedDate}</td>) : (<td sx={{ fontSize: 0, width: "50%" }}>-:-</td>)}
    </React.Fragment>
  )
}

function ViertelfinaleSingle({ teams, match }) {
  const { goals = [], add = "", date } = match
  const [goalsA = "-", goalsB = "-"] = goals
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

export { Viertelfinale, ViertelfinaleNew }
