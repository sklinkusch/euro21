// const locales = require("../data/locales.json")

import { localeName } from "../../components/countries"

const matches = {
  A: [
    {
      teams: ["DE", "JP"],
      goals: [1, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["SE", "BR"],
      goals: [0, 1],
      fairPlay: [null, null],
    },
    {
      teams: ["SE", "DE"],
      goals: [3, 2],
      fairPlay: [null, null],
    },
    {
      teams: ["BR", "JP"],
      goals: [1, 2],
      fairPlay: [null, null],
    },
    {
      teams: ["SE", "JP"],
      goals: [2, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["BR", "DE"],
      goals: [1, 6],
      fairPlay: [null, null],
    }
  ],
  B: [
    {
      teams: ["NO", "NG"],
      goals: [8, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["GB-ENG", "CA"],
      goals: [3, 2],
      fairPlay: [null, null],
    },
    {
      teams: ["NO", "GB-ENG"],
      goals: [2, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["NG", "CA"],
      goals: [3, 3],
      fairPlay: [null, null],
    },
    {
      teams: ["NO", "CA"],
      goals: [7, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["NG", "GB-ENG"],
      goals: [2, 3],
      fairPlay: [null, null],
    }
  ],
  C: [
    {
      teams: ["US", "CN"],
      goals: [3, 3],
      fairPlay: [null, null],
    },
    {
      teams: ["DK", "AU"],
      goals: [5, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["US", "DK"],
      goals: [2, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["CN", "AU"],
      goals: [4, 2],
      fairPlay: [null, null],
    },
    {
      teams: ["US", "AU"],
      goals: [4, 1],
      fairPlay: [null, null],
    },
    {
      teams: ["CN", "DK"],
      goals: [3, 1],
      fairPlay: [null, null],
    }
  ],
}

export const matchvf = [
  {
    goals: [0, 4],
    add: null,
  },
  {
    goals: [3, 1],
    add: null,
  },
  {
    goals: [3, 0],
    add: null,
  },
  {
    goals: [3, 4],
    add: `${localeName("Penalties")} 1:1 ${localeName("ExtraTime")}`,
  }
]

export const matchhf = [
  {
    goals: [0, 1],
    add: null,
  },
  {
    goals: [1, 0],
    add: null,
  }
]

export const match3p = {
  goals: [0, 2],
  add: null,
}

export const matchf = {
  goals: [2, 0],
  add: null,
}

export default matches
