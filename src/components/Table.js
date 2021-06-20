import React, { useEffect } from 'react'
import Flag from "react-world-flags"
import participants from './countries'
/* eslint-disable react-hooks/exhaustive-deps */

function TableSet({matches, groupA, groupB, groupC, groupD, groupE, groupF, setGroupA, setGroupB, setGroupC, setGroupD, setGroupE, setGroupF}){
  const { A, B, C, D, E, F } = matches 
  return (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderBottom: "1px solid black" }}>
    <Table matches={A} group={groupA} setGroup={setGroupA} notifier="A" />
    <Table matches={B} group={groupB} setGroup={setGroupB} notifier="B" />
    <Table matches={C} group={groupC} setGroup={setGroupC} notifier="C" />
    <Table matches={D} group={groupD} setGroup={setGroupD} notifier="D" />
    <Table matches={E} group={groupE} setGroup={setGroupE} notifier="E" />
    <Table matches={F} group={groupF} setGroup={setGroupF} notifier="F" />
  </div>
  )
}

function Table({matches, group, setGroup, notifier }) {
  const uefaCoefficient = ["ES", "NL", "DE", "IT", "GB-ENG", "RU", "HR", "PT", "SE", "DK", "FR", "CZ", "UA", "CH", "TR", "SK", "HU", "FI", "GB-SCT", "PL", "AT", "BE", "GB-WLS", "MK"]
  useEffect(() => {
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
    const victories = matches.reduce((acc, curr) => {
      const index = curr.teams.indexOf(team)
      const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1 
      if(index !== -1 && curr.goals[index] != null) {
        if(curr.goals[index]> curr.goals[indexOp]) {
          return acc + 1
        }
        return acc
      }
      return acc
    }, 0)
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
    const ownMatches = matches.filter(match => match.teams.includes(team) && match.goals[0] != null)
    return { team, points, goals, countergoals, goalDifference, fairPlay, ownMatches, matches, victories, group: notifier }
  })
  // sort first by overall points
  const groupFirstSortPoints = teamData.sort((a,b) => b.points - a.points)
  const pointsRaw = groupFirstSortPoints.map(team => team.points)
  const mySet = new Set(pointsRaw)
  const values = mySet.values()
  const points = Array.from(values)
  const groupEqualPoints = points.reduce((acc, curr) => {
      const arr = [...acc]
      const subarray = groupFirstSortPoints.filter(team => team.points === curr)
      arr.push(subarray)
      return arr
    }, [])
  const sortedEqualPoints = groupEqualPoints.map(set => {
    const length = set.length 
    if (length === 1) {
      return set
    }
    const teams = set.map(item => item.team)
    const sortedSet = set.sort((a, b) => {
      const { ownMatches: aMatches, team: aTeam } = a 
      const { ownMatches: bMatches, team: bTeam } = b
      const aUefa = uefaCoefficient.indexOf(aTeam)
      const bUefa = uefaCoefficient.indexOf(bTeam)
      const aPoints = aMatches.reduce((acc, curr) => {
        if(teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
          const index = curr.teams.indexOf(aTeam)
          const indexOp = index === 0 ? 0 : 1
          return curr.goals[index] > curr.goals[indexOp] ? acc + 3 : curr.goals[index] === curr.goals[indexOp] ? acc + 1 : acc
        }
        return acc
      }, 0)
      const aGoalDifference = aMatches.reduce((acc, curr) => {
        if(teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
          const index = curr.teams.indexOf(aTeam)
          const indexOp = index === 0 ? 0 : 1
          return (acc + (curr.goals[index] - curr.goals[indexOp]))
        }
        return acc
      }, 0)
      const aGoals = aMatches.reduce((acc, curr) => {
        if(teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
          const index = curr.teams.indexOf(aTeam)
          return acc + curr.goals[index]
        }
        return acc
      }, 0)
      const bPoints = bMatches.reduce((acc, curr) => {
        if(teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
          const index = curr.teams.indexOf(bTeam)
          const indexOp = index === 0 ? 0 : 1
          return curr.goals[index] > curr.goals[indexOp] ? acc + 3 : curr.goals[index] === curr.goals[indexOp] ? acc + 1 : acc
        }
        return acc
      }, 0)
      const bGoalDifference = bMatches.reduce((acc, curr) => {
        if(teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
          const index = curr.teams.indexOf(bTeam)
          const indexOp = index === 0 ? 0 : 1
          return (acc + (curr.goals[index] - curr.goals[indexOp]))
        }
        return acc
      }, 0)
      const bGoals = bMatches.reduce((acc, curr) => {
        if(teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
          const index = curr.teams.indexOf(bTeam)
          return acc + curr.goals[index]
        }
        return acc
      }, 0)
      if (teams.includes("AT") || teams.includes("NL") || teams.includes("UA")) {
      }
      if(aPoints > bPoints) {
        return -1
      } else if (bPoints > aPoints) {
        return +1
      } else if (aGoalDifference > bGoalDifference) {
        return -1
      } else if (bGoalDifference > aGoalDifference) {
        return +1
      } else if (aGoals > bGoals) {
        return -1
      } else if (bGoals > aGoals) {
        return +1
      } else if (a.goalDifference > b.goalDifference) {
        return -1
      } else if (b.goalDifference > a.goalDifference) {
        return +1
      } else if (a.goals > b.goals) {
        return -1
      } else if (b.goals > a.goals) {
        return +1
      } else if (a.victories > b.victories) {
        return -1
      } else if (b.victories > a.victories) {
        return +1
      } else if (a.fairPlay < b.fairPlay) {
        return -1
      } else if (b.fairPlay < a.fairPlay) {
        return +1
      } else {
        return (aUefa - bUefa)
      }
    })
    return sortedSet
  }).reduce((acc, curr) => acc.concat(curr),[])
  // const sortedTeamData = teamData.sort((a, b) => {
  //   if (a.points > b.points) {
  //     return -1
  //   } else if (b.points > a.points) {
  //     return +1
  //   } else if (a.goalDifference > b.goalDifference) {
  //     return -1
  //   } else if (b.goalDifference > a.goalDifference) {
  //     return +1
  //   } else if (a.goals > b.goals) {
  //     return -1
  //   } else if (b.goals > a.goals) {
  //     return +1
  //   } else if (a.fairPlay < b.fairPlay) {
  //     return -1
  //   } else if (b.fairPlay < a.fairPlay) {
  //     return +1
  //   }
  //   return 0
  // })
  setGroup(sortedEqualPoints)
}, [matches])
  const borderRight = ["A", "B", "D", "E"].includes(notifier) ? "1px solid black" : "none" 
  const borderBottom = ["A", "B", "C"].includes(notifier) ? "1px solid black" : "none"
  return (
    <table style={{ fontSize: "14px", borderBottom, borderRight }}>
      <thead>
        <tr style={{ margin: "0"}}>
          <td>Land</td>
          <td>Pkt.</td>
          <td>Diff.</td>
          <td>FP</td>
        </tr>
      </thead>
      <tbody>
      {group.map(dataset => {
        const { team, points, goalDifference, fairPlay } = dataset 
        return (
          <tr style={{margin: "0px"}}>
            <td><Flag code={team} title={participants(team)} style={{ height: "14px"}} fallback={<span>🏴‍☠️</span>} /></td>
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

function TableThird ({third}) {
  return (
    <table style={{ fontSize: "14px" }}>
      <thead>
        <td>Gr.</td>
        <td>Land</td>
        <td>Pkt.</td>
        <td>Siege</td>
        <td>Diff.</td>
        <td>FP</td>
      </thead>
      <tbody>
        {third && third.length > 0 && third.map((team, index) => {
          const line = index === 3 ? "1px dashed black" : "none"
          if(team) {
          return (
          <tr key={index}>
            <td style={{ borderBottom: line }}>{team.group}</td>
            <td style={{ borderBottom: line }}><Flag code={team.team} title={participants(team.team)} style={{ height: "14px"}} fallback={<span>🏴‍☠️</span>} /></td>
            <td style={{ borderBottom: line }}>{team.points}</td>
            <td style={{ borderBottom: line }}>{team.victories}</td>
            <td style={{ borderBottom: line }}>{team.goalDifference}</td>
            <td style={{ borderBottom: line }}>{team.fairPlay}</td>
          </tr>
        )} else {return null}})}
      </tbody>
    </table>
  )
}

export { TableSet, TableThird }