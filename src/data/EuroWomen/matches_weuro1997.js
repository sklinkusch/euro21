// import { localeName } from "../../components/countries"

const matches = {
  A: [
    {
      teams: ["FR", "ES"],
      goals: [1, 1],
      fairPlay: [1, 1],
    },
    {
      teams: ["SE", "RU"],
      goals: [2, 1],
      fairPlay: [0, 3],
    },
    {
      teams: ["ES", "SE"],
      goals: [0, 1],
      fairPlay: [2, 1],
    },
    {
      teams: ["RU", "FR"],
      goals: [1, 3],
      fairPlay: [1, 1],
    },
    {
      teams: ["RU", "ES"],
      goals: [0, 1],
      fairPlay: [0, 2],
    },
    {
      teams: ["SE", "FR"],
      goals: [3, 0],
      fairPlay: [2, 0],
    }
  ],
  B: [
    {
      teams: ["DE", "IT"],
      goals: [1, 1],
      fairPlay: [2, 3],
    },
    {
      teams: ["DK", "NO"],
      goals: [0, 5],
      fairPlay: [0, 0],
    },
    {
      teams: ["IT", "DK"],
      goals: [2, 2],
      fairPlay: [0, 0],
    },
    {
      teams: ["NO", "DE"],
      goals: [0, 0],
      fairPlay: [0, 2],
    },
    {
      teams: ["NO", "IT"],
      goals: [0, 2],
      fairPlay: [0, 0],
    },
    {
      teams: ["DK", "DE"],
      goals: [0, 2],
      fairPlay: [0, 3],
    }
  ],
}

export const matchhf = [
  {
    goals: [0, 1],
    add: null,
  },
  {
    goals: [2, 1],
    add: null,
  }
]

export const matchf = {
  goals: [2, 0],
  add: null,
}

export default matches
