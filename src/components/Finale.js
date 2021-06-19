import React from 'react'
import Flag from 'react-world-flags'

function Finale({teams = [], matchf = []}) {
  return (
    <div style={{ width: "100%", borderRight: "1px solid black" }}>
      <div style={{ fontSize: "14px", textAlign: "center", textTransform: "uppercase" }}>Finale</div>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <FinaleSingle teams={teams} match={matchf} />
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
      {teamA ? (<td><Flag code={teamA} style={{ height: "14px" }} /></td>) : (<td style={{ fontSize: "14px"}}>🏴‍☠️</td>)}
      {teamB ? (<td><Flag code={teamB} style={{ height: "14px" }}/></td>) : (<td style={{ fontSize: "14px"}}>🏴‍☠️</td>)}
      {teamA && teamB ? <td style={{ fontSize: "14px"}}>{`${goalsA ? goalsA : "-"}:${goalsB ? goalsB : "-"} ${add ? add : ""}`}</td> : <td style={{ fontSize: "14px"}}>-:-</td>}
    </React.Fragment>
  )
}

export { Finale }
