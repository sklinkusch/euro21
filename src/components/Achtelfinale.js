/** @jsxImportSource theme-ui */
import React from 'react'
import FlagWrapper from "./FlagWrapper"
import { participantName as participants, localeName as locales } from './countries'

function AchtelfinaleNew({ teams, matchaf }) {
  const [tAF0 = [], tAF1 = [], tAF2 = [], tAF3 = [], tAF4 = [], tAF5 = [], tAF6 = [], tAF7 = []] = teams
  const [AF0 = {}, AF1 = {}, AF2 = {}, AF3 = {}, AF4 = {}, AF5 = {}, AF6 = {}, AF7 = {}] = matchaf
  return (
    <div sx={{ width: "100%", gridColumn: ["1 / span 2", "1 / span 2", "1 / span 4"] }}>
      <div sx={{ textAlign: "center", fontSize: 0 }}>
        {locales("Round16")}
      </div>
      <table sx={{ width: "100%" }}>
        <tbody>
          <tr>
            <AchtelfinaleSingle teamA={tAF0[0]} teamB={tAF0[1]} match={AF0} />
            <AchtelfinaleSingle teamA={tAF1[0]} teamB={tAF1[1]} match={AF1} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={tAF2[0]} teamB={tAF2[1]} match={AF2} />
            <AchtelfinaleSingle teamA={tAF3[0]} teamB={tAF3[1]} match={AF3} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={tAF4[0]} teamB={tAF4[1]} match={AF4} />
            <AchtelfinaleSingle teamA={tAF5[0]} teamB={tAF5[1]} match={AF5} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={tAF6[0]} teamB={tAF6[1]} match={AF6} />
            <AchtelfinaleSingle teamA={tAF7[0]} teamB={tAF7[1]} match={AF7} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function Achtelfinale({ first, second, third, assoc, matchaf = [] }) {
  const firstTeams = first.length === 6 ? first.map((team, index) => {
    return typeof team === "object" && team.hasOwnProperty("team") && team.team ? team.team : null
  }) : [null, null, null, null, null, null]
  const secondTeams = second.length === 6 ? second.map((team, index) => {
    return typeof team === "object" && team.hasOwnProperty("team") && team.team ? team.team : null
  }) : [null, null, null, null, null, null]
  const aTeamAF0 = secondTeams[0]
  const bTeamAF0 = secondTeams[1]
  const aTeamAF1 = firstTeams[0]
  const bTeamAF1 = secondTeams[2]
  const aTeamAF2 = firstTeams[2]
  const bTeamAF2 = third[assoc.indexOf(2)] ? third[assoc.indexOf(2)] : "?"
  const aTeamAF3 = firstTeams[1]
  const bTeamAF3 = third[assoc.indexOf(3)]
  const aTeamAF4 = secondTeams[3]
  const bTeamAF4 = secondTeams[4]
  const aTeamAF5 = firstTeams[5]
  const bTeamAF5 = third[assoc.indexOf(5)]
  const aTeamAF6 = firstTeams[3]
  const bTeamAF6 = secondTeams[5]
  const aTeamAF7 = firstTeams[4]
  const bTeamAF7 = third[assoc.indexOf(7)]
  const [AF0 = {}, AF1 = {}, AF2 = {}, AF3 = {}, AF4 = {}, AF5 = {}, AF6 = {}, AF7 = {}] = matchaf
  return (
    <div sx={{ width: "100%", gridColumn: ["1 / span 2", "2 / span 1", "3 / span 4"] }}>
      <div sx={{ textAlign: "center", fontSize: 0 }}>
        {locales("Round16")}
      </div>
      <table sx={{ width: "100%" }}>
        <tbody>
          <tr>
            <AchtelfinaleSingle teamA={aTeamAF0} teamB={bTeamAF0} match={AF0} />
            <AchtelfinaleSingle teamA={aTeamAF4} teamB={bTeamAF4} match={AF4} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={aTeamAF1} teamB={bTeamAF1} match={AF1} />
            <AchtelfinaleSingle teamA={aTeamAF5} teamB={bTeamAF5} match={AF5} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={aTeamAF2} teamB={bTeamAF2} match={AF2} />
            <AchtelfinaleSingle teamA={aTeamAF6} teamB={bTeamAF6} match={AF6} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={aTeamAF3} teamB={bTeamAF3} match={AF3} />
            <AchtelfinaleSingle teamA={aTeamAF7} teamB={bTeamAF7} match={AF7} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function AchtelfinaleWC({ first, second, matchaf = [] }) {
  const firstTeams = first.length === 8 ? first.map((team, index) => {
    return typeof team === "object" && team.hasOwnProperty("team") && team.team ? team.team : null
  }) : [null, null, null, null, null, null, null, null]
  const secondTeams = second.length === 8 ? second.map((team, index) => {
    return typeof team === "object" && team.hasOwnProperty("team") && team.team ? team.team : null
  }) : [null, null, null, null, null, null, null, null]
  const aTeamAF0 = firstTeams[0]
  const bTeamAF0 = secondTeams[1]
  const aTeamAF1 = firstTeams[2]
  const bTeamAF1 = secondTeams[3]
  const aTeamAF2 = firstTeams[4]
  const bTeamAF2 = secondTeams[5]
  const aTeamAF3 = firstTeams[6]
  const bTeamAF3 = secondTeams[7]
  const aTeamAF4 = firstTeams[1]
  const bTeamAF4 = secondTeams[0]
  const aTeamAF5 = firstTeams[3]
  const bTeamAF5 = secondTeams[2]
  const aTeamAF6 = firstTeams[5]
  const bTeamAF6 = secondTeams[4]
  const aTeamAF7 = firstTeams[7]
  const bTeamAF7 = secondTeams[6]
  const [AF0 = {}, AF1 = {}, AF2 = {}, AF3 = {}, AF4 = {}, AF5 = {}, AF6 = {}, AF7 = {}] = matchaf
  return (
    <div sx={{ width: "100%", gridColumn: ["1 / span 2", "1 / span 2", "1 / span 4"] }}>
      <div sx={{ textAlign: "center", fontSize: 0 }}>
        {locales("Round16")}
      </div>
      <table sx={{ width: "100%" }}>
        <tbody>
          <tr>
            <AchtelfinaleSingle teamA={aTeamAF0} teamB={bTeamAF0} match={AF0} />
            <AchtelfinaleSingle teamA={aTeamAF4} teamB={bTeamAF4} match={AF4} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={aTeamAF1} teamB={bTeamAF1} match={AF1} />
            <AchtelfinaleSingle teamA={aTeamAF5} teamB={bTeamAF5} match={AF5} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={aTeamAF2} teamB={bTeamAF2} match={AF2} />
            <AchtelfinaleSingle teamA={aTeamAF6} teamB={bTeamAF6} match={AF6} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={aTeamAF3} teamB={bTeamAF3} match={AF3} />
            <AchtelfinaleSingle teamA={aTeamAF7} teamB={bTeamAF7} match={AF7} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function AchtelfinaleWC02({ first, second, matchaf = [] }) {
  const firstTeams = first.length === 8 ? first.map((team, index) => {
    return typeof team === "object" && team.hasOwnProperty("team") && team.team ? team.team : null
  }) : [null, null, null, null, null, null, null, null]
  const secondTeams = second.length === 8 ? second.map((team, index) => {
    return typeof team === "object" && team.hasOwnProperty("team") && team.team ? team.team : null
  }) : [null, null, null, null, null, null, null, null]
  const aTeamAF0 = firstTeams[4]
  const bTeamAF0 = secondTeams[1]
  const aTeamAF1 = firstTeams[0]
  const bTeamAF1 = secondTeams[5]
  const aTeamAF2 = firstTeams[5]
  const bTeamAF2 = secondTeams[0]
  const aTeamAF3 = firstTeams[1]
  const bTeamAF3 = secondTeams[4]
  const aTeamAF4 = firstTeams[6]
  const bTeamAF4 = secondTeams[3]
  const aTeamAF5 = firstTeams[2]
  const bTeamAF5 = secondTeams[7]
  const aTeamAF6 = firstTeams[7]
  const bTeamAF6 = secondTeams[2]
  const aTeamAF7 = firstTeams[3]
  const bTeamAF7 = secondTeams[6]
  const [AF0 = {}, AF1 = {}, AF2 = {}, AF3 = {}, AF4 = {}, AF5 = {}, AF6 = {}, AF7 = {}] = matchaf
  return (
    <div sx={{ width: "100%", gridColumn: ["1 / span 2", "1 / span 2", "1 / span 4"] }}>
      <div sx={{ textAlign: "center", fontSize: 0 }}>
        {locales("Round16")}
      </div>
      <table sx={{ width: "100%" }}>
        <tbody>
          <tr>
            <AchtelfinaleSingle teamA={aTeamAF0} teamB={bTeamAF0} match={AF0} />
            <AchtelfinaleSingle teamA={aTeamAF4} teamB={bTeamAF4} match={AF4} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={aTeamAF1} teamB={bTeamAF1} match={AF1} />
            <AchtelfinaleSingle teamA={aTeamAF5} teamB={bTeamAF5} match={AF5} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={aTeamAF2} teamB={bTeamAF2} match={AF2} />
            <AchtelfinaleSingle teamA={aTeamAF6} teamB={bTeamAF6} match={AF6} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={aTeamAF3} teamB={bTeamAF3} match={AF3} />
            <AchtelfinaleSingle teamA={aTeamAF7} teamB={bTeamAF7} match={AF7} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export function AchtelfinaleWC23({ first, second, matchaf}) {
  const firstTeams = first.length === 8 ? first.map((team, index) => {
    return typeof team === "object" && team.hasOwnProperty("team") && team.team ? team.team : null
  }) : [null, null, null, null, null, null, null, null]
  const secondTeams = second.length === 8 ? second.map((team, index) => {
    return typeof team === "object" && team.hasOwnProperty("team") && team.team ? team.team : null
  }) : [null, null, null, null, null, null, null, null]
  const aTeamAF0 = firstTeams[0]
  const bTeamAF0 = secondTeams[2]
  const aTeamAF1 = firstTeams[2]
  const bTeamAF1 = secondTeams[0]
  const aTeamAF2 = firstTeams[4]
  const bTeamAF2 = secondTeams[6]
  const aTeamAF3 = firstTeams[6]
  const bTeamAF3 = secondTeams[4]
  const aTeamAF4 = firstTeams[3]
  const bTeamAF4 = secondTeams[1]
  const aTeamAF5 = firstTeams[1]
  const bTeamAF5 = secondTeams[3]
  const aTeamAF6 = firstTeams[7]
  const bTeamAF6 = secondTeams[5]
  const aTeamAF7 = firstTeams[5]
  const bTeamAF7 = secondTeams[7]
  const [AF0 = {}, AF1 = {}, AF2 = {}, AF3 = {}, AF4 = {}, AF5 = {}, AF6 = {}, AF7 = {}] = matchaf
  return (
    <div sx={{ width: "100%", gridColumn: ["1 / span 2", "1 / span 2", "1 / span 4"] }}>
      <div sx={{ textAlign: "center", fontSize: 0, width: "100%" }}>
        {locales("Round16")}
      </div>
      <table sx={{ width: "100%" }}>
        <tbody>
          <tr>
            <AchtelfinaleSingle teamA={aTeamAF0} teamB={bTeamAF0} match={AF0} />
            <AchtelfinaleSingle teamA={aTeamAF4} teamB={bTeamAF4} match={AF4} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={aTeamAF1} teamB={bTeamAF1} match={AF1} />
            <AchtelfinaleSingle teamA={aTeamAF5} teamB={bTeamAF5} match={AF5} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={aTeamAF2} teamB={bTeamAF2} match={AF2} />
            <AchtelfinaleSingle teamA={aTeamAF6} teamB={bTeamAF6} match={AF6} />
          </tr>
          <tr>
            <AchtelfinaleSingle teamA={aTeamAF3} teamB={bTeamAF3} match={AF3} />
            <AchtelfinaleSingle teamA={aTeamAF7} teamB={bTeamAF7} match={AF7} />
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
      <td><FlagWrapper team={tA} participant={participants(teamA)} /></td>
      <td><FlagWrapper team={tB} participant={participants(teamB)} /></td>
      {tA && tB && typeof goalsA === 'number' && typeof goalsB === 'number' ? (<td sx={{ fontSize: 0 }}>{`${typeof goalsA === "number" ? goalsA : "-"}:${typeof goalsB === "number" ? goalsB : "-"} ${add ? add : ""}`}</td>) : formattedDate ? (<td sx={{ fontSize: 0 }}>{formattedDate}</td>) : (<td sx={{ fontSize: 0 }}>-:-</td>)}
    </React.Fragment>
  )
}

export { Achtelfinale, AchtelfinaleWC, AchtelfinaleWC02, AchtelfinaleNew }