/** @jsxImportSource theme-ui */
import React from 'react'
import FlagWrapper from "./FlagWrapper"
import { participantName as participants, localeName as locales } from './countries'

function Achtelfinale({ teams, matchaf, maxColumn }) {
  const col = maxColumn ? `1 / span ${maxColumn}` : "1 / span 4"
  const [tAF0 = [], tAF1 = [], tAF2 = [], tAF3 = [], tAF4 = [], tAF5 = [], tAF6 = [], tAF7 = []] = teams
  const [AF0 = {}, AF1 = {}, AF2 = {}, AF3 = {}, AF4 = {}, AF5 = {}, AF6 = {}, AF7 = {}] = matchaf
  return (
    <div sx={{ width: "100%", gridColumn: ["1 / span 2", "1 / span 2", col] }}>
      <div sx={{ textAlign: "center", fontSize: 0 }}>
        {locales("Round16")}
      </div>
      <table sx={{ width: "100%" }}>
        <tbody>
          <tr>
            <AchtelfinaleSingle teamA={tAF0[0]} teamB={tAF0[1]} match={AF0} />
            <AchtelfinaleSingle teamA={tAF4[0]} teamB={tAF4[1]} match={AF4} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={tAF1[0]} teamB={tAF1[1]} match={AF1} />
            <AchtelfinaleSingle teamA={tAF5[0]} teamB={tAF5[1]} match={AF5} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={tAF2[0]} teamB={tAF2[1]} match={AF2} />
            <AchtelfinaleSingle teamA={tAF6[0]} teamB={tAF6[1]} match={AF6} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={tAF3[0]} teamB={tAF3[1]} match={AF3} />
            <AchtelfinaleSingle teamA={tAF7[0]} teamB={tAF7[1]} match={AF7} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function AchtelfinaleSingle({ teamA, teamB, match }) {
  const { goals = [], add = "", date } = match
  const [goalsA = "-", goalsB = "-"] = goals
  const formattedDate = date ? new Date(date).toLocaleDateString(navigator.language, { year: "2-digit", month: "2-digit", day: "2-digit" }) : null
  const tA = typeof teamA === 'object' ? teamA.team : teamA
  const tB = typeof teamB === 'object' ? teamB.team : teamB
  return (
    <React.Fragment>
      <td sx={{ width: "12.5%" }}><FlagWrapper team={tA} participant={participants(teamA)} /></td>
      <td sx={{ width: "12.5%" }}><FlagWrapper team={tB} participant={participants(teamB)} /></td>
      {tA && tB && typeof goalsA === 'number' && typeof goalsB === 'number' ? (<td sx={{ fontSize: 0, width: "25%" }}>{`${typeof goalsA === "number" ? goalsA : "-"}:${typeof goalsB === "number" ? goalsB : "-"} ${add ? add : ""}`}</td>) : formattedDate ? (<td sx={{ fontSize: 0, width: "25%" }}>{formattedDate}</td>) : (<td sx={{ fontSize: 0, width: "25%" }}>-:-</td>)}
    </React.Fragment>
  )
}

export { Achtelfinale }