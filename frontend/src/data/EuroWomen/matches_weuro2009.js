import { localeName } from "../../components/countries"

const matches = {
  A: [
    {
      teams: ["UA", "NL"],
      goals: [0, 2],
      fairPlay: [3, 1],
    },
    {
      teams: ["FI", "DK"],
      goals: [1, 0],
      fairPlay: [1, 0],
    },
    {
      teams: ["UA", "DK"],
      goals: [1, 2],
      fairPlay: [2, 0],
    },
    {
      teams: ["NL", "FI"],
      goals: [1, 2],
      fairPlay: [0, 0],
    },
    {
      teams: ["FI", "UA"],
      goals: [0, 1],
      fairPlay: [1, 0],
    },
    {
      teams: ["DK", "NL"],
      goals: [1, 2],
      fairPlay: [1, 1],
    }
  ],
  B: [
    {
      teams: ["DE", "NO"],
      goals: [4, 0],
      fairPlay: [2, 1],
    },
    {
      teams: ["IS", "FR"],
      goals: [1, 3],
      fairPlay: [3, 1],
    },
    {
      teams: ["FR", "DE"],
      goals: [1, 5],
      fairPlay: [1, 1],
    },
    {
      teams: ["IS", "NO"],
      goals: [0, 1],
      fairPlay: [0, 1],
    },
    {
      teams: ["DE", "IS"],
      goals: [1, 0],
      fairPlay: [0, 1],
    },
    {
      teams: ["NO", "FR"],
      goals: [1, 1],
      fairPlay: [0, 0],
    }
  ],
  C: [
    {
      teams: ["GB-ENG", "IT"],
      goals: [1, 2],
      fairPlay: [4, 1],
    },
    {
      teams: ["SE", "RU"],
      goals: [3, 0],
      fairPlay: [0, 0],
    },
    {
      teams: ["IT", "SE"],
      goals: [0, 2],
      fairPlay: [0, 1],
    },
    {
      teams: ["GB-ENG", "RU"],
      goals: [3, 2],
      fairPlay: [0, 0],
    },
    {
      teams: ["RU", "IT"],
      goals: [0, 2],
      fairPlay: [2, 1],
    },
    {
      teams: ["SE", "GB-ENG"],
      goals: [1, 1],
      fairPlay: [2, 0],
    }
  ]
}

export const matchvf = [
  {
    goals: [2, 3],
    add: null,
  },
  {
    goals: [5, 4],
    add: `${localeName("Penalties")} 0:0 ${localeName("ExtraTime")}`,
  },
  {
    goals: [2, 1],
    add: null,
  },
  {
    goals: [1, 3],
    add: null,
  }
]

export const matchhf = [
  {
    goals: [2, 1],
    add: localeName("Penalties"),
  },
  {
    goals: [3, 1],
    add: null,
  }
]

export const matchf = {
  goals: [2, 6],
  add: null,
}

export default matches
