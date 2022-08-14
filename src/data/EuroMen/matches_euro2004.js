// const locales = require("../data/locales.json")

import { localeName } from "../../components/countries"

const matches = {
  A: [
    {
      teams: ["PT", "GR"],
      goals: [1, 2],
      fairPlay: [2, 2],
    },
    {
      teams: ["ES", "RU"],
      goals: [1, 0],
      fairPlay: [3, 7],
    },
    {
      teams: ["GR", "ES"],
      goals: [1, 1],
      fairPlay: [5, 2],
    },
    {
      teams: ["RU", "PT"],
      goals: [0, 2],
      fairPlay: [6, 2],
    },
    {
      teams: ["ES", "PT"],
      goals: [0, 1],
      fairPlay: [3, 2],
    },
    {
      teams: ["RU", "GR"],
      goals: [2, 1],
      fairPlay: [6, 2],
    }
  ],
  B: [
    {
      teams: ["CH", "HR"],
      goals: [0, 0],
      fairPlay: [5, 5],
    },
    {
      teams: ["FR", "GB-ENG"],
      goals: [2, 1],
      fairPlay: [2, 3],
    },
    {
      teams: ["GB-ENG", "CH"],
      goals: [3, 0],
      fairPlay: [1, 4],
    },
    {
      teams: ["HR", "FR"],
      goals: [2, 2],
      fairPlay: [4, 2],
    },
    {
      teams: ["CH", "FR"],
      goals: [1, 3],
      fairPlay: [3, 1],
    },
    {
      teams: ["HR", "GB-ENG"],
      goals: [2, 4],
      fairPlay: [1, 0],
    }
  ],
  C: [
    {
      teams: ["DK", "IT"],
      goals: [0, 0],
      fairPlay: [2, 4],
    },
    {
      teams: ["SE", "BG"],
      goals: [5, 0],
      fairPlay: [2, 4],
    },
    {
      teams: ["BG", "DK"],
      goals: [0, 2],
      fairPlay: [8, 2],
    },
    {
      teams: ["IT", "SE"],
      goals: [1, 1],
      fairPlay: [3, 2],
    },
    {
      teams: ["DK", "SE"],
      goals: [2, 2],
      fairPlay: [0, 2],
    },
    {
      teams: ["IT", "BG"],
      goals: [2, 1],
      fairPlay: [1, 4],
    }
  ],
  D: [
    {
      teams: ["CZ", "LV"],
      goals: [2, 1],
      fairPlay: [0, 0],
    },
    {
      teams: ["DE", "NL"],
      goals: [1, 1],
      fairPlay: [2, 2],
    },
    {
      teams: ["LV", "DE"],
      goals: [0, 0],
      fairPlay: [2, 3],
    },
    {
      teams: ["NL", "CZ"],
      goals: [2, 3],
      fairPlay: [4, 1],
    },
    {
      teams: ["NL", "LV"],
      goals: [3, 0],
      fairPlay: [0, 1],
    },
    {
      teams: ["DE", "CZ"],
      goals: [1, 2],
      fairPlay: [3, 1],
    }
  ],
}

export const matchvf = [
  {
    goals: [6, 5],
    add: `${localeName("Penalties")}, 2:2 ${localeName("ExtraTime")}`,
  },
  {
    goals: [4, 5],
    add: `${localeName("Penalties")}, 0:0 ${localeName("ExtraTime")}`,
  },
  {
    goals: [0, 1],
    add: null,
  },
  {
    goals: [3, 0],
    add: null,
  }
]

export const matchhf = [
  {
    goals: [2, 1],
    add: null,
  },
  {
    goals: [1, 0],
    add: `${localeName("SilverGoal")}`,
  }
]

export const matchf = {
  goals: [0, 1],
  add: null,
}

export default matches
