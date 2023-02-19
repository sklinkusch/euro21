// const locales = require("../data/locales.json")

import { localeName } from "../../components/countries"

const matches = {
  A: [
    {
      teams: ["CN", "NO"],
      goals: [4, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["DK", "NZ"],
      goals: [3, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["NO", "NZ"],
      goals: [4, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["CN", "DK"],
      goals: [2, 2],
      fairPlay: [null, null],
    },
    {
      teams: ["CN", "NZ"],
      goals: [4, 1],
      fairPlay: [null, null],
    },
    {
      teams: ["NO", "DK"],
      goals: [2, 1],
      fairPlay: [null, null],
    }
  ],
  B: [
    {
      teams: ["JP", "BR"],
      goals: [0, 1],
      fairPlay: [null, null],
    },
    {
      teams: ["SE", "US"],
      goals: [2, 3],
      fairPlay: [null, null],
    },
    {
      teams: ["JP", "SE"],
      goals: [0, 8],
      fairPlay: [null, null],
    },
    {
      teams: ["BR", "US"],
      goals: [0, 5],
      fairPlay: [null, null],
    },
    {
      teams: ["JP", "US"],
      goals: [0, 3],
      fairPlay: [null, null],
    },
    {
      teams: ["BR", "SE"],
      goals: [0, 2],
      fairPlay: [null, null],
    }
  ],
  C: [
    {
      teams: ["DE", "NG"],
      goals: [4, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["TW-OLY", "IT"],
      goals: [0, 5],
      fairPlay: [null, null],
    },
    {
      teams: ["IT", "NG"],
      goals: [1, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["TW-OLY", "DE"],
      goals: [0, 3],
      fairPlay: [null, null],
    },
    {
      teams: ["TW-OLY", "NG"],
      goals: [2, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["IT", "DE"],
      goals: [0, 2],
      fairPlay: [null, null],
    }
  ],
}

export const matchvf = [
  {
    goals: [1, 2],
    add: localeName("ExtraTime"),
  },
  {
    goals: [0, 1],
    add: null,
  },
  {
    goals: [3, 2],
    add: localeName("ExtraTime"),
  },
  {
    goals: [7, 0],
    add: null,
  }
]

export const matchhf = [
  {
    goals: [2, 5],
    add: null,
  },
  {
    goals: [1, 4],
    add: null,
  }
]

export const match3p = {
  goals: [4, 0],
  add: null,
}

export const matchf = {
  goals: [2, 1],
  add: null,
}

export default matches
