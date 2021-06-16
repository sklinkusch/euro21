import React from 'react'
import Flag from "react-world-flags"

function TableSet({matches}){
  const { A: groupA, B: groupB, C: groupC, D: groupD, E: groupE, F: groupF } = matches 
  return (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)"}}>
    <Table matches={groupA} />
    <Table matches={groupB} />
    <Table matches={groupC} />
    <Table matches={groupD} />
    <Table matches={groupE} />
    <Table matches={groupF} />
  </div>
  )
}

function Table({matches}) {
  const teams = [ ...matches[0].teams, ...matches[1].teams ]
  const teamData = teams.map(team => {
    const points = matches.reduce((acc, curr) => {
      const index = curr.teams.indexOf(team)
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1
      if (index !== -1 && curr.goals[index] != null) {
        if (curr.goals[index] > curr.goals[indexOp]) {
          return acc + 3
        } else if (curr.goals[index] === curr.goals[indexOp]) {
          return acc + 1
        }
      }
      return acc
    },0)
    const goals = matches.reduce((acc, curr) => {
      const index = curr.teams.indexOf(team)
      if(index !== -1 && curr.goals[index] != null) {
        return acc + curr.goals[index]
      }
      return acc
    }, 0) 
    const countergoals = matches.reduce((acc, curr) => {
      const index = curr.teams.indexOf(team)
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1
      if(index !== -1 && curr.goals[indexOp] != null) {
          return acc + curr.goals[indexOp]
      }
      return acc
    }, 0)
    const goalDifference = goals - countergoals 
    const fairPlay = matches.reduce((acc, curr) => {
      const index = curr.teams.indexOf(team)
      if(index !== -1 && curr.fairPlay[index] != null) {
        return acc + curr.fairPlay[index]
      }
      return acc
    }, 0)
    const ownMatches = matches.filter(match => match.teams.includes(team))
    return { team, points, goals, countergoals, goalDifference, fairPlay, ownMatches, matches }
  })
  const sortedTeamData = teamData.sort((a, b) => {
    if (a.points > b.points) {
      return -1
    } else if (b.points > a.points) {
      return +1
    } else if (a.goalDifference > b.goalDifference) {
      return -1
    } else if (b.goalDifference > a.goalDifference) {
      return +1
    } else if (a.goals > b.goals) {
      return -1
    } else if (b.goals > a.goals) {
      return +1
    } else if (a.fairPlay < b.fairPlay) {
      return -1
    } else if (b.fairPlay < a.fairPlay) {
      return +1
    }
    return 0
  })
  return (
    <table style={{ fontSize: "14px"}}>
      <thead>
        <tr style={{ margin: "0"}}>
          <td>Land</td>
          <td>Pkt.</td>
          <td>Diff.</td>
          <td>FP</td>
        </tr>
      </thead>
      <tbody>
      {sortedTeamData.map(dataset => {
        const { team, points, goalDifference, fairPlay } = dataset 
        return (
          <tr style={{margin: "0px"}}>
            <td><Flag code={team} style={{ height: "14px"}} /></td>
            <td>{points}</td>
            <td>{goalDifference}</td>
            <td>{fairPlay}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

export { TableSet }