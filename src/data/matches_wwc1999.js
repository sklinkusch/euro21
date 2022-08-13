// const locales = require("../data/locales.json")

import { localeName } from "../components/countries"

const matches = {
  A: [
    {
      teams: ["US", "DK"],
      goals: [3, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["KP", "NG"],
      goals: [1, 2],
      fairPlay: [null, null],
    },
    {
      teams: ["US", "NG"],
      goals: [7, 1],
      fairPlay: [null, null],
    },
    {
      teams: ["KP", "DK"],
      goals: [3, 1],
      fairPlay: [null, null],
    },
    {
      teams: ["NG", "DK"],
      goals: [2, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["US", "KP"],
      goals: [3, 0],
      fairPlay: [null, null],
    }
  ],
  B: [
    {
      teams: ["BR", "MX"],
      goals: [7, 1],
      fairPlay: [null, null],
    },
    {
      teams: ["DE", "IT"],
      goals: [1, 1],
      fairPlay: [null, null],
    },
    {
      teams: ["BR", "IT"],
      goals: [2, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["DE", "MX"],
      goals: [6, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["DE", "BR"],
      goals: [3, 3],
      fairPlay: [null, null],
    },
    {
      teams: ["MX", "IT"],
      goals: [0, 2],
      fairPlay: [null, null],
    }
  ],
  C: [
    {
      teams: ["JP", "CA"],
      goals: [1, 1],
      fairPlay: [null, null],
    },
    {
      teams: ["NO", "RU"],
      goals: [2, 1],
      fairPlay: [null, null],
    },
    {
      teams: ["NO", "CA"],
      goals: [7, 1],
      fairPlay: [null, null],
    },
    {
      teams: ["JP", "RU"],
      goals: [0, 5],
      fairPlay: [null, null],
    },
    {
      teams: ["CA", "RU"],
      goals: [1, 4],
      fairPlay: [null, null],
    },
    {
      teams: ["NO", "JP"],
      goals: [4, 0],
      fairPlay: [null, null],
    }
  ],
  D: [
    {
      teams: ["CN", "SE"],
      goals: [2, 1],
      fairPlay: [null, null],
    },
    {
      teams: ["AU", "GH"],
      goals: [1, 1],
      fairPlay: [null, null],
    },
    {
      teams: ["AU", "SE"],
      goals: [1, 3],
      fairPlay: [null, null],
    },
    {
      teams: ["CN", "GH"],
      goals: [7, 0],
      fairPlay: [null, null],
    },
    {
      teams: ["CN", "AU"],
      goals: [3, 1],
      fairPlay: [null, null],
    },
    {
      teams: ["GH", "SE"],
      goals: [0, 2],
      fairPlay: [null, null],
    }
  ],
}

export const matchvf = [
  {
    goals: [2, 0],
    add: null,
  },
  {
    goals: [3, 1],
    add: null,
  },
  {
    goals: [3, 2],
    add: null,
  },
  {
    goals: [4, 3],
    add: localeName("GoldenGoal"),
  }
]

export const matchhf = [
  {
    goals: [2, 0],
    add: null,
  },
  {
    goals: [0, 5],
    add: null,
  }
]

export const match3p = {
  goals: [5, 4],
  add: `${localeName("Penalties")} 0:0 ${localeName("ExtraTime")}`,
}

export const matchf = {
  goals: [5, 4],
  add: `${localeName("Penalties")} 0:0 ${localeName("ExtraTime")}`,
}

export default matches
