// const locales = require("../data/locales.json")

import { localeName } from "../components/countries"

const matches = {
  A: [
    {
      teams: ["DE", "AR"],
      goals: [11, 0],
      fairPlay: [2, 4],
    },
    {
      teams: ["JP", "GB-ENG"],
      goals: [2, 2],
      fairPlay: [0, 2],
    },
    {
      teams: ["AR", "JP"],
      goals: [0, 1],
      fairPlay: [0, 1],
    },
    {
      teams: ["GB-ENG", "DE"],
      goals: [0, 0],
      fairPlay: [2, 3],
    },
    {
      teams: ["DE", "JP"],
      goals: [2, 0],
      fairPlay: [2, 1],
    },
    {
      teams: ["GB-ENG", "AR"],
      goals: [6, 1],
      fairPlay: [1, 4],
    }
  ],
  B: [
    {
      teams: ["US", "KP"],
      goals: [2, 2],
      fairPlay: [1, 1],
    },
    {
      teams: ["NG", "SE"],
      goals: [1, 1],
      fairPlay: [0, 1],
    },
    {
      teams: ["SE", "US"],
      goals: [0, 2],
      fairPlay: [2, 0],
    },
    {
      teams: ["KP", "NG"],
      goals: [2, 0],
      fairPlay: [1, 2],
    },
    {
      teams: ["NG", "US"],
      goals: [0, 1],
      fairPlay: [1, 0],
    },
    {
      teams: ["KP", "SE"],
      goals: [1, 2],
      fairPlay: [2, 2],
    }
  ],
  C: [
    {
      teams: ["GH", "AU"],
      goals: [1, 4],
      fairPlay: [0, 3],
    },
    {
      teams: ["NO", "CA"],
      goals: [2, 1],
      fairPlay: [0, 0],
    },
    {
      teams: ["CA", "GH"],
      goals: [4, 0],
      fairPlay: [1, 3],
    },
    {
      teams: ["AU", "NO"],
      goals: [1, 1],
      fairPlay: [0, 0],
    },
    {
      teams: ["NO", "GH"],
      goals: [7, 2],
      fairPlay: [0, 2],
    },
    {
      teams: ["AU", "CA"],
      goals: [2, 2],
      fairPlay: [1, 1],
    }
  ],
  D: [
    {
      teams: ["NZ", "BR"],
      goals: [0, 5],
      fairPlay: [1, 0],
    },
    {
      teams: ["CN", "DK"],
      goals: [3, 2],
      fairPlay: [0, 2],
    },
    {
      teams: ["DK", "NZ"],
      goals: [2, 0],
      fairPlay: [0, 3],
    },
    {
      teams: ["BR", "CN"],
      goals: [4, 0],
      fairPlay: [3, 2],
    },
    {
      teams: ["CN", "NZ"],
      goals: [2, 0],
      fairPlay: [1, 2],
    },
    {
      teams: ["BR", "DK"],
      goals: [1, 0],
      fairPlay: [1, 1],
    }
  ],
}

export const matchvf = [
  {
    goals: [3, 0],
    add: null,
  },
  {
    goals: [3, 0],
    add: null,
  },
  {
    goals: [1, 0],
    add: null,
  },
  {
    goals: [3, 2],
    add: null,
  }
]

export const matchhf = [
  {
    goals: [3, 0],
    add: null,
  },
  {
    goals: [0, 4],
    add: null,
  }
]

export const match3p = {
  goals: [1, 4],
  add: null,
}

export const matchf = {
  goals: [2, 0],
  add: null,
}

export default matches
