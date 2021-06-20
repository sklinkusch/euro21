import React from 'react'
import Flag from 'react-world-flags'
import { participantName as participants} from './countries'

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
      <td><Flag code={teamA} title={participants(teamA)} style={{ height: "14px" }} fallback={<span>🏴‍☠️</span>} /></td>
      <td><Flag code={teamB} title={participants(teamB)} style={{ height: "14px" }} fallback={<span>🏴‍☠️</span>}/></td>
      {teamA && teamB ? <td style={{ fontSize: "14px"}}>{`${typeof goalsA === "number" ? goalsA : "-"}:${typeof goalsB === "number" ? goalsB : "-"} ${add ? add : ""}`}</td> : <td style={{ fontSize: "14px"}}>-:-</td>}
    </React.Fragment>
  )
}

export { Viertelfinale }
