import { localeName } from "../components/countries"

const matches = {
  A: [
    {
      teams: ["GB-ENG", "FI"],
      goals: [3, 2],
      fairPlay: [0, 1],
    },
    {
      teams: ["SE", "DK"],
      goals: [1, 1],
      fairPlay: [1, 1],
    },
    {
      teams: ["GB-ENG", "DK"],
      goals: [1, 2],
      fairPlay: [3, 1],
    },
    {
      teams: ["SE", "FI"],
      goals: [0, 0],
      fairPlay: [0, 1],
    },
    {
      teams: ["GB-ENG", "SE"],
      goals: [0, 1],
      fairPlay: [2, 3],
    },
    {
      teams: ["FI", "DK"],
      goals: [2, 1],
      fairPlay: [0, 1],
    }
  ],
  B: [
    {
      teams: ["FR", "IT"],
      goals: [3, 1],
      fairPlay: [1, 0],
    },
    {
      teams: ["DE", "NO"],
      goals: [1, 0],
      fairPlay: [1, 3],
    },
    {
      teams: ["FR", "NO"],
      goals: [1, 1],
      fairPlay: [0, 0],
    },
    {
      teams: ["IT", "DE"],
      goals: [0, 4],
      fairPlay: [3, 1],
    },
    {
      teams: ["FR", "DE"],
      goals: [0, 3],
      fairPlay: [1, 1],
    },
    {
      teams: ["NO", "IT"],
      goals: [5, 3],
      fairPlay: [0, 2],
    }
  ],
}

export const matchhf = [
  {
    goals: [3, 2],
    add: localeName("ExtraTime"),
  },
  {
    goals: [4, 1],
    add: null,
  }
]

export const matchf = {
  goals: [3, 1],
  add: null,
}

export default matches
