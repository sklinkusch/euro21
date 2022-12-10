import { localeName } from "../../components/countries";

const matches = {
  A: [
    {
      teams: ["BR", "GB-SCT"],
      goals: [2, 1],
      fairPlay: [2, 1]
    },
    {
      teams: ["MA", "NO"],
      goals: [2, 2],
      fairPlay: [1, 0]
    },
    {
      teams: ["GB-SCT", "NO"],
      goals: [1, 1],
      fairPlay: [2, 2]
    },
    {
      teams: ["BR", "MA"],
      goals: [3, 0],
      fairPlay: [2, 2]
    },
    {
      teams: ["BR", "NO"],
      goals: [1, 2],
      fairPlay: [0, 2]
    },
    {
      teams: ["GB-SCT", "MA"],
      goals: [0, 3],
      fairPlay: [4, 1]
    },
  ],
  B: [
    {
      teams: ["IT", "CL"],
      goals: [2, 2],
      fairPlay: [2, 3]
    },
    {
      teams: ["CM", "AT"],
      goals: [1, 1] ,
      fairPlay: [1, 1]
    },
    {
      teams: ["CL", "AT"],
      goals: [1, 1],
      fairPlay: [4, 1]
    },
    {
      teams: ["IT", "CM"],
      goals: [3, 0],
      fairPlay: [2, 7]
    },
    {
      teams: ["IT", "AT"],
      goals: [2, 1],
      fairPlay: [1, 3]
    },
    {
      teams: ["CL", "CM"],
      goals: [1, 1],
      fairPlay: [4, 7]
    },
  ],
  C: [
    {
      teams: ["SA", "DK"],
      goals: [0, 1],
      fairPlay: [1, 3]
    },
    {
      teams: ["FR", "ZA"],
      goals: [3, 0],
      fairPlay: [3, 1]
    },
    {
      teams: ["FR", "SA"],
      goals: [4, 0],
      fairPlay: [5, 5]
    },
    {
      teams: ["ZA", "DK"],
      goals: [1, 1],
      fairPlay: [7, 9]
    },
    {
      teams: ["FR", "DK"],
      goals: [2, 1],
      fairPlay: [2, 2]
    },
    {
      teams: ["ZA", "SA"],
      goals: [2, 2],
      fairPlay: [2, 1]
    },
  ],
  D: [
    {
      teams: ["PY", "BG"],
      goals: [0, 0],
      fairPlay: [1, 4]
    },
    {
      teams: ["ES", "NG"],
      goals: [2, 3],
      fairPlay: [3, 1]
    },
    {
      teams: ["NG", "BG"],
      goals: [1, 0],
      fairPlay: [4, 2]
    },
    {
      teams: ["ES", "PY"],
      goals: [0, 0],
      fairPlay: [2, 2]
    },
    {
      teams: ["ES", "BG"],
      goals: [6, 1],
      fairPlay: [2, 2]
    },
    {
      teams: ["NG", "PY"],
      goals: [1, 3],
      fairPlay: [2, 0]
    },
  ],
  E: [
    {
      teams: ["KR", "MX"],
      goals: [1, 3],
      fairPlay: [4, 2]
    },
    {
      teams: ["NL", "BE"],
      goals: [0, 0],
      fairPlay: [3, 2]
    },
    {
      teams: ["BE", "MX"],
      goals: [2, 2],
      fairPlay: [4, 5]
    },
    {
      teams: ["NL", "KR"],
      goals: [5, 0],
      fairPlay: [0, 2]
    },
    {
      teams: ["BE", "KR"],
      goals: [1, 1],
      fairPlay: [1, 4]
    },
    {
      teams: ["NL", "MX"],
      goals: [2, 2],
      fairPlay: [2, 7]
    },
  ],
  F: [
    {
      teams: ["YU-BR", "IR"],
      goals: [1, 0],
      fairPlay: [2, 0]
    },
    {
      teams: ["DE", "US"],
      goals: [2, 0],
      fairPlay: [3, 2]
    },
    {
      teams: ["DE", "YU-BR"],
      goals: [2, 2],
      fairPlay: [1, 0]
    },
    {
      teams: ["US", "IR"],
      goals: [1, 2],
      fairPlay: [1, 2]
    },
    {
      teams: ["DE", "IR"],
      goals: [2, 0],
      fairPlay: [2, 1]
    },
    {
      teams: ["US", "YU-BR"],
      goals: [0, 1],
      fairPlay: [1, 2]
    },
  ],
  G: [
    {
      teams: ["GB-ENG", "TN"],
      goals: [2, 0],
      fairPlay: [1, 3]
    },
    {
      teams: ["RO", "CO"],
      goals: [1, 0],
      fairPlay: [3, 1]
    },
    {
      teams: ["CO", "TN"],
      goals: [1, 0],
      fairPlay: [1, 2],
    },
    {
      teams: ["RO", "GB-ENG"],
      goals: [2, 1],
      fairPlay: [4, 0]
    },
    {
      teams: ["RO", "TN"],
      goals: [1, 1],
      fairPlay: [0, 2]
    },
    {
      teams: ["CO", "GB-ENG"],
      goals: [0, 2],
      fairPlay: [3, 2]
    },
  ],
  H: [
    {
      teams: ["AR", "JP"],
      goals: [1, 0],
      fairPlay: [0, 3]
    },
    {
      teams: ["JM", "HR"],
      goals: [1, 3],
      fairPlay: [1, 2]
    },
    {
      teams: ["JP", "HR"],
      goals: [0, 1],
      fairPlay: [3, 2],
    },
    {
      teams: ["AR", "JM"],
      goals: [5, 0],
      fairPlay: [1, 3],
    },
    {
      teams: ["JP", "JM"],
      goals: [1, 2],
      fairPlay: [1, 2],
    },
    {
      teams: ["AR", "HR"],
      goals: [1, 0],
      fairPlay: [3, 4],
    },
  ]
}

export const matchaf = [
  {
    goals: [1, 0],
    add: null
  },
  {
    goals: [4, 1],
    add: null,
  },
  {
    goals: [1, 0],
    add: `${localeName("GoldenGoal")}`,
  },
  {
    goals: [1, 4],
    add: null,
  },
  {
    goals: [2, 1],
    add: null,
  },
  {
    goals: [2, 1],
    add: null,
  },
  {
    goals: [0, 1],
    add: null,
  },
  {
    goals: [4, 3],
    add: `${localeName("Penalties")}, 2:2 (2:2) ${localeName("ExtraTime")}`,
  },
]

export const matchvf = [
  {
    goals: [3, 4],
    add: `${localeName("Penalties")}, 0:0 (0:0) ${localeName("ExtraTime")}`,
  },
  {
    goals: [3, 2],
    add: null
  },
  {
    goals: [2, 1],
    add: null
  },
  {
    goals: [0, 3],
    add: null
  }
]

export const matchhf = [
  {
    goals: [4, 2],
    add: `${localeName("Penalties")}, 1:1 (1:1) ${localeName("ExtraTime")}`
  },
  {
    goals: [2, 1],
    add: null
  },
]

export const match3p = {
    goals: [1, 2],
    add: null
}


export const matchf = {
    goals: [0, 3],
    add: null
}

export default matches
