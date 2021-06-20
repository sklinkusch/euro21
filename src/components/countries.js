const participantName = (code) => {
  const lang = navigator.language 
  if( /^de/.test(lang)) {
    return participantsDE[code]
  } else if( /^es/.test(lang)) {
    return participantsES[code]
  } else if( /^fr/.test(lang)) {
    return participantsFR[code]
  } else if( /^it/.test(lang)) {
    return participantsIT[code]
  } else if( /^pl/.test(lang)) {
    return participantsPL[code]
  } else {
    return participantsEN[code]
  }
}

const participantsDE = {
  AT: "Österreich",
  BE: "Belgien",
  CH: "Schweiz",
  CZ: "Tschechien",
  DE: "Deutschland",
  DK: "Dänemark",
  ES: "Spanien",
  FI: "Finnland",
  FR: "Frankreich",
  "GB-ENG": "England",
  "GB-SCT": "Schottland",
  "GB-WLS": "Wales",
  HR: "Kroatien",
  HU: "Ungarn",
  IT: "Italien",
  MK: "Nordmazedonien",
  NL: "Niederlande",
  PL: "Polen",
  PT: "Portugal",
  RU: "Russland",
  SE: "Schweden",
  SK: "Slowakei",
  TR: "Türkei",
  UA: "Ukraine",
}

const participantsEN = {
  AT: "Austria",
  BE: "Belgium",
  CH: "Switzerland",
  CZ: "Czechia",
  DE: "Germany",
  DK: "Denmark",
  ES: "Spain",
  FI: "Finland",
  FR: "France",
  "GB-ENG": "England",
  "GB-SCT": "Scotland",
  "GB-WLS": "Wales",
  HR: "Croatia",
  HU: "Hungary",
  IT: "Italy",
  MK: "North Macedonia",
  NL: "Netherlands",
  PL: "Poland",
  PT: "Portugal",
  RU: "Russia",
  SE: "Sweden",
  SK: "Slovakia",
  TR: "Turkey",
  UA: "Ukraine",
}

const participantsES = {
  AT: "Austria",
  BE: "Bélgica",
  CH: "Suiza",
  CZ: "Chequia",
  DE: "Alemania",
  DK: "Dinamarca",
  ES: "España",
  FI: "Finlandia",
  FR: "Francia",
  "GB-ENG": "Inglaterra",
  "GB-SCT": "Escocia",
  "GB-WLS": "Gales",
  HR: "Croacia",
  HU: "Hungría",
  IT: "Italia",
  MK: "Macedonia del Norte",
  NL: "Países Bajos",
  PL: "Polonia",
  PT: "Portugal",
  RU: "Rusia",
  SE: "Suecia",
  SK: "Eslovaquia",
  TR: "Turquía",
  UA: "Ucrania",
}

const participantsFR = {
  AT: "Autriche",
  BE: "Belgique",
  CH: "Suisse",
  CZ: "Tchéquie",
  DE: "Allemagne",
  DK: "Danemark",
  ES: "Espagne",
  FI: "Finlande",
  FR: "France",
  "GB-ENG": "Angleterre",
  "GB-SCT": "Écosse",
  "GB-WLS": "Pays de Galles",
  HR: "Croatie",
  HU: "Hongrie",
  IT: "Italie",
  MK: "Macédoine du Nord",
  NL: "Pays-Bas",
  PL: "Pologne",
  PT: "Portugal",
  RU: "Russie",
  SE: "Suède",
  SK: "Slovaquie",
  TR: "Turquie",
  UA: "Ukraine",
}

const participantsIT = {
  AT: "Austria",
  BE: "Belgio",
  CH: "Svizzera",
  CZ: "Cechia",
  DE: "Germania",
  DK: "Danimarca",
  ES: "Spagna",
  FI: "Finlandia",
  FR: "Francia",
  "GB-ENG": "Inghilterra",
  "GB-SCT": "Scozia",
  "GB-WLS": "Galles",
  HR: "Croazia",
  HU: "Ungheria",
  IT: "Italia",
  MK: "Macedonia del Nord",
  NL: "Paesi Bassi",
  PL: "Polonia",
  PT: "Portogallo",
  RU: "Russia",
  SE: "Svezia",
  SK: "Slovacchia",
  TR: "Turchia",
  UA: "Ucraina",
}

const participantsPL = {
  AT: "Austria",
  BE: "Belgia",
  CH: "Szwajcaria",
  CZ: "Czechy",
  DE: "Niemcy",
  DK: "Dania",
  ES: "Hiszpania",
  FI: "Finlandia",
  FR: "Francja",
  "GB-ENG": "Anglia",
  "GB-SCT": "Szkocja",
  "GB-WLS": "Walia",
  HR: "Chorwacja",
  HU: "Węgry",
  IT: "Włochy",
  MK: "Macedonia Północna",
  NL: "Holandia",
  PL: "Polska",
  PT: "Portugalia",
  RU: "Rosja",
  SE: "Szwecja",
  SK: "Słowacja",
  TR: "Turcja",
  UA: "Ukraina",
}

export default participantName