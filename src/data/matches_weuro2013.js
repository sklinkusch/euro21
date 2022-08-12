import { localeName } from "../components/countries"

const matches = {
  A: [
    {
      teams: ["IT", "FI"],
      goals: [0, 0],
      fairPlay: [1, 3],
    },
    {
      teams: ["SE", "DK"],
      goals: [1, 1],
      fairPlay: [0, 2],
    },
    {
      teams: ["IT", "DK"],
      goals: [2, 1],
      fairPlay: [3, 0],
    },
    {
      teams: ["FI", "SE"],
      goals: [0, 5],
      fairPlay: [0, 3],
    },
    {
      teams: ["SE", "IT"],
      goals: [3, 1],
      fairPlay: [1, 2],
    },
    {
      teams: ["DK", "FI"],
      goals: [1, 1],
      fairPlay: [1, 1],
    }
  ],
  B: [
    {
      teams: ["NO", "IS"],
      goals: [1, 1],
      fairPlay: [1, 1],
    },
    {
      teams: ["DE", "NL"],
      goals: [0, 0],
      fairPlay: [3, 1],
    },
    {
      teams: ["NO", "NL"],
      goals: [1, 0],
      fairPlay: [0, 0],
    },
    {
      teams: ["IS", "DE"],
      goals: [0, 3],
      fairPlay: [1, 1],
    },
    {
      teams: ["NL", "IS"],
      goals: [0, 1],
      fairPlay: [2, 1],
    },
    {
      teams: ["DE", "NO"],
      goals: [0, 1],
      fairPlay: [0, 1],
    }
  ],
  C: [
    {
      teams: ["FR", "RU"],
      goals: [3, 1],
      fairPlay: [0, 2],
    },
    {
      teams: ["GB-ENG", "ES"],
      goals: [2, 3],
      fairPlay: [1, 2],
    },
    {
      teams: ["GB-ENG", "RU"],
      goals: [1, 1],
      fairPlay: [2, 0],
    },
    {
      teams: ["ES", "FR"],
      goals: [0, 1],
      fairPlay: [0, 0],
    },
    {
      teams: ["RU", "ES"],
      goals: [1, 1],
      fairPlay: [2, 0],
    },
    {
      teams: ["FR", "GB-ENG"],
      goals: [3, 0],
      fairPlay: [0, 1],
    }
  ]
}

export const matchvf = [
  {
    goals: [4, 0],
    add: null,
  },
  {
    goals: [0, 1],
    add: null,
  },
  {
    goals: [3, 1],
    add: null,
  },
  {
    goals: [2, 4],
    add: `${localeName("Penalties")} 1:1 ${localeName("ExtraTime")}`,
  }
]

export const matchhf = [
  {
    goals: [0, 1],
    add: null,
  },
  {
    goals: [4, 2],
    add: `${localeName("Penalties")} 1:1 ${localeName("ExtraTime")}`,
  }
]

export const matchf = {
  goals: [1, 0],
  add: null,
}

export default matches
