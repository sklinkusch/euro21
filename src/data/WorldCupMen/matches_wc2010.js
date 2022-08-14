// import { localeName } from "../components/countries";

import { localeName } from "../../components/countries"

const matches = {
  A: [
    {
      teams: ["ZA", "MX"],
      goals: [1, 1],
      fairPlay: [2, 2]
    },
    {
      teams: ["UY", "FR"],
      goals: [0, 0],
      fairPlay: [5, 3]
    },
    {
      teams: ["ZA", "UY"],
      goals: [0, 3],
      fairPlay: [5, 0]
    },
    {
      teams: ["FR", "MX"],
      goals: [0, 2],
      fairPlay: [2, 4]
    },
    {
      teams: ["MX", "UY"],
      goals: [0, 1],
      fairPlay: [2, 1]
    },
    {
      teams: ["FR", "ZA"],
      goals: [1, 2],
      fairPlay: [4, 0]
    },
  ],
  B: [
    {
      teams: ["KR", "GR"],
      goals: [2, 0],
      fairPlay: [0, 1]
    },
    {
      teams: ["AR", "NG"],
      goals: [1, 0],
      fairPlay: [1, 1]
    },
    {
      teams: ["AR", "KR"],
      goals: [4, 1],
      fairPlay: [3, 2]
    },
    {
      teams: ["GR", "NG"],
      goals: [2, 1],
      fairPlay: [3, 4]
    },
    {
      teams: ["NG", "KR"],
      goals: [2, 2],
      fairPlay: [3, 1]
    },
    {
      teams: ["GR", "AR"],
      goals: [0, 2],
      fairPlay: [1, 1]
    },
  ],
  C: [
    {
      teams: ["GB-ENG", "US"],
      goals: [1, 1],
      fairPlay: [3, 3]
    },
    {
      teams: ["DZ", "SI"],
      goals: [0, 1],
      fairPlay: [4, 2]
    },
    {
      teams: ["SI", "US"],
      goals: [2, 2],
      fairPlay: [4, 1]
    },
    {
      teams: ["GB-ENG", "DZ"],
      goals: [0, 0],
      fairPlay: [1, 1]
    },
    {
      teams: ["US", "DZ"],
      goals: [1, 0],
      fairPlay: [2, 5]
    },
    {
      teams: ["SI", "GB-ENG"],
      goals: [0, 1],
      fairPlay: [3, 1]
    },
  ],
  D: [
    {
      teams: ["RS", "GH"],
      goals: [0, 1],
      fairPlay: [5, 2]
    },
    {
      teams: ["DE", "AU"],
      goals: [4, 0],
      fairPlay: [2, 6]
    },
    {
      teams: ["DE", "RS"],
      goals: [0, 1],
      fairPlay: [6, 4]
    },
    {
      teams: ["GH", "AU"],
      goals: [1, 1],
      fairPlay: [3, 4]
    },
    {
      teams: ["AU", "RS"],
      goals: [2, 1],
      fairPlay: [3, 2]
    },
    {
      teams: ["GH", "DE"],
      goals: [0, 1],
      fairPlay: [1, 1]
    },
  ],
  E: [
    {
      teams: ["NL", "DK"],
      goals: [2, 0],
      fairPlay: [2, 1]
    },
    {
      teams: ["JP", "CM"],
      goals: [1, 0],
      fairPlay: [1, 1]
    },
    {
      teams: ["NL", "JP"],
      goals: [1, 0],
      fairPlay: [1, 0]
    },
    {
      teams: ["CM", "DK"],
      goals: [1, 2],
      fairPlay: [2, 2]
    },
    {
      teams: ["DK", "JP"],
      goals: [1, 3],
      fairPlay: [3, 2]
    },
    {
      teams: ["CM", "NL"],
      goals: [1, 2],
      fairPlay: [2, 3]
    },
  ],
  F: [
    {
      teams: ["IT", "PY"],
      goals: [1, 1],
      fairPlay: [1, 1]
    },
    {
      teams: ["NZ", "SK"],
      goals: [1, 1],
      fairPlay: [2, 1]
    },
    {
      teams: ["SK", "PY"],
      goals: [0, 2],
      fairPlay: [3, 1]
    },
    {
      teams: ["NZ", "IT"],
      goals: [1, 1],
      fairPlay: [0, 3]
    },
    {
      teams: ["SK", "IT"],
      goals: [3, 2],
      fairPlay: [4, 4]
    },
    {
      teams: ["PY", "NZ"],
      goals: [0, 0],
      fairPlay: [2, 1]
    },
  ],
  G: [
    {
      teams: ["CI", "PT"],
      goals: [0, 0],
      fairPlay: [2, 2]
    },
    {
      teams: ["BR", "KP"],
      goals: [2, 1],
      fairPlay: [1, 0]
    },
    {
      teams: ["BR", "CI"],
      goals: [3, 1],
      fairPlay: [3, 3]
    },
    {
      teams: ["PT", "KP"],
      goals: [7, 0],
      fairPlay: [2, 2]
    },
    {
      teams: ["PT", "BR"],
      goals: [0, 0],
      fairPlay: [4, 3]
    },
    {
      teams: ["KP", "CI"],
      goals: [0, 3],
      fairPlay: [0, 0]
    },
  ],
  H: [
    {
      teams: ["HN", "CL"],
      goals: [0, 1],
      fairPlay: [1, 2]
    },
    {
      teams: ["ES", "CH"],
      goals: [0, 1],
      fairPlay: [0, 4]
    },
    {
      teams: ["CL", "CH"],
      goals: [1, 0],
      fairPlay: [6, 6]
    },
    {
      teams: ["ES", "HN"],
      goals: [2, 0],
      fairPlay: [0, 2]
    },
    {
      teams: ["CH", "HN"],
      goals: [0, 0],
      fairPlay: [1, 4]
    },
    {
      teams: ["CL", "ES"],
      goals: [1, 2],
      fairPlay: [5, 0]
    },
  ]
}

export const matchaf = [
  {
    goals: [2, 1],
    add: null
  },
  {
    goals: [1, 2],
    add: localeName("ExtraTime")
  },
  {
    goals: [2, 1],
    add: null
  },
  {
    goals: [3, 0],
    add: null
  },
  {
    goals: [3, 1],
    add: null
  },
  {
    goals: [4, 1],
    add: null
  },
  {
    goals: [5, 3],
    add: `${localeName("Penalties")} 0:0 ${localeName("ExtraTime")}`
  },
  {
    goals: [1, 0],
    add: null
  },
]

export const matchvf = [
  {
    goals: [4, 2],
    add: `${localeName("Penalties")} 1:1 ${localeName("ExtraTime")}`
  },
  {
    goals: [2, 1],
    add: null
  },
  {
    goals: [0, 4],
    add: null
  },
  {
    goals: [0, 1],
    add: null
  },
]

export const matchhf = [
  {
    goals: [2, 3],
    add: null
  },
  {
    goals: [0, 1],
    add: null
  },
]

export const match3p = {
    goals: [2, 3],
    add: null
}


export const matchf = {
    goals: [0, 1],
    add: localeName("ExtraTime")
}

export default matches