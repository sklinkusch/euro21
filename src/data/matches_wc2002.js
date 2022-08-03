// import { localeName } from "../components/countries";

import { localeName } from "../components/countries"

const matches = {
  A: [
    {
      teams: ["FR", "SN"],
      goals: [0, 1],
      fairPlay: [1, 1]
    },
    {
      teams: ["UY", "DK"],
      goals: [1, 2],
      fairPlay: [1, 2]
    },
    {
      teams: ["FR", "UY"],
      goals: [0, 0],
      fairPlay: [4, 4]
    },
    {
      teams: ["DK", "SN"],
      goals: [1, 1],
      fairPlay: [4, 5]
    },
    {
      teams: ["DK", "FR"],
      goals: [2, 0],
      fairPlay: [2, 1]
    },
    {
      teams: ["SN", "UY"],
      goals: [3, 3],
      fairPlay: [7, 5]
    },
  ],
  B: [
    {
      teams: ["PY", "ZA"],
      goals: [2, 2],
      fairPlay: [4, 4]
    },
    {
      teams: ["ES", "SI"],
      goals: [3, 1],
      fairPlay: [1, 2]
    },
    {
      teams: ["ES", "PY"],
      goals: [3, 1],
      fairPlay: [1, 3]
    },
    {
      teams: ["ZA", "SI"],
      goals: [1, 0],
      fairPlay: [2, 4]
    },
    {
      teams: ["ZA", "ES"],
      goals: [2, 3],
      fairPlay: [4, 0]
    },
    {
      teams: ["SI", "PY"],
      goals: [1, 3],
      fairPlay: [7, 3]
    },
  ],
  C: [
    {
      teams: ["BR", "TR"],
      goals: [2, 1],
      fairPlay: [1, 8]
    },
    {
      teams: ["CN", "CR"],
      goals: [0, 2],
      fairPlay: [3, 4]
    },
    {
      teams: ["BR", "CN"],
      goals: [4, 0],
      fairPlay: [2, 0]
    },
    {
      teams: ["CR", "TR"],
      goals: [1, 1],
      fairPlay: [2, 3]
    },
    {
      teams: ["CR", "BR"],
      goals: [2, 5],
      fairPlay: [0, 1]
    },
    {
      teams: ["TR", "CN"],
      goals: [3, 0],
      fairPlay: [2, 4]
    },
  ],
  D: [
    {
      teams: ["KR", "PL"],
      goals: [2, 0],
      fairPlay: [2, 3]
    },
    {
      teams: ["US", "PT"],
      goals: [3, 2],
      fairPlay: [1, 2]
    },
    {
      teams: ["KR", "US"],
      goals: [1, 1],
      fairPlay: [1, 2]
    },
    {
      teams: ["PT", "PL"],
      goals: [4, 0],
      fairPlay: [3, 2]
    },
    {
      teams: ["PT", "KR"],
      goals: [0, 1],
      fairPlay: [7, 4]
    },
    {
      teams: ["PL", "US"],
      goals: [3, 0],
      fairPlay: [4, 1]
    },
  ],
  E: [
    {
      teams: ["IE", "CM"],
      goals: [1, 1],
      fairPlay: [3, 1]
    },
    {
      teams: ["DE", "SA"],
      goals: [8, 0],
      fairPlay: [2, 1]
    },
    {
      teams: ["DE", "IE"],
      goals: [1, 1],
      fairPlay: [0, 0]
    },
    {
      teams: ["CM", "SA"],
      goals: [1, 0],
      fairPlay: [1, 1]
    },
    {
      teams: ["CM", "DE"],
      goals: [0, 2],
      fairPlay: [9, 9]
    },
    {
      teams: ["SA", "IE"],
      goals: [0, 3],
      fairPlay: [1, 1]
    },
  ],
  F: [
    {
      teams: ["AR", "NG"],
      goals: [1, 0],
      fairPlay: [2, 1]
    },
    {
      teams: ["GB-ENG", "SE"],
      goals: [1, 1],
      fairPlay: [1, 2]
    },
    {
      teams: ["SE", "NG"],
      goals: [2, 1],
      fairPlay: [2, 1]
    },
    {
      teams: ["AR", "GB-ENG"],
      goals: [0, 1],
      fairPlay: [1, 2]
    },
    {
      teams: ["SE", "AR"],
      goals: [1, 1],
      fairPlay: [2, 3]
    },
    {
      teams: ["NG", "GB-ENG"],
      goals: [0, 0],
      fairPlay: [0, 0]
    },
  ],
  G: [
    {
      teams: ["HR", "MX"],
      goals: [0, 1],
      fairPlay: [3, 0]
    },
    {
      teams: ["IT", "EC"],
      goals: [2, 0],
      fairPlay: [1, 3]
    },
    {
      teams: ["IT", "HR"],
      goals: [1, 2],
      fairPlay: [1, 1]
    },
    {
      teams: ["MX", "EC"],
      goals: [2, 1],
      fairPlay: [1, 4]
    },
    {
      teams: ["MX", "IT"],
      goals: [1, 1],
      fairPlay: [2, 5]
    },
    {
      teams: ["EC", "HR"],
      goals: [1, 0],
      fairPlay: [1, 2]
    },
  ],
  H: [
    {
      teams: ["JP", "BE"],
      goals: [2, 2],
      fairPlay: [2, 3]
    },
    {
      teams: ["RU", "TN"],
      goals: [2, 0],
      fairPlay: [2, 2]
    },
    {
      teams: ["JP", "RU"],
      goals: [1, 0],
      fairPlay: [3, 3]
    },
    {
      teams: ["TN", "BE"],
      goals: [1, 1],
      fairPlay: [4, 1]
    },
    {
      teams: ["TN", "JP"],
      goals: [0, 2],
      fairPlay: [2, 0]
    },
    {
      teams: ["BE", "RU"],
      goals: [3, 2],
      fairPlay: [1, 4]
    },
  ]
}

export const matchaf = [
  {
    goals: [1, 0],
    add: null
  },
  {
    goals: [0, 3],
    add: null
  },
  {
    goals: [1, 2],
    add: localeName("GoldenGoal")
  },
  {
    goals: [3, 2],
    add: `${localeName("Penalties")} 1:1 ${localeName("ExtraTime")}`
  },
  {
    goals: [0, 2],
    add: null
  },
  {
    goals: [2, 0],
    add: null
  },
  {
    goals: [0, 1],
    add: null
  },
  {
    goals: [2, 1],
    add: localeName("GoldenGoal")
  },
]

export const matchvf = [
  {
    goals: [1, 2],
    add: null
  },
  {
    goals: [1, 0],
    add: null
  },
  {
    goals: [3, 5],
    add: `${localeName("Penalties")} 0:0 ${localeName("ExtraTime")}`
  },
  {
    goals: [0, 1],
    add: localeName("GoldenGoal")
  },
]

export const matchhf = [
  {
    goals: [1, 0],
    add: null
  },
  {
    goals: [1, 0],
    add: null
  },
]

export const match3p = {
    goals: [2, 3],
    add: null
}


export const matchf = {
    goals: [0, 2],
    add: null
}

export default matches