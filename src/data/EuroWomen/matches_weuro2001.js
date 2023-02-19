import { localeName } from "../../components/countries"

const matches = {
  A: [
    {
      teams: ["DE", "SE"],
      goals: [3, 1],
      fairPlay: [2, 0],
    },
    {
      teams: ["RU", "GB-ENG"],
      goals: [1, 1],
      fairPlay: [1, 0],
    },
    {
      teams: ["DE", "RU"],
      goals: [5, 0],
      fairPlay: [0, 2],
    },
    {
      teams: ["SE", "GB-ENG"],
      goals: [4, 0],
      fairPlay: [0, 2],
    },
    {
      teams: ["GB-ENG", "DE"],
      goals: [0, 3],
      fairPlay: [0, 2],
    },
    {
      teams: ["SE", "RU"],
      goals: [1, 0],
      fairPlay: [0, 2],
    }
  ],
  B: [
    {
      teams: ["IT", "DK"],
      goals: [2, 1],
      fairPlay: [1, 2],
    },
    {
      teams: ["NO", "FR"],
      goals: [3, 0],
      fairPlay: [3, 1],
    },
    {
      teams: ["FR", "DK"],
      goals: [3, 4],
      fairPlay: [3, 0],
    },
    {
      teams: ["NO", "IT"],
      goals: [1, 1],
      fairPlay: [2, 0],
    },
    {
      teams: ["DK", "NO"],
      goals: [1, 0],
      fairPlay: [0, 0],
    },
    {
      teams: ["FR", "IT"],
      goals: [2, 0],
      fairPlay: [1, 4],
    }
  ],
}

export const matchhf = [
  {
    goals: [1, 0],
    add: null,
  },
  {
    goals: [0, 1],
    add: null,
  }
]

export const matchf = {
  goals: [1, 0],
  add: localeName("GoldenGoal"),
}

export default matches
