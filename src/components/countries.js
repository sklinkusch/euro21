const participants = require("../data/teams.json")
const locales = require("../data/locales.json")
const lang = navigator.language 

export const participantName = (code) => {
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

export const localeName = (code) => {
  if(code && typeof code === "string" && code != null && code !== "?") {
    if (/^de/.test(lang)) {
      return locales.de[code]
    } else if (/^es/.test(lang)) {
      return locales.es[code]
    } else if (/^fr/.test(lang)) {
      return locales.fr[code]
    } else if (/^it/.test(lang)) {
      return locales.it[code]
    } else if (/^pl/.test(lang)) {
      return locales.pl[code]
    } else {
      return locales.en[code]
    }
  }
  return ""
}
