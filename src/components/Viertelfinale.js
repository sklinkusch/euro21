import React from 'react'
import Flag from 'react-world-flags'

function Viertelfinale({teams = [], matchvf = []}) {
  const [tVF0 = [], tVF1 = [], tVF2 = [], tVF3 = []] = teams
  const [mVF0 = {}, mVF1 = {}, mVF2 = {}, mVF3 = {}] = matchvf
  return (
    <div style={{ width: "100%", borderLeft: "1px solid black" }}>
      <div style={{ fontSize: "14px", textAlign: "center" }}>Viertelfinale</div>
      <table style={{ width: "100%" }}>
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

function ViertelfinaleSingle({teams, match}) {
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

export { Viertelfinale }
