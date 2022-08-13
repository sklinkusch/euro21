// const locales = require("../data/locales.json")

import { localeName } from "../components/countries"

const matches = {
  A: [
    {
      teams: ["NG", "FR"],
      goals: [0, 1],
      fairPlay: [0, 0],
    },
    {
      teams: ["DE", "CA"],
      goals: [2, 1],
      fairPlay: [2, 0],
    },
    {
      teams: ["CA", "FR"],
      goals: [0, 4],
      fairPlay: [1, 1],
    },
    {
      teams: ["DE", "NG"],
      goals: [1, 0],
      fairPlay: [1, 1],
    },
    {
      teams: ["FR", "DE"],
      goals: [2, 4],
      fairPlay: [6, 2],
    },
    {
      teams: ["CA", "NG"],
      goals: [0, 1],
      fairPlay: [0, 1],
    }
  ],
  B: [
    {
      teams: ["JP", "NZ"],
      goals: [2, 1],
      fairPlay: [0, 3],
    },
    {
      teams: ["MX", "GB-ENG"],
      goals: [1, 1],
      fairPlay: [1, 1],
    },
    {
      teams: ["JP", "MX"],
      goals: [4, 0],
      fairPlay: [0, 0],
    },
    {
      teams: ["NZ", "GB-ENG"],
      goals: [1, 2],
      fairPlay: [0, 0],
    },
    {
      teams: ["GB-ENG", "JP"],
      goals: [2, 0],
      fairPlay: [0, 0],
    },
    {
      teams: ["NZ", "MX"],
      goals: [2, 2],
      fairPlay: [1, 1],
    }
  ],
  C: [
    {
      teams: ["CO", "SE"],
      goals: [0, 1],
      fairPlay: [0, 1],
    },
    {
      teams: ["US", "KP"],
      goals: [2, 0],
      fairPlay: [0, 0],
    },
    {
      teams: ["KP", "SE"],
      goals: [0, 1],
      fairPlay: [0, 1],
    },
    {
      teams: ["US", "CO"],
      goals: [3, 0],
      fairPlay: [1, 0],
    },
    {
      teams: ["SE", "US"],
      goals: [2, 1],
      fairPlay: [1, 1],
    },
    {
      teams: ["KP", "CO"],
      goals: [0, 0],
      fairPlay: [0, 0],
    }
  ],
  D: [
    {
      teams: ["NO", "GQ"],
      goals: [1, 0],
      fairPlay: [2, 0],
    },
    {
      teams: ["BR", "AU"],
      goals: [1, 0],
      fairPlay: [0, 0],
    },
    {
      teams: ["AU", "GQ"],
      goals: [3, 2],
      fairPlay: [1, 3],
    },
    {
      teams: ["BR", "NO"],
      goals: [3, 0],
      fairPlay: [1, 0],
    },
    {
      teams: ["GQ", "BR"],
      goals: [0, 3],
      fairPlay: [3, 2],
    },
    {
      teams: ["AU", "NO"],
      goals: [2, 1],
      fairPlay: [2, 1],
    }
  ],
}

export const matchvf = [
  {
    goals: [3, 4],
    add: `${localeName("Penalties")}, 1:1 ${localeName("ExtraTime")}`,
  },
  {
    goals: [0, 1],
    add: localeName("ExtraTime"),
  },
  {
    goals: [3, 1],
    add: null,
  },
  {
    goals: [3, 5],
    add: `${localeName("Penalties")} 2:2 ${localeName("ExtraTime")}`,
  }
]

export const matchhf = [
  {
    goals: [1, 3],
    add: null,
  },
  {
    goals: [3, 1],
    add: null,
  }
]

export const match3p = {
  goals: [2, 1],
  add: null,
}

export const matchf = {
  goals: [3, 1],
  add: `${localeName("Penalties")} 2:2 ${localeName("ExtraTime")}`,
}

export default matches
