/** @jsxImportSource theme-ui */
import React, { useEffect } from 'react'
import FlagWrapper from "./FlagWrapper"
import { participantName as participants, localeName as locales } from './countries'
import { getColor, getGridValue } from './helpers'
/* eslint-disable react-hooks/exhaustive-deps */


function sortFunction(teamData, mode) {
  const points = ((Array.from(new Set(teamData.map(team => team.points)))).sort((a,b) => b - a))
  const pointsNumber = points.reduce((acc, curr) => {
    const obj = { ...acc }
    obj[curr] = teamData.reduce((iacc, icurr) => {
      let val = iacc
      if (icurr.points === curr)
        val += 1
      return val
    }, 0)
    return obj
  },{})
  const tDataWithPointRanks = teamData.map((team, index, array) => {
    let rank = array.length
    for (let a = 0; a <= team.points; a++) {
      rank -= pointsNumber[a] || 0
    }
    rank += 1
    return { ...team, rank }
  })
  const teamsPoints = tDataWithPointRanks.reduce((acc, curr) => {
    const arr = [ ...acc ]
    const ind = points.indexOf(curr.points)
    if (ind > -1 && ind < arr.length) 
      arr[ind].push(curr)
    return arr
  }, new Array(points.length).fill(1).map(i => []))
  if (mode === "wc") {
    let teamsAfterOverallGoalDifference = []
    teamsPoints.forEach(pointGroup => {
      if (pointGroup.length === 1) {
        teamsAfterOverallGoalDifference.push(pointGroup)
      } else {
        const sortedPointGroup = pointGroup.sort((a,b) => b.goalDifference - a.goalDifference)
        const goalDiffArray = Array.from(new Set(sortedPointGroup.map(team => team.goalDifference)))
        goalDiffArray.forEach(diff => {
          teamsAfterOverallGoalDifference.push(sortedPointGroup.filter(team => team.goalDifference === diff))
        })
      }
    })
    let teamsAfterOverallGoals = []
    teamsAfterOverallGoalDifference.forEach(diffgroup => {
      if(diffgroup.length === 1) {
        teamsAfterOverallGoals.push(diffgroup)
      } else {
        const sortedDiffgroup = diffgroup.sort((a,b) => b.goals - a.goals)
        const goalArray = Array.from(new Set(sortedDiffgroup.map(team => team.goals)))
        goalArray.forEach(goal => {
          teamsAfterOverallGoals.push(sortedDiffgroup.filter(team => team.goals === goal))
        })
      }
    })
    let teamsAfterDirectComparisonA = teamsAfterOverallGoals.slice()
    let teamsAfterDirectComparisonB = []
      teamsAfterDirectComparisonA.forEach(singleTeam => {
        if (singleTeam.length === 1) {
          teamsAfterDirectComparisonB.push(...singleTeam)
        } else {
          const sortedTeams = singleTeam.sort((a, b) => {
            const { ownMatches: aMatches, team: aTeam } = a
            const { ownMatches: bMatches, team: bTeam } = b
            const singleTeamKeys = singleTeam.map(t => t.team)
            const aPoints = aMatches.reduce((acc, curr) => {
              const pts = acc
              if (singleTeamKeys.includes(curr.teams[0]) && singleTeamKeys.includes(curr.teams[1])) {
                const index = curr.teams.indexOf(aTeam)
                const indexOp = index === 0 ? 1 : 0
                return curr.goals[index] > curr.goals[indexOp] ? pts + 3 : curr.goals[index] === curr.goals[indexOp] ? pts + 1 : pts
              }
              return pts
            }, 0)
            const aGoalDifference = aMatches.reduce((acc, curr) => {
              if (singleTeamKeys.includes(curr.teams[0]) && singleTeamKeys.includes(curr.teams[1])) {
                const index = curr.teams.indexOf(aTeam)
                const indexOp = index === 0 ? 0 : 1
                return (acc + (curr.goals[index] - curr.goals[indexOp]))
              }
              return acc
            }, 0)
            const aGoals = aMatches.reduce((acc, curr) => {
              if (singleTeamKeys.includes(curr.teams[0]) && singleTeamKeys.includes(curr.teams[1])) {
                const index = curr.teams.indexOf(aTeam)
                return acc + curr.goals[index]
              }
              return acc
            }, 0)
            const bPoints = bMatches.reduce((acc, curr) => {
              const pts = acc
              if (singleTeamKeys.includes(curr.teams[0]) && singleTeamKeys.includes(curr.teams[1])) {
                const index = curr.teams.indexOf(bTeam)
                const indexOp = index === 0 ? 1 : 0
                return curr.goals[index] > curr.goals[indexOp] ? pts + 3 : curr.goals[index] === curr.goals[indexOp] ? pts + 1 : pts
              }
              return pts
            }, 0)
            const bGoalDifference = bMatches.reduce((acc, curr) => {
              if (singleTeamKeys.includes(curr.teams[0]) && singleTeamKeys.includes(curr.teams[1])) {
                const index = curr.teams.indexOf(bTeam)
                const indexOp = index === 0 ? 0 : 1
                return (acc + (curr.goals[index] - curr.goals[indexOp]))
              }
              return acc
            }, 0)
            const bGoals = bMatches.reduce((acc, curr) => {
              if (singleTeamKeys.includes(curr.teams[0]) && singleTeamKeys.includes(curr.teams[1])) {
                const index = curr.teams.indexOf(bTeam)
                return acc + curr.goals[index]
              }
              return acc
            }, 0)
            if (aPoints > bPoints) return -1
            if (bPoints > aPoints) return +1
            if (aGoalDifference > bGoalDifference) return -1
            if (bGoalDifference > aGoalDifference) return +1
            if (aGoals > bGoals) return -1
            if (bGoals > aGoals) return +1
            return 0
          })
          teamsAfterDirectComparisonB.push(...sortedTeams)
        }
      })
      return teamsAfterDirectComparisonB
  } else {
    let teamsAfterDirectComparisonA = teamsPoints.slice()
    let teamsAfterDirectComparisonB = []
      teamsAfterDirectComparisonA.forEach(singleTeam => {
        if (singleTeam.length === 1) {
          teamsAfterDirectComparisonB.push(singleTeam)
        } else {
          const sortedTeams = singleTeam.sort((a, b) => {
            const { ownMatches: aMatches, team: aTeam } = a
            const { ownMatches: bMatches, team: bTeam } = b
            const singleTeamKeys = singleTeam.map(t => t.team)
            const aPoints = aMatches.reduce((acc, curr) => {
              if (singleTeamKeys.includes(curr.teams[0]) && singleTeamKeys.includes(curr.teams[1])) {
                const index = curr.teams.indexOf(aTeam)
                const indexOp = index === 0 ? 0 : 1
                return curr.goals[index] > curr.goals[indexOp] ? acc + 3 : curr.goals[index] === curr.goals[indexOp] ? acc + 1 : acc
              }
              return acc
            }, 0)
            const aGoalDifference = aMatches.reduce((acc, curr) => {
              if (singleTeamKeys.includes(curr.teams[0]) && singleTeamKeys.includes(curr.teams[1])) {
                const index = curr.teams.indexOf(aTeam)
                const indexOp = index === 0 ? 0 : 1
                return (acc + (curr.goals[index] - curr.goals[indexOp]))
              }
              return acc
            }, 0)
            const aGoals = aMatches.reduce((acc, curr) => {
              if (singleTeamKeys.includes(curr.teams[0]) && singleTeamKeys.includes(curr.teams[1])) {
                const index = curr.teams.indexOf(aTeam)
                return acc + curr.goals[index]
              }
              return acc
            }, 0)
            const bPoints = bMatches.reduce((acc, curr) => {
              if (singleTeamKeys.includes(curr.teams[0]) && singleTeamKeys.includes(curr.teams[1])) {
                const index = curr.teams.indexOf(bTeam)
                const indexOp = index === 0 ? 0 : 1
                return curr.goals[index] > curr.goals[indexOp] ? acc + 3 : curr.goals[index] === curr.goals[indexOp] ? acc + 1 : acc
              }
              return acc
            }, 0)
            const bGoalDifference = bMatches.reduce((acc, curr) => {
              if (singleTeamKeys.includes(curr.teams[0]) && singleTeamKeys.includes(curr.teams[1])) {
                const index = curr.teams.indexOf(bTeam)
                const indexOp = index === 0 ? 0 : 1
                return (acc + (curr.goals[index] - curr.goals[indexOp]))
              }
              return acc
            }, 0)
            const bGoals = bMatches.reduce((acc, curr) => {
              if (singleTeam.includes(curr.teams[0]) && singleTeam.includes(curr.teams[1])) {
                const index = curr.teams.indexOf(bTeam)
                return acc + curr.goals[index]
              }
              return acc
            }, 0)
            if (aPoints > bPoints) return -1
            if (bPoints > aPoints) return +1
            if (aGoalDifference > bGoalDifference) return -1
            if (bGoalDifference > aGoalDifference) return +1
            if (aGoals > bGoals) return -1
            if (bGoals > aGoals) return +1
            return 0
          })
          teamsAfterDirectComparisonB.push(...sortedTeams)
        }
      })
    return teamsAfterDirectComparisonB
  }
}

