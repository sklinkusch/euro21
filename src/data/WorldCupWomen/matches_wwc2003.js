// const locales = require("../data/locales.json")

import { localeName } from "../../components/countries"

const matches = {
  A: [
    {
      teams: ["NG", "KP"],
      goals: [0, 3],
      fairPlay: [2, 2],
    },
    {
      teams: ["US", "SE"],
      goals: [3, 1],
      fairPlay: [2, 1],
    },
    {
      teams: ["SE", "KP"],
      goals: [1, 0],
      fairPlay: [1, 1],
    },
    {
      teams: ["US", "NG"],
      goals: [5, 0],
      fairPlay: [0, 1],
    },
    {
      teams: ["SE", "NG"],
      goals: [3, 0],
      fairPlay: [0, 0],
    },
    {
      teams: ["KP", "US"],
      goals: [0, 3],
      fairPlay: [2, 2],
    }
  ],
  B: [
    {
      teams: ["NO", "FR"],
      goals: [2, 0],
      fairPlay: [2, 0],
    },
    {
      teams: ["BR", "KR"],
      goals: [3, 0],
      fairPlay: [1, 2],
    },
    {
      teams: ["NO", "BR"],
      goals: [1, 4],
      fairPlay: [1, 1],
    },
    {
      teams: ["FR", "KR"],
      goals: [1, 0],
      fairPlay: [2, 2],
    },
    {
      teams: ["KR", "NO"],
      goals: [1, 7],
      fairPlay: [0, 0],
    },
    {
      teams: ["FR", "BR"],
      goals: [1, 1],
      fairPlay: [1, 1],
    }
  ],
  C: [
    {
      teams: ["DE", "CA"],
      goals: [4, 1],
      fairPlay: [2, 2],
    },
    {
      teams: ["JP", "AR"],
      goals: [6, 0],
      fairPlay: [0, 6],
    },
    {
      teams: ["DE", "JP"],
      goals: [3, 0],
      fairPlay: [1, 0],
    },
    {
      teams: ["CA", "AR"],
      goals: [3, 0],
      fairPlay: [3, 1],
    },
    {
      teams: ["CA", "JP"],
      goals: [3, 1],
      fairPlay: [1, 0],
    },
    {
      teams: ["AR", "DE"],
      goals: [1, 6],
      fairPlay: [0, 0],
    }
  ],
  D: [
    {
      teams: ["AU", "RU"],
      goals: [1, 2],
      fairPlay: [0, 2],
    },
    {
      teams: ["CN", "GH"],
      goals: [1, 0],
      fairPlay: [0, 1],
    },
    {
      teams: ["GH", "RU"],
      goals: [0, 3],
      fairPlay: [0, 0],
    },
    {
      teams: ["CN", "AU"],
      goals: [1, 1],
      fairPlay: [1, 2],
    },
    {
      teams: ["GH", "AU"],
      goals: [2, 1],
      fairPlay: [1, 1],
    },
    {
      teams: ["CN", "RU"],
      goals: [1, 0],
      fairPlay: [0, 1],
    }
  ],
}

export const matchvf = [
  {
    goals: [1, 0],
    add: null,
  },
  {
    goals: [1, 2],
    add: null,
  },
  {
    goals: [7, 1],
    add: null,
  },
  {
    goals: [0, 1],
    add: null,
  }
]

export const matchhf = [
  {
    goals: [0, 3],
    add: null,
  },
  {
    goals: [2, 1],
    add: null,
  }
]

export const match3p = {
  goals: [3, 1],
  add: null,
}

export const matchf = {
  goals: [2, 1],
  add: localeName("GoldenGoal"),
}

export default matches
