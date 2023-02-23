/** @jsxImportSource theme-ui */
import React from 'react'
import FlagWrapper from './FlagWrapper'
import { participantName } from './countries'

export function getGridValue(length) {
  switch (length) {
    case 16:
      return 4
    case 15:
      return 3
    case 12:
      return 4
    case 10:
      return 4
    case 9:
      return 3
    case 8:
      return 4
    case 6:
      return 3
    case 4:
      return 4
    case 3:
      return 3
    case 2:
      return 2
    case 1:
      return 1
    default:
      return 3
  }
}

export function getAssociation20(winningCombination) {
  switch (winningCombination) {
    case "ABCD":
    case "ABCE":
    case "ABCF":
      return [3, 7, 5, 2]
    case "ABDE":
    case "ABDF":
      return [7, 5, 3, 2]
    case "ABEF":
      return [5, 7, 3, 2]
    case "ACDE":
    case "ACDF":
    case "ADEF":
    case "BCDF":
    case "BCEF":
    case "BDEF":
    case "CDEF":
      return [5, 7, 2, 3]
    case "BCDE":
      return [7, 5, 2, 3]
    default:
      return []
  }
}

export function getAssociation16(winningCombination) {
  switch(winningCombination) {
    case "ABCD":
    case "ABCE":
    case "ABCF":
      return [3, 7, 5, 1]
    case "ABDE":
    case "ABDF":
      return [7, 5, 3, 1]
    case "ABEF":
      return [5, 7, 3, 1]
    case "ACDE":
    case "ACDF":
    case "ADEF":
    case "BCDF":
    case "BCEF":
    case "BDEF":
    case "CDEF":
      return [5, 7, 1, 3]
    case "BCDE":
      return [7, 5, 1, 3]
    default:
      return []
  }
}

export const getColor = (number) => {
  switch (number) {
    case 0: return "#7AACAC"
    case 1: return "#CBD0CC"
    case 2: return "#ADFF2F"
    case 3: return "#E6D2B5"
    case 4: return "#EAF044"
    case 5: return "#D79FA6"
    case 6: return "#FDDEB7"
    case 7: return "#CACACA"
    default: return "bg"
  }
}

export const getKoTeam = (matchArray, indexMA, teamsA, indexTA, teamsB, indexTB) => {
  const teamAGoal = typeof indexMA === "number" ? matchArray[indexMA].goals[0] : matchArray.goals[0]
  const teamBGoal = typeof indexMA === "number" ? matchArray[indexMA].goals[1] : matchArray.goals[1]
  if (typeof teamAGoal === "number" && typeof teamBGoal === "number") {
    if (teamAGoal > teamBGoal) {
      if(typeof teamsA === "object" && Array.isArray(teamsA) && teamsA.length > -1) {
        const teamA = teamsA[indexTA]
        return teamA === "object" && teamA.hasOwnProperty("team") ? teamA.team : typeof teamA === "string" ? teamA : null
      } 
      return null
    } else if (teamBGoal > teamAGoal) {
      if(typeof teamsB === "object" && Array.isArray(teamsB) && teamsB.length > -1) {
        const teamB = teamsB[indexTB]
        return teamB === "object" && teamB.hasOwnProperty("team") ? teamB.team : typeof teamB === "string" ? teamB : null
      } 
      return null
    } else {
      const teamA = typeof teamsA === "object" && Array.isArray(teamsA) && teamsA.length > -1 ? teamsA[indexTA] : null
      const teamB = typeof teamsB === "object" && Array.isArray(teamsB) && teamsB.length > -1 ? teamsB[indexTB] : null 
      const tA = teamA === "object" && teamA.hasOwnProperty("team") 
      ? teamA.team 
      : typeof teamA === "object" && Array.isArray(teamA)
        ? teamA
        : typeof teamA === "string" 
          ? teamA 
          : null 
      const tB = teamB === "object" && teamA.hasOwnProperty("team") 
      ? teamB.team 
      : typeof teamB === "object" && Array.isArray(teamB) 
        ? teamB
        : typeof teamB === "string" ? teamB : null
      const array = tA != null && tB != null ? [tA, tB].flat() : null 
      return array
    }
  } else {
    const teamA = typeof teamsA === "object" && Array.isArray(teamsA) && teamsA.length > -1 ? teamsA[indexTA] : null
      const teamB = typeof teamsB === "object" && Array.isArray(teamsB) && teamsB.length > -1 ? teamsB[indexTB] : null 
      const tA = teamA === "object" && teamA.hasOwnProperty("team") 
      ? teamA.team 
      : typeof teamA === "object" && Array.isArray(teamA)
        ? teamA
        : typeof teamA === "string" 
          ? teamA 
          : null 
      const tB = teamB === "object" && teamA.hasOwnProperty("team") 
      ? teamB.team 
      : typeof teamB === "object" && Array.isArray(teamB) 
        ? teamB
        : typeof teamB === "string" ? teamB : null
      const array = tA != null && tB != null ? [tA, tB].flat() : null 
      return array
  }
}

