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