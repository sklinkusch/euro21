// const locales = require("../data/locales.json")

import { localeName } from "../components/countries"

const matches = {
  A: [
    {
      teams: ["CH", "CZ"],
      goals: [0, 1],
      fairPlay: [3, 0],
    },
    {
      teams: ["PT", "TR"],
      goals: [2, 0],
      fairPlay: [0, 3],
    },
    {
      teams: ["CZ", "PT"],
      goals: [1, 3],
      fairPlay: [1, 1],
    },
    {
      teams: ["CH", "TR"],
      goals: [1, 2],
      fairPlay: [1, 3],
    },
    {
      teams: ["CH", "PT"],
      goals: [2, 0],
      fairPlay: [4, 4],
    },
    {
      teams: ["TR", "CZ"],
      goals: [3, 2],
      fairPlay: [7, 3],
    }
  ],
  B: [
    {
      teams: ["AT", "HR"],
      goals: [0, 1],
      fairPlay: [3, 1],
    },
    {
      teams: ["DE", "PL"],
      goals: [2, 0],
      fairPlay: [1, 2],
    },
    {
      teams: ["HR", "DE"],
      goals: [2, 1],
      fairPlay: [4, 5],
    },
    {
      teams: ["AT", "PL"],
      goals: [1, 1],
      fairPlay: [2, 3],
    },
    {
      teams: ["PL", "HR"],
      goals: [0, 1],
      fairPlay: [2, 2],
    },
    {
      teams: ["AT", "DE"],
      goals: [0, 1],
      fairPlay: [3, 0],
    }
  ],
  C: [
    {
      teams: ["RO", "FR"],
      goals: [0, 0],
      fairPlay: [3, 1],
    },
    {
      teams: ["NL", "IT"],
      goals: [3, 0],
      fairPlay: [1, 3],
    },
    {
      teams: ["IT", "RO"],
      goals: [1, 1],
      fairPlay: [2, 3],
    },
    {
      teams: ["NL", "FR"],
      goals: [4, 1],
      fairPlay: [1, 2],
    },
    {
      teams: ["NL", "RO"],
      goals: [2, 0],
      fairPlay: [6, 1],
    },
    {
      teams: ["FR", "IT"],
      goals: [0, 2],
      fairPlay: [7, 3],
    }
  ],
  D: [
    {
      teams: ["ES", "RU"],
      goals: [4, 1],
      fairPlay: [0, 0],
    },
    {
      teams: ["GR", "SE"],
      goals: [0, 2],
      fairPlay: [3, 0],
    },
    {
      teams: ["SE", "ES"],
      goals: [1, 2],
      fairPlay: [1, 1],
    },
    {
      teams: ["GR", "RU"],
      goals: [0, 1],
      fairPlay: [2, 2],
    },
    {
      teams: ["GR", "ES"],
      goals: [1, 2],
      fairPlay: [3, 2],
    },
    {
      teams: ["RU", "SE"],
      goals: [2, 0],
      fairPlay: [3, 2],
    }
  ],
}

export const matchvf = [
  {
    goals: [2, 3],
    add: null,
  },
  {
    goals: [1, 3],
    add: `${localeName("ExtraTime")}`,
  },
  {
    goals: [1, 3],
    add: `${localeName("Penalties")}, 1:1 ${localeName("ExtraTime")}`,
  },
  {
    goals: [4, 2],
    add: `${localeName("Penalties")}, 0:0 ${localeName("ExtraTime")}`,
  }
]

export const matchhf = [
  {
    goals: [3, 2],
    add: null,
  },
  {
    goals: [0, 3],
    add: null,
  }
]

export const matchf = {
  goals: [0, 1],
  add: null,
}

export default matches
