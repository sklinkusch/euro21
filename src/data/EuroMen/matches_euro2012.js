// const locales = require("../data/locales.json")

import { localeName } from "../../components/countries"

const matches = {
  A: [
    {
      teams: ["PL", "GR"],
      goals: [1, 1],
      fairPlay: [3, 5],
    },
    {
      teams: ["RU", "CZ"],
      goals: [4, 1],
      fairPlay: [0, 0],
    },
    {
      teams: ["GR", "CZ"],
      goals: [1, 2],
      fairPlay: [3, 3],
    },
    {
      teams: ["PL", "RU"],
      goals: [1, 1],
      fairPlay: [2, 2],
    },
    {
      teams: ["GR", "RU"],
      goals: [1, 0],
      fairPlay: [2, 4],
    },
    {
      teams: ["CZ", "PL"],
      goals: [1, 0],
      fairPlay: [3, 5],
    }
  ],
  B: [
    {
      teams: ["NL", "DK"],
      goals: [0, 1],
      fairPlay: [0, 2],
    },
    {
      teams: ["DE", "PT"],
      goals: [1, 0],
      fairPlay: [2, 2],
    },
    {
      teams: ["DK", "PT"],
      goals: [2, 3],
      fairPlay: [2, 2],
    },
    {
      teams: ["NL", "DE"],
      goals: [1, 2],
      fairPlay: [2, 1],
    },
    {
      teams: ["PT", "NL"],
      goals: [2, 1],
      fairPlay: [1, 2],
    },
    {
      teams: ["DK", "DE"],
      goals: [1, 2],
      fairPlay: [0, 0],
    }
  ],
  C: [
    {
      teams: ["ES", "IT"],
      goals: [1, 1],
      fairPlay: [3, 4],
    },
    {
      teams: ["IE", "HR"],
      goals: [1, 3],
      fairPlay: [1, 2],
    },
    {
      teams: ["IT", "HR"],
      goals: [1, 1],
      fairPlay: [2, 1],
    },
    {
      teams: ["ES", "IE"],
      goals: [4, 0],
      fairPlay: [2, 3],
    },
    {
      teams: ["HR", "ES"],
      goals: [0, 1],
      fairPlay: [6, 0],
    },
    {
      teams: ["IT", "IE"],
      goals: [2, 0],
      fairPlay: [3, 5],
    }
  ],
  D: [
    {
      teams: ["FR", "GB-ENG"],
      goals: [1, 1],
      fairPlay: [0, 2],
    },
    {
      teams: ["UA", "SE"],
      goals: [2, 1],
      fairPlay: [0, 2],
    },
    {
      teams: ["UA", "FR"],
      goals: [0, 2],
      fairPlay: [2, 3],
    },
    {
      teams: ["SE", "GB-ENG"],
      goals: [2, 3],
      fairPlay: [3, 1],
    },
    {
      teams: ["SE", "FR"],
      goals: [2, 0],
      fairPlay: [2, 1],
    },
    {
      teams: ["GB-ENG", "UA"],
      goals: [1, 0],
      fairPlay: [2, 3],
    }
  ],
}

export const matchvf = [
  {
    goals: [0, 1],
    add: null,
  },
  {
    goals: [2, 0],
    add: null,
  },
  {
    goals: [4, 2],
    add: null,
  },
  {
    goals: [2, 4],
    add: `${localeName("Penalties")} 0:0 ${localeName("ExtraTime")}`,
  }
]

export const matchhf = [
  {
    goals: [2, 4],
    add: `${localeName("Penalties")} 0:0 ${localeName("ExtraTime")}`,
  },
  {
    goals: [1, 2],
    add: null,
  }
]

export const matchf = {
  goals: [4, 0],
  add: null,
}

export default matches
