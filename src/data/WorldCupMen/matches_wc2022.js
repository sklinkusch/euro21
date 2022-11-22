// import { localeName } from "../components/countries";

const matches = {
  A: [
    {
      teams: ["QA", "EC"],
      goals: [0, 2],
      fairPlay: [4, 2]
    },
    {
      teams: ["SN", "NL"],
      goals: [0, 2],
      fairPlay: [2, 1]
    },
    {
      teams: ["QA", "SN"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["NL", "EC"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["NL", "QA"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["EC", "SN"],
      goals: [null, null],
      fairPlay: [null, null]
    },
  ],
  B: [
    {
      teams: ["GB-ENG", "IR"],
      goals: [6, 2],
      fairPlay: [0, 2]
    },
    {
      teams: ["US", "GB-WLS"],
      goals: [1, 1] ,
      fairPlay: [4, 2]
    },
    {
      teams: ["GB-WLS", "IR"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["GB-ENG", "US"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["GB-WLS", "GB-ENG"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["IR", "US"],
      goals: [null, null],
      fairPlay: [null, null]
    },
  ],
  C: [
    {
      teams: ["AR", "SA"],
      goals: [1, 2],
      fairPlay: [0, 6]
    },
    {
      teams: ["MX", "PL"],
      goals: [0, 0],
      fairPlay: [2, 1]
    },
    {
      teams: ["PL", "SA"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["AR", "MX"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["PL", "AR"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["SA", "MX"],
      goals: [null, null],
      fairPlay: [null, null]
    },
  ],
  D: [
    {
      teams: ["DK", "TN"],
      goals: [0, 0],
      fairPlay: [2, 1]
    },
    {
      teams: ["FR", "AU"],
      goals: [4, 1],
      fairPlay: [0, 3]
    },
    {
      teams: ["TN", "AU"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["FR", "DK"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["TN", "FR"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["AU", "DK"],
      goals: [null, null],
      fairPlay: [null, null]
    },
  ],
  E: [
    {
      teams: ["DE", "JP"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["ES", "CR"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["JP", "CR"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["ES", "DE"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["JP", "ES"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["CR", "DE"],
      goals: [null, null],
      fairPlay: [null, null]
    },
  ],
  F: [
    {
      teams: ["MA", "HR"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["BE", "CA"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["BE", "MA"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["HR", "CA"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["HR", "BE"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["CA", "MA"],
      goals: [null, null],
      fairPlay: [null, null]
    },
  ],
  G: [
    {
      teams: ["BR", "RS"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["CH", "CM"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["BR", "CH"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["CM", "RS"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["CM", "BR"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["RS", "CH"],
      goals: [null, null],
      fairPlay: [null, null]
    },
  ],
  H: [
    {
      teams: ["PT", "GH"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["UY", "KR"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["PT", "UY"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["KR", "GH"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["KR", "PT"],
      goals: [null, null],
      fairPlay: [null, null]
    },
    {
      teams: ["GH", "UY"],
      goals: [null, null],
      fairPlay: [null, null]
    },
  ]
}

export const matchaf = [
  {
    goals: [null, null],
    add: null
  },
  {
    goals: [null, null],
    add: null
  },
  {
    goals: [null, null],
    add: null
  },
  {
    goals: [null, null],
    add: null
  },
  {
    goals: [null, null],
    add: null
  },
  {
    goals: [null, null],
    add: null
  },
  {
    goals: [null, null],
    add: null
  },
  {
    goals: [null, null],
    add: null
  },
]

export const matchvf = [
  {
    goals: [null, null],
    add: null
  },
  {
    goals: [null, null],
    add: null
  },
  {
    goals: [null, null],
    add: null
  },
  {
    goals: [null, null],
    add: null
  },
]

export const matchhf = [
  {
    goals: [null, null],
    add: null
  },
  {
    goals: [null, null],
    add: null
  },
]

export const match3p = {
    goals: [null, null],
    add: null
}


export const matchf = {
    goals: [null, null],
    add: null
}

export default matches