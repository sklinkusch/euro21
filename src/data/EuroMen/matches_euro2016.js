// const locales = require("../data/locales.json")

import { localeName } from "../../components/countries"

const matches = {
  A: [
    {
      teams: ["FR", "RO"],
      goals: [2, 1],
      fairPlay: [1, 3],
    },
    {
      teams: ["AL", "CH"],
      goals: [0, 1],
      fairPlay: [6, 2],
    },
    {
      teams: ["RO", "CH"],
      goals: [1, 1],
      fairPlay: [4, 2],
    },
    {
      teams: ["FR", "AL"],
      goals: [2, 0],
      fairPlay: [1, 2],
    },
    {
      teams: ["CH", "FR"],
      goals: [0, 0],
      fairPlay: [0, 2],
    },
    {
      teams: ["RO", "AL"],
      goals: [0, 1],
      fairPlay: [3, 3],
    }
  ],
  B: [
    {
      teams: ["GB-WLS", "SK"],
      goals: [2, 1],
      fairPlay: [0, 5],
    },
    {
      teams: ["GB-ENG", "RU"],
      goals: [1, 1],
      fairPlay: [1, 1],
    },
    {
      teams: ["RU", "SK"],
      goals: [1, 2],
      fairPlay: [0, 1],
    },
    {
      teams: ["GB-ENG", "GB-WLS"],
      goals: [2, 1],
      fairPlay: [0, 1],
    },
    {
      teams: ["SK", "GB-ENG"],
      goals: [0, 0],
      fairPlay: [1, 1],
    },
    {
      teams: ["RU", "GB-WLS"],
      goals: [0, 3],
      fairPlay: [1, 1],
    }
  ],
  C: [
    {
      teams: ["PL", "GB-NIR"],
      goals: [1, 0],
      fairPlay: [2, 1],
    },
    {
      teams: ["DE", "UA"],
      goals: [2, 0],
      fairPlay: [0, 1],
    },
    {
      teams: ["UA", "GB-NIR"],
      goals: [0, 2],
      fairPlay: [2, 3],
    },
    {
      teams: ["DE", "PL"],
      goals: [0, 0],
      fairPlay: [3, 3],
    },
    {
      teams: ["UA", "PL"],
      goals: [0, 1],
      fairPlay: [2, 1],
    },
    {
      teams: ["GB-NIR", "DE"],
      goals: [0, 1],
      fairPlay: [0, 0],
    }
  ],
  D: [
    {
      teams: ["TR", "HR"],
      goals: [0, 1],
      fairPlay: [3, 1],
    },
    {
      teams: ["ES", "CZ"],
      goals: [1, 0],
      fairPlay: [0, 1],
    },
    {
      teams: ["CZ", "HR"],
      goals: [2, 2],
      fairPlay: [1, 3],
    },
    {
      teams: ["ES", "TR"],
      goals: [3, 0],
      fairPlay: [1, 2],
    },
    {
      teams: ["HR", "ES"],
      goals: [2, 1],
      fairPlay: [4, 0],
    },
    {
      teams: ["CZ", "TR"],
      goals: [0, 2],
      fairPlay: [3, 2],
    }
  ],
  E: [
    {
      teams: ["IE", "SE"],
      goals: [1, 1],
      fairPlay: [2, 1],
    },
    {
      teams: ["BE", "IT"],
      goals: [0, 2],
      fairPlay: [1, 4],
    },
    {
      teams: ["IT", "SE"],
      goals: [1, 0],
      fairPlay: [2, 1],
    },
    {
      teams: ["BE", "IE"],
      goals: [3, 0],
      fairPlay: [1, 1],
    },
    {
      teams: ["IT", "IE"],
      goals: [0, 1],
      fairPlay: [4, 2],
    },
    {
      teams: ["SE", "BE"],
      goals: [0, 1],
      fairPlay: [2, 2],
    }
  ],
  F: [
    {
      teams: ["AT", "HU"],
      goals: [0, 2],
      fairPlay: [3, 1],
    },
    {
      teams: ["PT", "IS"],
      goals: [1, 1],
      fairPlay: [0, 2],
    },
    {
      teams: ["IS", "HU"],
      goals: [1, 1],
      fairPlay: [3, 3],
    },
    {
      teams: ["PT", "AT"],
      goals: [0, 0],
      fairPlay: [2, 4],
    },
    {
      teams: ["HU", "PT"],
      goals: [3, 3],
      fairPlay: [4, 0],
    },
    {
      teams: ["IS", "AT"],
      goals: [2, 1],
      fairPlay: [4, 1],
    }
  ],
}

export const matchaf = [
  {
    goals: [4, 5],
    add: `${localeName("Penalties")}, 1:1 ${localeName("ExtraTime")}`,
  },
  {
    goals: [0, 1],
    add: localeName("ExtraTime"),
  },
  {
    goals: [1, 0],
    add: null,
  },
  {
    goals: [0, 4],
    add: null,
  },
  {
    goals: [3, 0],
    add: null,
  },
  {
    goals: [2, 0],
    add: null,
  },
  {
    goals: [2, 1],
    add: null,
  },
  {
    goals: [1, 2],
    add: null,
  }
]

export const matchvf = [
  {
    goals: [3, 5],
    add: `${localeName("Penalties")}, 1:1 ${localeName("ExtraTime")}`,
  },
  {
    goals: [3, 1],
    add: null,
  },
  {
    goals: [6, 5],
    add: `${localeName("Penalties")}, 1:1 ${localeName("ExtraTime")}`,
  },
  {
    goals: [5, 2],
    add: null,
  }
]

export const matchhf = [
  {
    goals: [2, 0],
    add: null,
  },
  {
    goals: [0, 2],
    add: null,
  }
]

export const matchf = {
  goals: [1, 0],
  add: localeName("ExtraTime"),
}

export default matches
