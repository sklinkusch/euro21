// import { localeName } from "../components/countries";

import { localeName } from "../components/countries"

const matches = {
  A: [
    {
      teams: ["DE", "CR"],
      goals: [4, 2],
      fairPlay: [0, 1]
    },
    {
      teams: ["PL", "EC"],
      goals: [0, 2],
      fairPlay: [1, 2]
    },
    {
      teams: ["DE", "PL"],
      goals: [1, 0],
      fairPlay: [3, 5]
    },
    {
      teams: ["EC", "CR"],
      goals: [3, 0],
      fairPlay: [3, 2]
    },
    {
      teams: ["EC", "DE"],
      goals: [0, 3],
      fairPlay: [1, 1]
    },
    {
      teams: ["CR", "PL"],
      goals: [1, 2],
      fairPlay: [5, 5]
    },
  ],
  B: [
    {
      teams: ["GB-ENG", "PY"],
      goals: [1, 0],
      fairPlay: [2, 1]
    },
    {
      teams: ["TT", "SE"],
      goals: [0, 0],
      fairPlay: [4, 1]
    },
    {
      teams: ["GB-ENG", "TT"],
      goals: [2, 0],
      fairPlay: [1, 5]
    },
    {
      teams: ["SE", "PY"],
      goals: [1, 0],
      fairPlay: [3, 4]
    },
    {
      teams: ["SE", "GB-ENG"],
      goals: [2, 2],
      fairPlay: [2, 1]
    },
    {
      teams: ["PY", "TT"],
      goals: [2, 0],
      fairPlay: [2, 2]
    },
  ],
  C: [
    {
      teams: ["AR", "CI"],
      goals: [2, 1],
      fairPlay: [3, 2]
    },
    {
      teams: ["YU-SCG", "NL"],
      goals: [0, 1],
      fairPlay: [4, 2]
    },
    {
      teams: ["AR", "SCG"],
      goals: [6, 0],
      fairPlay: [1, 6]
    },
    {
      teams: ["NL", "CI"],
      goals: [2, 1],
      fairPlay: [4, 3]
    },
    {
      teams: ["NL", "AR"],
      goals: [0, 0],
      fairPlay: [3, 2]
    },
    {
      teams: ["CI", "YU-SCG"],
      goals: [3, 2],
      fairPlay: [5, 6]
    },
  ],
  D: [
    {
      teams: ["MX", "IR"],
      goals: [3, 1],
      fairPlay: [2, 1]
    },
    {
      teams: ["AO", "PT"],
      goals: [0, 1],
      fairPlay: [3, 2]
    },
    {
      teams: ["MX", "AO"],
      goals: [0, 0],
      fairPlay: [1, 6]
    },
    {
      teams: ["PT", "IR"],
      goals: [2, 0],
      fairPlay: [3, 4]
    },
    {
      teams: ["PT", "MX"],
      goals: [2, 1],
      fairPlay: [4, 6]
    },
    {
      teams: ["IR", "AO"],
      goals: [1, 1],
      fairPlay: [3, 3]
    },
  ],
  E: [
    {
      teams: ["US", "CZ"],
      goals: [0, 3],
      fairPlay: [2, 4]
    },
    {
      teams: ["IT", "GH"],
      goals: [2, 0],
      fairPlay: [3, 2]
    },
    {
      teams: ["CZ", "GH"],
      goals: [0, 2],
      fairPlay: [4, 6]
    },
    {
      teams: ["IT", "US"],
      goals: [1, 1],
      fairPlay: [5, 6]
    },
    {
      teams: ["CZ", "IT"],
      goals: [0, 2],
      fairPlay: [3, 1]
    },
    {
      teams: ["GH", "US"],
      goals: [2, 1],
      fairPlay: [4, 1]
    },
  ],
  F: [
    {
      teams: ["AU", "JP"],
      goals: [3, 1],
      fairPlay: [4, 3]
    },
    {
      teams: ["BR", "HR"],
      goals: [1, 0],
      fairPlay: [1, 3]
    },
    {
      teams: ["JP", "HR"],
      goals: [0, 0],
      fairPlay: [3, 2]
    },
    {
      teams: ["BR", "AU"],
      goals: [2, 0],
      fairPlay: [3, 2]
    },
    {
      teams: ["JP", "BR"],
      goals: [1, 4],
      fairPlay: [1, 1]
    },
    {
      teams: ["HR", "AU"],
      goals: [2, 2],
      fairPlay: [8, 3]
    },
  ],
  G: [
    {
      teams: ["KR", "TG"],
      goals: [2, 1],
      fairPlay: [2, 5]
    },
    {
      teams: ["FR", "CH"],
      goals: [0, 0],
      fairPlay: [3, 5]
    },
    {
      teams: ["FR", "KR"],
      goals: [1, 1],
      fairPlay: [2, 2]
    },
    {
      teams: ["TG", "CH"],
      goals: [0, 2],
      fairPlay: [3, 1]
    },
    {
      teams: ["TG", "FR"],
      goals: [0, 2],
      fairPlay: [3, 1]
    },
    {
      teams: ["CH", "KR"],
      goals: [2, 0],
      fairPlay: [5, 5]
    },
  ],
  H: [
    {
      teams: ["ES", "UA"],
      goals: [4, 0],
      fairPlay: [0, 5]
    },
    {
      teams: ["TN", "SA"],
      goals: [2, 2],
      fairPlay: [4, 0]
    },
    {
      teams: ["SA", "UA"],
      goals: [0, 4],
      fairPlay: [3, 3]
    },
    {
      teams: ["ES", "TN"],
      goals: [3, 1],
      fairPlay: [2, 6]
    },
    {
      teams: ["SA", "ES"],
      goals: [0, 1],
      fairPlay: [2, 3]
    },
    {
      teams: ["UA", "TN"],
      goals: [1, 0],
      fairPlay: [4, 5]
    },
  ]
}

export const matchaf = [
  {
    goals: [2, 0],
    add: null
  },
  {
    goals: [2, 1],
    add: localeName("ExtraTime")
  },
  {
    goals: [1, 0],
    add: null
  },
  {
    goals: [0, 3],
    add: `${localeName("Penalties")} 0:0 ${localeName("ExtraTime")}`
  },
  {
    goals: [1, 0],
    add: null
  },
  {
    goals: [1, 0],
    add: null
  },
  {
    goals: [3, 0],
    add: null
  },
  {
    goals: [1, 3],
    add: null
  },
]

export const matchvf = [
  {
    goals: [4, 2],
    add: `${localeName("Penalties")} 1:1 ${localeName("ExtraTime")}`
  },
  {
    goals: [3, 0],
    add: null
  },
  {
    goals: [1, 3],
    add: `${localeName("Penalties")} 0:0 ${localeName("ExtraTime")}`
  },
  {
    goals: [0, 1],
    add: null
  },
]

export const matchhf = [
  {
    goals: [0, 2],
    add: localeName("ExtraTime")
  },
  {
    goals: [0, 1],
    add: null
  },
]

export const match3p = {
    goals: [3, 1],
    add: null
}


export const matchf = {
    goals: [5, 3],
    add: `${localeName("Penalties")} 1:1 ${localeName("ExtraTime")}`
}

export default matches