export const getLoser = (matchArray, indexMA, teamsA, indexTA, teamsB, indexTB) => {
  const teamAGoal = typeof indexMA === "number" ? matchArray[indexMA].goals[0] : matchArray.goals[0]
  const teamBGoal = typeof indexMA === "number" ? matchArray[indexMA].goals[1] : matchArray.goals[1]
  if (typeof teamAGoal === "number" && typeof teamBGoal === "number") {
    if (teamAGoal < teamBGoal) {
      if(typeof teamsA === "object" && Array.isArray(teamsA) && teamsA.length > -1) {
        const teamA = teamsA[indexTA]
        return teamA === "object" && teamA.hasOwnProperty("team") ? teamA.team : typeof teamA === "string" ? teamA : null
      } 
      return null
    } else if (teamBGoal < teamAGoal) {
      if(typeof teamsB === "object" && Array.isArray(teamsB) && teamsB.length > -1) {
        const teamB = teamsB[indexTB]
        return teamB === "object" && teamB.hasOwnProperty("team") ? teamB.team : typeof teamB === "string" ? teamB : null
      } 
      return null
    } else {
      const teamA = typeof teamsA === "object" && Array.isArray(teamsA) && teamsA.length > -1 ? teamsA[indexTA] : null
      const teamB = typeof teamsB === "object" && Array.isArray(teamsB) && teamsB.length > -1 ? teamsB[indexTB] : null 
      const tA = teamA === "object" && teamA.hasOwnProperty("team") 
      ? teamA.team 
      : typeof teamA === "object" && Array.isArray(teamA)
        ? teamA
        : typeof teamA === "string" 
          ? teamA 
          : null 
      const tB = teamB === "object" && teamA.hasOwnProperty("team") 
      ? teamB.team 
      : typeof teamB === "object" && Array.isArray(teamB) 
        ? teamB
        : typeof teamB === "string" ? teamB : null
      const array = tA != null && tB != null ? [tA, tB].flat() : null 
      return array
    }
  } else {
    const teamA = typeof teamsA === "object" && Array.isArray(teamsA) && teamsA.length > -1 ? teamsA[indexTA] : null
      const teamB = typeof teamsB === "object" && Array.isArray(teamsB) && teamsB.length > -1 ? teamsB[indexTB] : null 
      const tA = teamA === "object" && teamA.hasOwnProperty("team") 
      ? teamA.team 
      : typeof teamA === "object" && Array.isArray(teamA)
        ? teamA
        : typeof teamA === "string" 
          ? teamA 
          : null 
      const tB = teamB === "object" && teamA.hasOwnProperty("team") 
      ? teamB.team 
      : typeof teamB === "object" && Array.isArray(teamB) 
        ? teamB
        : typeof teamB === "string" ? teamB : null
      const array = tA != null && tB != null ? [tA, tB].flat() : null 
      return array
  }
}

export const getChampion = (matchArray, teamA, teamB) => {
  const teamAGoal = matchArray.goals[0]
  const teamBGoal = matchArray.goals[1]
  if(teamAGoal > teamBGoal) {
    return [teamA].flat()
  } else if (teamBGoal > teamAGoal) {
    return [teamB].flat()
  } else {
    return [ teamA, teamB ].flat()
  }
}

export const getKoTeams = (matchArray, index, teamA, teamB) => {
  const teamAGoal = typeof index === "number" ? matchArray[index].goals[0] : matchArray.goals[0]
  const teamBGoal = typeof index === "number" ? matchArray[index].goals[1] : matchArray.goals[1]
  if (typeof teamAGoal === "number" && typeof teamBGoal === "number") {
    if (teamAGoal > teamBGoal) {
      return typeof teamA === "object" && teamA.hasOwnProperty("team") ? teamA.team : typeof teamA === "string" ? teamA : null
    } else if (teamBGoal > teamAGoal) {
      return typeof teamB === "object" && teamB.hasOwnProperty("team") ? teamB.team : typeof teamB === "string" ? teamB : null
    } else {
      if (teamA != null && teamB != null) {
        const tA = typeof teamA === "object" && teamA.hasOwnProperty("team") 
        ? teamA.team 
        : typeof teamA === "object" && Array.isArray(teamA) 
          ? teamA 
          : typeof teamA === "string" 
            ? teamA 
            : null 
        const tB = typeof teamB === "object" && teamB.hasOwnProperty("team") 
        ? teamB.team 
        : typeof teamB === "object" && Array.isArray(teamB) 
          ? teamB
          : typeof teamB === "string" 
            ? teamB 
            : null 
        return [tA, tB].flat()
      }
      return null
    }
  } else {
    if (teamA != null && teamB != null) {
      const tA = typeof teamA === "object" && teamA.hasOwnProperty("team") 
      ? teamA.team 
      : typeof teamA === "object" && Array.isArray(teamA) 
        ? teamA 
        : typeof teamA === "string" 
          ? teamA 
          : null 
      const tB = typeof teamB === "object" && teamB.hasOwnProperty("team") 
      ? teamB.team 
      : typeof teamB === "object" && Array.isArray(teamB) 
        ? teamB
        : typeof teamB === "string" 
          ? teamB 
          : null 
      return [tA, tB].flat()
    }
    return null
  }
}

export function FlagSet({code, large = false}){
  if (typeof code === "object" && Array.isArray(code) && code.length > 0) {
    return (
      <React.Fragment>
        {code.map((singleCode, index) => (
          <FlagWrapper key={index} team={singleCode} participant={participantName(singleCode)} />
        ))}
      </React.Fragment>
    )
  }
  return (
    <FlagWrapper team={code} participant={participantName(code)} />
  )
}