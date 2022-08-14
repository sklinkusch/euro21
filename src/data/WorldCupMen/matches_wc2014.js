// import { localeName } from "../components/countries";

import { localeName } from "../../components/countries"

const matches = {
  A: [
    {
      teams: ["BR", "HR"],
      goals: [3, 1],
      fairPlay: [2, 2]
    },
    {
      teams: ["MX", "CM"],
      goals: [1, 0],
      fairPlay: [1, 1]
    },
    {
      teams: ["BR", "MX"],
      goals: [0, 0],
      fairPlay: [2, 2]
    },
    {
      teams: ["CM", "HR"],
      goals: [0, 4],
      fairPlay: [3, 1]
    },
    {
      teams: ["CM", "BR"],
      goals: [1, 4],
      fairPlay: [3, 0]
    },
    {
      teams: ["HR", "MX"],
      goals: [1, 3],
      fairPlay: [4, 2]
    },
  ],
  B: [
    {
      teams: ["ES", "NL"],
      goals: [1, 5],
      fairPlay: [1, 3]
    },
    {
      teams: ["CL", "AU"],
      goals: [3, 1],
      fairPlay: [1, 3]
    },
    {
      teams: ["AU", "NL"],
      goals: [2, 3],
      fairPlay: [1, 1]
    },
    {
      teams: ["ES", "CL"],
      goals: [0, 2],
      fairPlay: [1, 2]
    },
    {
      teams: ["AU", "ES"],
      goals: [0, 3],
      fairPlay: [2, 1]
    },
    {
      teams: ["NL", "CL"],
      goals: [2, 0],
      fairPlay: [1, 1]
    },
  ],
  C: [
    {
      teams: ["CO", "GR"],
      goals: [3, 0],
      fairPlay: [1, 2]
    },
    {
      teams: ["CI", "JP"],
      goals: [2, 1],
      fairPlay: [2, 2]
    },
    {
      teams: ["CO", "CI"],
      goals: [2, 1],
      fairPlay: [0, 2]
    },
    {
      teams: ["JP", "GR"],
      goals: [0, 0],
      fairPlay: [1, 5]
    },
    {
      teams: ["JP", "CO"],
      goals: [1, 4],
      fairPlay: [1, 1]
    },
    {
      teams: ["GR", "CI"],
      goals: [2, 1],
      fairPlay: [0, 3]
    },
  ],
  D: [
    {
      teams: ["UY", "CR"],
      goals: [1, 3],
      fairPlay: [6, 0]
    },
    {
      teams: ["GB-ENG", "IT"],
      goals: [1, 2],
      fairPlay: [1, 0]
    },
    {
      teams: ["UY", "GB-ENG"],
      goals: [2, 1],
      fairPlay: [1, 1]
    },
    {
      teams: ["IT", "CR"],
      goals: [0, 1],
      fairPlay: [1, 1]
    },
    {
      teams: ["IT", "UY"],
      goals: [0, 1],
      fairPlay: [5, 2]
    },
    {
      teams: ["CR", "GB-ENG"],
      goals: [0, 0],
      fairPlay: [1, 2]
    },
  ],
  E: [
    {
      teams: ["CH", "EC"],
      goals: [2, 1],
      fairPlay: [1, 1]
    },
    {
      teams: ["FR", "HN"],
      goals: [3, 0],
      fairPlay: [3, 5]
    },
    {
      teams: ["CH", "FR"],
      goals: [2, 5],
      fairPlay: [0, 1]
    },
    {
      teams: ["HN", "EC"],
      goals: [1, 2],
      fairPlay: [2, 3]
    },
    {
      teams: ["HN", "CH"],
      goals: [0, 3],
      fairPlay: [1, 0]
    },
    {
      teams: ["EC", "FR"],
      goals: [0, 0],
      fairPlay: [4, 0]
    },
  ],
  F: [
    {
      teams: ["AR", "BA"],
      goals: [2, 1],
      fairPlay: [1, 1]
    },
    {
      teams: ["IR", "NG"],
      goals: [0, 0],
      fairPlay: [1, 0]
    },
    {
      teams: ["AR", "IR"],
      goals: [1, 0],
      fairPlay: [0, 2]
    },
    {
      teams: ["NG", "BA"],
      goals: [1, 0],
      fairPlay: [1, 1]
    },
    {
      teams: ["NG", "AR"],
      goals: [2, 3],
      fairPlay: [2, 0]
    },
    {
      teams: ["BA", "IR"],
      goals: [3, 1],
      fairPlay: [1, 1]
    },
  ],
  G: [
    {
      teams: ["DE", "PT"],
      goals: [4, 0],
      fairPlay: [0, 4]
    },
    {
      teams: ["GH", "US"],
      goals: [1, 2],
      fairPlay: [2, 0]
    },
    {
      teams: ["DE", "GH"],
      goals: [2, 2],
      fairPlay: [0, 1]
    },
    {
      teams: ["US", "PT"],
      goals: [2, 2],
      fairPlay: [1, 0]
    },
    {
      teams: ["US", "DE"],
      goals: [0, 1],
      fairPlay: [2, 1]
    },
    {
      teams: ["PT", "GH"],
      goals: [2, 1],
      fairPlay: [1, 3]
    },
  ],
  H: [
    {
      teams: ["BE", "DZ"],
      goals: [2, 1],
      fairPlay: [1, 1]
    },
    {
      teams: ["RU", "KR"],
      goals: [1, 1],
      fairPlay: [1, 3]
    },
    {
      teams: ["BE", "RU"],
      goals: [1, 0],
      fairPlay: [2, 1]
    },
    {
      teams: ["KR", "DZ"],
      goals: [2, 4],
      fairPlay: [2, 1]
    },
    {
      teams: ["KR", "BE"],
      goals: [0, 1],
      fairPlay: [1, 4]
    },
    {
      teams: ["DZ", "RU"],
      goals: [1, 1],
      fairPlay: [3, 2]
    },
  ]
}

export const matchaf = [
  {
    goals: [3, 2],
    add: `${localeName("Penalties")} 1:1 ${localeName("ExtraTime")}`
  },
  {
    goals: [2, 0],
    add: null
  },
  {
    goals: [2, 0],
    add: null
  },
  {
    goals: [2, 1],
    add: localeName("ExtraTime")
  },
  {
    goals: [2, 1],
    add: null
  },
  {
    goals: [5, 3],
    add: `${localeName("Penalties")} 1:1 ${localeName("ExtraTime")}`
  },
  {
    goals: [1, 0],
    add: localeName("ExtraTime")
  },
  {
    goals: [2, 1],
    add: localeName("ExtraTime")
  },
]

export const matchvf = [
  {
    goals: [2, 1],
    add: null
  },
  {
    goals: [0, 1],
    add: null
  },
  {
    goals: [4, 3],
    add: `${localeName("Penalties")} 0:0 ${localeName("ExtraTime")}`
  },
  {
    goals: [1, 0],
    add: null
  },
]

export const matchhf = [
  {
    goals: [1, 7],
    add: null
  },
  {
    goals: [2, 4],
    add: `${localeName("Penalties")} 0:0 ${localeName("ExtraTime")}`
  },
]

export const match3p = {
    goals: [0, 3],
    add: null
}


export const matchf = {
    goals: [1, 0],
    add: localeName("ExtraTime")
}

export default matches