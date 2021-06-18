export function getAssociation(winningCombination) {
  switch(winningCombination) {
    case "ABCD":
    case "ABCE":
    case "ABCF":
      return [3,7,5,2]
    case "ABDE":
    case "ABDF":
      return [7,5,3,2]
    case "ABEF":
      return [5,7,3,2]
    case "ACDE":
    case "ACDF":
    case "ADEF":
    case "BCDF":
    case "BCEF":
    case "BDEF":
    case "CDEF":
      return [5,7,2,3]
    case "BCDE":
      return [7,5,2,3] 
    default:
      return []
  }
}