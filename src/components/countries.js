const participants = require("../data/teams.json")

export const participantName = (code) => {
  const lang = navigator.language 
  if (code && typeof code === "string" && code != null && code !== "?") {
    if( /^de/.test(lang)) {
      return participants[code]["de"]
    } else if( /^es/.test(lang)) {
      return participants[code]["es"]
    } else if( /^fr/.test(lang)) {
      return participants[code]["fr"]
    } else if( /^it/.test(lang)) {
      return participants[code]["it"]
    } else if( /^pl/.test(lang)) {
      return participants[code]["pl"]
    } else {
      return participants[code]["en"]
    }
  }
  return ""
}
