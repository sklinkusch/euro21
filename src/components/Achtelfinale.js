/** @jsxImportSource theme-ui */
import React from 'react'
import Flag from 'react-world-flags'
import { participantName as participants, localeName as locales } from './countries'

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
    <div sx={{ width: "100%" }}>
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

function AchtelfinaleSingle({ teamA, teamB, match }) {
  const { goals = [], add = "" } = match
  const [goalsA = "-", goalsB = "-"] = goals
  return (
    <React.Fragment>
      <td><Flag code={teamA} title={participants(teamA)} sx={{ height: "14px" }} fallback={<span>🏴‍☠️</span>} /></td>
      <td><Flag code={teamB} title={participants(teamB)} sx={{ height: "14px" }} fallback={<span>🏴‍☠️</span>} /></td>
      {teamA && teamB ? <td sx={{ fontSize: 0 }}>{`${typeof goalsA === "number" ? goalsA : "-"}:${typeof goalsB === "number" ? goalsB : "-"} ${add ? add : ""}`}</td> : <td sx={{ fontSize: 0 }}>"-:-"</td>}
    </React.Fragment>
  )
}

export { Achtelfinale }