export function getAssociation(winningCombination) {
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

export const getColor = (number) => {
  switch (number) {
    case 0: return "#7AACAC"
    case 1: return "#CBD0CC"
    case 2: return "greenyellow"
    case 3: return "#E6D2B5"
    case 4: return "#EAF044"
    case 5: return "#D79FA6"
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
      return null
    }
  } else {
    return null
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
      return null
    }
  } else {
    return null
  }
}