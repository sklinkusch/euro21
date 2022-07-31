// import { localeName } from "../components/countries";

import { localeName } from "../components/countries"

const matches = {
  A: [
    {
      teams: ["RU", "SA"],
      goals: [5, 0],
      fairPlay: [1, 1]
    },
    {
      teams: ["EG", "UY"],
      goals: [0, 1],
      fairPlay: [2, 0]
    },
    {
      teams: ["RU", "EG"],
      goals: [3, 1],
      fairPlay: [1, 1]
    },
    {
      teams: ["UY", "SA"],
      goals: [1, 0],
      fairPlay: [0, 0]
    },
    {
      teams: ["UY", "RU"],
      goals: [3, 0],
      fairPlay: [1, 4]
    },
    {
      teams: ["SA", "EG"],
      goals: [2, 1],
      fairPlay: [0, 2]
    },
  ],
  B: [
    {
      teams: ["MA", "IR"],
      goals: [0, 1],
      fairPlay: [1, 3]
    },
    {
      teams: ["PT", "ES"],
      goals: [3, 3],
      fairPlay: [1, 1]
    },
    {
      teams: ["PT", "MA"],
      goals: [1, 0],
      fairPlay: [1, 1]
    },
    {
      teams: ["IR", "ES"],
      goals: [0, 1],
      fairPlay: [2, 0]
    },
    {
      teams: ["IR", "PT"],
      goals: [1, 1],
      fairPlay: [2, 4]
    },
    {
      teams: ["ES", "MA"],
      goals: [2, 2],
      fairPlay: [0, 6]
    },
  ],
  C: [
    {
      teams: ["FR", "AU"],
      goals: [2, 1],
      fairPlay: [1, 3]
    },
    {
      teams: ["PE", "DK"],
      goals: [0, 1],
      fairPlay: [1, 2]
    },
    {
      teams: ["DK", "AU"],
      goals: [1, 1],
      fairPlay: [2, 0]
    },
    {
      teams: ["FR", "PE"],
      goals: [1, 0],
      fairPlay: [2, 2]
    },
    {
      teams: ["DK", "FR"],
      goals: [0, 0],
      fairPlay: [1, 0]
    },
    {
      teams: ["AU", "PE"],
      goals: [0, 2],
      fairPlay: [4, 2]
    },
  ],
  D: [
    {
      teams: ["AR", "IS"],
      goals: [1, 1],
      fairPlay: [0, 0]
    },
    {
      teams: ["HR", "NG"],
      goals: [2, 0],
      fairPlay: [2, 1]
    },
    {
      teams: ["AR", "HR"],
      goals: [0, 3],
      fairPlay: [3, 4]
    },
    {
      teams: ["NG", "IS"],
      goals: [2, 0],
      fairPlay: [1, 0]
    },
    {
      teams: ["NG", "AR"],
      goals: [1, 2],
      fairPlay: [2, 3]
    },
    {
      teams: ["IS", "HR"],
      goals: [1, 2],
      fairPlay: [3, 2]
    },
  ],
  E: [
    {
      teams: ["CR", "RS"],
      goals: [0, 1],
      fairPlay: [2, 2]
    },
    {
      teams: ["BR", "CH"],
      goals: [1, 1],
      fairPlay: [1, 3]
    },
    {
      teams: ["BR", "CR"],
      goals: [2, 0],
      fairPlay: [2, 1]
    },
    {
      teams: ["RS", "CH"],
      goals: [1, 2],
      fairPlay: [4, 1]
    },
    {
      teams: ["RS", "BR"],
      goals: [0, 2],
      fairPlay: [3, 0]
    },
    {
      teams: ["CH", "CR"],
      goals: [2, 2],
      fairPlay: [3, 3]
    },
  ],
  F: [
    {
      teams: ["DE", "MX"],
      goals: [0, 1],
      fairPlay: [2, 2]
    },
    {
      teams: ["SE", "KR"],
      goals: [1, 0],
      fairPlay: [1, 2]
    },
    {
      teams: ["KR", "MX"],
      goals: [1, 2],
      fairPlay: [4, 0]
    },
    {
      teams: ["DE", "SE"],
      goals: [2, 1],
      fairPlay: [3, 2]
    },
    {
      teams: ["KR", "DE"],
      goals: [2, 0],
      fairPlay: [4, 0]
    },
    {
      teams: ["MX", "SE"],
      goals: [0, 3],
      fairPlay: [3, 2]
    },
  ],
  G: [
    {
      teams: ["BE", "PA"],
      goals: [3, 0],
      fairPlay: [3, 5]
    },
    {
      teams: ["TN", "GB-ENG"],
      goals: [1, 2],
      fairPlay: [0, 1]
    },
    {
      teams: ["BE", "TN"],
      goals: [5, 2],
      fairPlay: [0, 1]
    },
    {
      teams: ["GB-ENG", "PA"],
      goals: [6, 1],
      fairPlay: [1, 3]
    },
    {
      teams: ["GB-ENG", "BE"],
      goals: [0, 1],
      fairPlay: [0, 2]
    },
    {
      teams: ["PA", "TN"],
      goals: [1, 2],
      fairPlay: [3, 3]
    },
  ],
  H: [
    {
      teams: ["CO", "JP"],
      goals: [1, 2],
      fairPlay: [5, 1]
    },
    {
      teams: ["PL", "SN"],
      goals: [1, 2],
      fairPlay: [1, 2]
    },
    {
      teams: ["JP", "SN"],
      goals: [2, 2],
      fairPlay: [2, 3]
    },
    {
      teams: ["PL", "CO"],
      goals: [0, 3],
      fairPlay: [2, 0]
    },
    {
      teams: ["JP", "PL"],
      goals: [0, 1],
      fairPlay: [1, 0]
    },
    {
      teams: ["SN", "CO"],
      goals: [0, 1],
      fairPlay: [1, 1]
    },
  ]
}

export const matchaf = [
  {
    goals: [2, 1],
    add: null
  },
  {
    goals: [4, 3],
    add: null
  },
  {
    goals: [2, 0],
    add: null
  },
  {
    goals: [3, 2],
    add: null
  },
  {
    goals: [3, 4],
    add: `${localeName("Penalties")} 1:1 ${localeName("ExtraTime")}`
  },
  {
    goals: [3, 2],
    add: `${localeName("Penalties")} 1:1 ${localeName("ExtraTime")}`
  },
  {
    goals: [1, 0],
    add: null
  },
  {
    goals: [3, 4],
    add: `${localeName("Penalties")} 1:1 ${localeName("ExtraTime")}`
  },
]

export const matchvf = [
  {
    goals: [0, 2],
    add: null
  },
  {
    goals: [1, 2],
    add: null
  },
  {
    goals: [3, 4],
    add: `${localeName("Penalties")} 2:2 ${localeName("ExtraTime")}`
  },
  {
    goals: [0, 2],
    add: null
  },
]

export const matchhf = [
  {
    goals: [1, 0],
    add: null
  },
  {
    goals: [2, 1],
    add: localeName("ExtraTime")
  },
]

export const match3p = {
    goals: [2, 0],
    add: null
}


export const matchf = {
    goals: [4, 2],
    add: null
}

export default matches