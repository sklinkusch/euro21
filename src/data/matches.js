// const locales = require("../data/locales.json")

import { localeName } from "../components/countries"

const matches = {
  A: [
    {
      teams: ["TR", "IT"],
      goals: [0, 3],
      fairPlay: [2, 0],
    },
    {
      teams: ["GB-WLS", "CH"],
      goals: [1, 1],
      fairPlay: [1, 2],
    },
    {
      teams: ["TR", "GB-WLS"],
      goals: [0, 2],
      fairPlay: [2, 2],
    },
    {
      teams: ["IT", "CH"],
      goals: [3, 0],
      fairPlay: [0, 2],
    },
    {
      teams: ["IT", "GB-WLS"],
      goals: [1, 0],
      fairPlay: [1, 5],
    },
    {
      teams: ["CH", "TR"],
      goals: [3, 1],
      fairPlay: [1, 3],
    }
  ],
  B: [
    {
      teams: ["DK", "FI"],
      goals: [0, 1],
      fairPlay: [0, 2],
    },
    {
      teams: ["BE", "RU"],
      goals: [3, 0],
      fairPlay: [0, 0],
    },
    {
      teams: ["FI", "RU"],
      goals: [0, 1],
      fairPlay: [2, 3],
    },
    {
      teams: ["DK", "BE"],
      goals: [1, 2],
      fairPlay: [3, 1],
    },
    {
      teams: ["FI", "BE"],
      goals: [0, 2],
      fairPlay: [0, 0],
    },
    {
      teams: ["RU", "DK"],
      goals: [1, 4],
      fairPlay: [2, 1],
    }
  ],
  C: [
    {
      teams: ["AT", "MK"],
      goals: [3, 1],
      fairPlay: [1, 2],
    },
    {
      teams: ["NL", "UA"],
      goals: [3, 2],
      fairPlay: [0, 1],
    },
    {
      teams: ["UA", "MK"],
      goals: [2, 1],
      fairPlay: [1, 2],
    },
    {
      teams: ["NL", "AT"],
      goals: [2, 0],
      fairPlay: [1, 2],
    },
    {
      teams: ["MK", "NL"],
      goals: [0, 3],
      fairPlay: [3, 0],
    },
    {
      teams: ["UA", "AT"],
      goals: [0, 1],
      fairPlay: [0, 0],
    }
  ],
  D: [
    {
      teams: ["GB-ENG", "HR"],
      goals: [1, 0],
      fairPlay: [1, 3],
    },
    {
      teams: ["GB-SCT", "CZ"],
      goals: [0, 2],
      fairPlay: [0, 0],
    },
    {
      teams: ["HR", "CZ"],
      goals: [1, 1],
      fairPlay: [1, 3],
    },
    {
      teams: ["GB-ENG", "GB-SCT"],
      goals: [0, 0],
      fairPlay: [0, 2],
    },
    {
      teams: ["CZ", "GB-ENG"],
      goals: [0, 1],
      fairPlay: [1, 0],
    },
    {
      teams: ["HR", "GB-SCT"],
      goals: [3, 1],
      fairPlay: [1, 1],
    }
  ],
  E: [
    {
      teams: ["PL", "SK"],
      goals: [1, 2],
      fairPlay: [3, 1],
    },
    {
      teams: ["ES", "SE"],
      goals: [0, 0],
      fairPlay: [0, 1],
    },
    {
      teams: ["SE", "SK"],
      goals: [1, 0],
      fairPlay: [1, 3],
    },
    {
      teams: ["ES", "PL"],
      goals: [1, 1],
      fairPlay: [2, 4],
    },
    {
      teams: ["SK", "ES"],
      goals: [0, 5],
      fairPlay: [1, 2],
    },
    {
      teams: ["SE", "PL"],
      goals: [3, 2],
      fairPlay: [1, 1],
    }
  ],
  F: [
    {
      teams: ["HU", "PT"],
      goals: [0, 3],
      fairPlay: [2, 1],
    },
    {
      teams: ["FR", "DE"],
      goals: [1, 0],
      fairPlay: [0, 1],
    },
    {
      teams: ["HU", "FR"],
      goals: [1, 1],
      fairPlay: [1, 1],
    },
    {
      teams: ["PT", "DE"],
      goals: [2, 4],
      fairPlay: [0, 2],
    },
    {
      teams: ["DE", "HU"],
      goals: [2, 2],
      fairPlay: [2, 3],
    },
    {
      teams: ["PT", "FR"],
      goals: [2, 2],
      fairPlay: [0, 4],
    }
  ],
}

export const matchaf = [
  {
    goals: [0, 4],
    add: null,
  },
  {
    goals: [2, 1],
    add: localeName("ExtraTime"),
  },
  {
    goals: [0, 2],
    add: null,
  },
  {
    goals: [1, 0],
    add: null,
  },
  {
    goals: [3, 5],
    add: localeName("ExtraTime"),
  },
  {
    goals: [4, 5],
    add: `${localeName("Penalties")}, 3:3 ${localeName("ExtraTime")}`,
  },
  {
    goals: [2, 0],
    add: null,
  },
  {
    goals: [1, 2],
    add: localeName("ExtraTime"),
  }
]

export const matchvf = [
  {
    goals: [1, 3],
    add: `${localeName("Penalties")}, 1:1 ${localeName("ExtraTime")}`,
  },
  {
    goals: [null, null],
    add: null,
  },
  {
    goals: [null, null],
    add: null,
  },
  {
    goals: [null, null],
    add: null,
  }
]

export const matchhf = [
  {
    goals: [null, null],
    add: null,
  },
  {
    goals: [null, null],
    add: null,
  }
]

export const matchf = {
  goals: [null, null],
  add: null,
}

export default matches
