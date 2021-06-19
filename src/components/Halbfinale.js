import React from 'react'
import Flag from 'react-world-flags'

function Halbfinale({teams = [], matchhf = []}) {
  const [tHF0 = [], tHF1 = []] = teams
  const [mHF0 = {}, mHF1 = {}] = matchhf
  return (
    <div style={{ width: "100%", borderRight: "1px solid black" }}>
      <div style={{ fontSize: "14px", textAlign: "center" }}>Halbfinale</div>
      <table style={{ width: "100%" }}>
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

export { Halbfinale }
