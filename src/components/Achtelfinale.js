import React from 'react'
import Flag from 'react-world-flags'

function Achtelfinale({first, second, third, assoc}) {
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
  return (
    <div>
      <table>
        <tbody>
        <AchtelfinaleSingle teamA={aTeamAF0} teamB={bTeamAF0} />
        <AchtelfinaleSingle teamA={aTeamAF1} teamB={bTeamAF1} />
        <AchtelfinaleSingle teamA={aTeamAF2} teamB={bTeamAF2} />
        <AchtelfinaleSingle teamA={aTeamAF3} teamB={bTeamAF3} />
        <AchtelfinaleSingle teamA={aTeamAF4} teamB={bTeamAF4} />
        <AchtelfinaleSingle teamA={aTeamAF5} teamB={bTeamAF5} />
        <AchtelfinaleSingle teamA={aTeamAF6} teamB={bTeamAF6} />
        <AchtelfinaleSingle teamA={aTeamAF7} teamB={bTeamAF7} />
        </tbody>
      </table>
    </div>
  )
}

function AchtelfinaleSingle({teamA, teamB}) {
  return (
    <tr>
      {/* <td>{teamA ? teamA : null}</td> */}
      {teamA ? (<td><Flag code={teamA} style={{ height: "14px" }} /></td>) : (<td>?</td>)}
      {teamB ? (<td><Flag code={teamB} style={{ height: "14px" }}/></td>) : (<td>?</td>)}
      {/* <td>{teamB ? teamB : null}</td> */}
    </tr>
  )
}

export { Achtelfinale }