export function GeneralTableSet({ matches }) {
  const keys = Object.keys(matches)
  const sortedKeys = keys.sort()
  const sortedValues = sortedKeys.map(key => matches[key])
  const gridValue = getGridValue(keys.length)
  if (sortedValues.length > 0) {
    return (
      <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", `repeat(${gridValue},1fr)`]}}>
        {sortedValues.map((group, index) => (<NewTable table={group.table} number={index} key={index} notifier={sortedKeys[index]} />))}
      </div>
    )
  }
  return null
}

function NewTable ({ table, number, notifier }) {
  const bgcolor = getColor(number)
  if (table.length > 0) {
    return (
    <div sx={{ fontSize: 0, backgroundColor: bgcolor, px: "4px", py: "4px", my: "4px", mx: "4px", borderRadius: "20px", position: "relative" }}>
      <div sx={{ fontSize: "6vw", color: "#ffffff70", position: "absolute", width: "100%", height: "100%", fontWeight: "bold", zIndex: 2 }}>{notifier}</div>
      <table sx={{ width: "100%", position: "relative", zIndex: 5 }}>
        <thead>
          <tr sx={{ margin: "0" }}>
            <td>{locales("Team")}</td>
            <td>{locales("Pts")}</td>
            <td>{locales("Difference")}</td>
            <td>{locales("Goals")}</td>
            <td>{locales("FairPlay")}</td>
          </tr>
        </thead>
        <tbody>
          {table.map((dataset, index) => {
            const { team, points, goals, countergoals, goalDifference, fairPlay } = dataset
            return (
              <tr key={index} sx={{ margin: "0px" }}>
                <td><FlagWrapper team={team} participant={participants(team)} /></td>
                <td>{points}</td>
                <td>{goalDifference}</td>
                <td>{goals}:{countergoals}</td>
                <td>{fairPlay}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    )
  }
  return null
}


export function TableSet({ matches, groupA, groupB, groupC, groupD, groupE, groupF, setGroupA, setGroupB, setGroupC, setGroupD, setGroupE, setGroupF, coefficient = [], modus = "euro" }) {
  const { A, B, C, D, E, F } = matches
  return (
    <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"], gridTemplateRows: ["repeat(3,1fr)", "repeat(3,1fr)", "repeat(2,1fr)"] }}>
      <Table matches={A} group={groupA} setGroup={setGroupA} notifier="A" number={0} coefficient={coefficient} modus={modus} />
      <Table matches={B} group={groupB} setGroup={setGroupB} notifier="B" number={1} coefficient={coefficient} modus={modus} />
      <Table matches={C} group={groupC} setGroup={setGroupC} notifier="C" number={2} coefficient={coefficient} modus={modus} />
      <Table matches={D} group={groupD} setGroup={setGroupD} notifier="D" number={3} coefficient={coefficient} modus={modus} />
      <Table matches={E} group={groupE} setGroup={setGroupE} notifier="E" number={4} coefficient={coefficient} modus={modus} />
      <Table matches={F} group={groupF} setGroup={setGroupF} notifier="F" number={5} coefficient={coefficient} modus={modus} />
    </div>
  )
}

function Table({ matches, group, setGroup, notifier, number, coefficient = [], modus = "euro" }) {
  useEffect(() => {
    const teams = [...matches[0].teams, ...matches[1].teams]
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
      }, 0)
      const victories = matches.reduce((acc, curr) => {
        const index = curr.teams.indexOf(team)
        const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1
        if (index !== -1 && curr.goals[index] != null) {
          if (curr.goals[index] > curr.goals[indexOp]) {
            return acc + 1
          }
          return acc
        }
        return acc
      }, 0)
      const goals = matches.reduce((acc, curr) => {
        const index = curr.teams.indexOf(team)
        if (index !== -1 && curr.goals[index] != null) {
          return acc + curr.goals[index]
        }
        return acc
      }, 0)
      const countergoals = matches.reduce((acc, curr) => {
        const index = curr.teams.indexOf(team)
        const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1
        if (index !== -1 && curr.goals[indexOp] != null) {
          return acc + curr.goals[indexOp]
        }
        return acc
      }, 0)
      const goalDifference = goals - countergoals
      const fairPlay = matches.reduce((acc, curr) => {
        const index = curr.teams.indexOf(team)
        if (index !== -1 && curr.fairPlay[index] != null) {
          return acc + curr.fairPlay[index]
        }
        return acc
      }, 0)
      const ownMatches = matches.filter(match => match.teams.includes(team) && match.goals[0] != null)
      return { team, points, goals, countergoals, goalDifference, fairPlay, ownMatches, matches, victories, group: notifier }
    })
    // sort first by overall points
    const sortedTable = sortFunction(teamData, modus)
    // const groupFirstSortPoints = teamData.sort((a, b) => b.points - a.points)
    // const pointsRaw = groupFirstSortPoints.map(team => team.points)
    // const mySet = new Set(pointsRaw)
    // const values = mySet.values()
    // const points = Array.from(values)
    // const groupEqualPoints = points.reduce((acc, curr) => {
    //   const arr = [...acc]
    //   const subarray = groupFirstSortPoints.filter(team => team.points === curr)
    //   arr.push(subarray)
    //   return arr
    // }, [])
    // const sortedEqualPoints = groupEqualPoints.map(set => {
    //   const length = set.length
    //   if (length === 1) {
    //     return set
    //   }
    //   const teams = set.map(item => item.team)
    //   const sortedSet = set.sort((a, b) => {
    //     const { ownMatches: aMatches, team: aTeam } = a
    //     const { ownMatches: bMatches, team: bTeam } = b
    //     const aUefa = coefficient.indexOf(aTeam)
    //     const bUefa = coefficient.indexOf(bTeam)
    //     const aPoints = aMatches.reduce((acc, curr) => {
    //       if (teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
    //         const index = curr.teams.indexOf(aTeam)
    //         const indexOp = index === 0 ? 0 : 1
    //         return curr.goals[index] > curr.goals[indexOp] ? acc + 3 : curr.goals[index] === curr.goals[indexOp] ? acc + 1 : acc
    //       }
    //       return acc
    //     }, 0)
    //     const aGoalDifference = aMatches.reduce((acc, curr) => {
    //       if (teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
    //         const index = curr.teams.indexOf(aTeam)
    //         const indexOp = index === 0 ? 0 : 1
    //         return (acc + (curr.goals[index] - curr.goals[indexOp]))
    //       }
    //       return acc
    //     }, 0)
    //     const aGoals = aMatches.reduce((acc, curr) => {
    //       if (teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
    //         const index = curr.teams.indexOf(aTeam)
    //         return acc + curr.goals[index]
    //       }
    //       return acc
    //     }, 0)
    //     const bPoints = bMatches.reduce((acc, curr) => {
    //       if (teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
    //         const index = curr.teams.indexOf(bTeam)
    //         const indexOp = index === 0 ? 0 : 1
    //         return curr.goals[index] > curr.goals[indexOp] ? acc + 3 : curr.goals[index] === curr.goals[indexOp] ? acc + 1 : acc
    //       }
    //       return acc
    //     }, 0)
    //     const bGoalDifference = bMatches.reduce((acc, curr) => {
    //       if (teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
    //         const index = curr.teams.indexOf(bTeam)
    //         const indexOp = index === 0 ? 0 : 1
    //         return (acc + (curr.goals[index] - curr.goals[indexOp]))
    //       }
    //       return acc
    //     }, 0)
    //     const bGoals = bMatches.reduce((acc, curr) => {
    //       if (teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
    //         const index = curr.teams.indexOf(bTeam)
    //         return acc + curr.goals[index]
    //       }
    //       return acc
    //     }, 0)
    //     if (modus === "wc") {
    //       if (a.goalDifference > b.goalDifference) {
    //         return -1
    //       } else if (b.goalDifference > a.goalDifference) {
    //         return +1
    //       } else if (a.goals > b.goals) {
    //         return -1
    //       } else if (b.goals > a.goals) {
    //         return +1
    //       } else if (aPoints > bPoints) {
    //         return -1
    //       } else if (bPoints > aPoints) {
    //         return +1
    //       } else if (aGoalDifference > bGoalDifference) {
    //         return -1
    //       } else if (bGoalDifference > aGoalDifference) {
    //         return +1
    //       } else if (aGoals > bGoals) {
    //         return -1
    //       } else if (bGoals > aGoals) {
    //         return +1
    //       } else if (a.victories > b.victories) {
    //         return -1
    //       } else if (b.victories > a.victories) {
    //         return +1
    //       } else if (a.fairPlay < b.fairPlay) {
    //         return -1
    //       } else if (b.fairPlay < a.fairPlay) {
    //         return +1
    //       } else {
    //         return (aUefa - bUefa)
    //       }
    //     }
    //     if (aPoints > bPoints) {
    //       return -1
    //     } else if (bPoints > aPoints) {
    //       return +1
    //     } else if (aGoalDifference > bGoalDifference) {
    //       return -1
    //     } else if (bGoalDifference > aGoalDifference) {
    //       return +1
    //     } else if (aGoals > bGoals) {
    //       return -1
    //     } else if (bGoals > aGoals) {
    //       return +1
    //     } else if (a.goalDifference > b.goalDifference) {
    //       return -1
    //     } else if (b.goalDifference > a.goalDifference) {
    //       return +1
    //     } else if (a.goals > b.goals) {
    //       return -1
    //     } else if (b.goals > a.goals) {
    //       return +1
    //     } else if (a.victories > b.victories) {
    //       return -1
    //     } else if (b.victories > a.victories) {
    //       return +1
    //     } else if (a.fairPlay < b.fairPlay) {
    //       return -1
    //     } else if (b.fairPlay < a.fairPlay) {
    //       return +1
    //     } else {
    //       return (aUefa - bUefa)
    //     }
    //   })
    //   return sortedSet
    // }).reduce((acc, curr) => acc.concat(curr), [])
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
    // setGroup(sortedEqualPoints)
    setGroup(sortedTable)
  }, [matches])
  const bgcolor = getColor(number)
  return (
    <div sx={{ fontSize: 0, backgroundColor: bgcolor, px: "4px", py: "4px", my: "4px", mx: "4px", borderRadius: "20px", position: "relative" }}>
      <div sx={{ fontSize: "6vw", color: "#ffffff70", position: "absolute", width: "100%", height: "100%", fontWeight: "bold", zIndex: 2 }}>{notifier}</div>
      <table sx={{ width: "100%", position: "relative", zIndex: 5 }}>
        <thead>
          <tr sx={{ margin: "0" }}>
            <td>{locales("Team")}</td>
            <td>{locales("Pts")}</td>
            <td>{locales("Difference")}</td>
            <td>{locales("Goals")}</td>
            <td>{locales("FairPlay")}</td>
          </tr>
        </thead>
        <tbody>
          {group.map((dataset, index) => {
            const { team, points, goals, countergoals, goalDifference, fairPlay } = dataset
            return (
              <tr key={index} sx={{ margin: "0px" }}>
                <td><FlagWrapper team={team} participant={participants(team)} /></td>
                <td>{points}</td>
                <td>{goalDifference}</td>
                <td>{goals}:{countergoals}</td>
                <td>{fairPlay}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export function TableSetTwo({ matches, groupA, groupB, setGroupA, setGroupB, setGroupC, coefficient = [], modus = "euro" }) {
  const { A, B } = matches
  return (
    <div sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)"}}>
      <Table matches={A} group={groupA} setGroup={setGroupA} notifier="A" number={0} coefficient={coefficient} modus={modus} />
      <Table matches={B} group={groupB} setGroup={setGroupB} notifier="B" number={1} coefficient={coefficient} modus={modus} />
    </div>
  )
}

export function TableSetThree({ matches, groupA, groupB, groupC, setGroupA, setGroupB, setGroupC, coefficient = [], modus }) {
  const { A, B, C } = matches
  return (
    <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"] }}>
      <Table matches={A} group={groupA} setGroup={setGroupA} notifier="A" number={0} coefficient={coefficient} modus={modus} />
      <Table matches={B} group={groupB} setGroup={setGroupB} notifier="B" number={1} coefficient={coefficient} modus={modus} />
      <Table matches={C} group={groupC} setGroup={setGroupC} notifier="C" number={2} coefficient={coefficient} modus={modus} />
    </div>
  )
}

export function TableSetFour({ matches, groupA, groupB, groupC, groupD, setGroupA, setGroupB, setGroupC, setGroupD, coefficient = [], modus }) {
  const { A, B, C, D } = matches
  return (
    <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"], gridTemplateRows: ["repeat(2,1fr)", "repeat(2,1fr)", "1fr"] }}>
      <Table matches={A} group={groupA} setGroup={setGroupA} notifier="A" number={0} coefficient={coefficient} modus={modus} />
      <Table matches={B} group={groupB} setGroup={setGroupB} notifier="B" number={1} coefficient={coefficient} modus={modus} />
      <Table matches={C} group={groupC} setGroup={setGroupC} notifier="C" number={2} coefficient={coefficient} modus={modus} />
      <Table matches={D} group={groupD} setGroup={setGroupD} notifier="D" number={3} coefficient={coefficient} modus={modus} />
    </div>
  )
}

export function TableSetEight({ matches, groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH, setGroupA, setGroupB, setGroupC, setGroupD, setGroupE, setGroupF, setGroupG, setGroupH, coefficient = [], modus = "euro" }) {
  const { A, B, C, D, E, F, G, H } = matches
  return (
    <div sx={{ display: "grid", gridTemplateColumns: ["repeat(2,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"], gridTemplateRows: ["repeat(4,1fr)", "repeat(4,1fr)", "repeat(2,1fr)"]}}>
      <Table matches={A} group={groupA} setGroup={setGroupA} notifier="A" number={0} coefficient={coefficient} modus={modus} />
      <Table matches={B} group={groupB} setGroup={setGroupB} notifier="B" number={1} coefficient={coefficient} modus={modus} />
      <Table matches={C} group={groupC} setGroup={setGroupC} notifier="C" number={2} coefficient={coefficient} modus={modus} />
      <Table matches={D} group={groupD} setGroup={setGroupD} notifier="D" number={3} coefficient={coefficient} modus={modus} />
      <Table matches={E} group={groupE} setGroup={setGroupE} notifier="E" number={4} coefficient={coefficient} modus={modus} />
      <Table matches={F} group={groupF} setGroup={setGroupF} notifier="F" number={5} coefficient={coefficient} modus={modus} />
      <Table matches={G} group={groupG} setGroup={setGroupG} notifier="G" number={6} coefficient={coefficient} modus={modus} />
      <Table matches={H} group={groupH} setGroup={setGroupH} notifier="H" number={7} coefficient={coefficient} modus={modus} />
    </div>
  )
}

export function TableThird({ third, emax, maxColumns }) {
  const max = emax ? emax : 3
  const cols = maxColumns ? `1 / span ${maxColumns}` : "1 / span 2"
  return (
    <table sx={{ fontSize: 0, backgroundColor: "#78C5FC", padding: "4px", margin: "4px", borderRadius: "20px", gridColumn: ["1 / span 2", "1 / span 2", cols] }}>
      <thead>
        <tr>
        <td>{locales("Group")}</td>
        <td>{locales("Team")}</td>
        <td>{locales("Pts")}</td>
        <td>{locales("Victories")}</td>
        <td>{locales("Difference")}</td>
        <td>{locales("FairPlay")}</td>
        </tr>
      </thead>
      <tbody>
        {third && third.length > 0 && third.map((team, index) => {
          const line = index === max ? "1px dashed black" : "none"
          if (team) {
            return (
              <tr key={index}>
                <td sx={{ borderBottom: line }}>{team.group}</td>
                <td sx={{ borderBottom: line }}><FlagWrapper team={team.team} participant={participants(team.team)} /></td>
                <td sx={{ borderBottom: line }}>{team.points}</td>
                <td sx={{ borderBottom: line }}>{team.victories}</td>
                <td sx={{ borderBottom: line }}>{team.goalDifference}</td>
                <td sx={{ borderBottom: line }}>{team.fairPlay}</td>
              </tr>
            )
          } else { return null }
        })}
      </tbody>
    </table>
  )
}