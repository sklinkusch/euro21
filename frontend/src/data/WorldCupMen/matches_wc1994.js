// const locales = require("../data/locales.json")

import { localeName } from "../../components/countries"

const matches = {
  A: [
    {
      teams: ["US", "CH"],
      goals: [1, 1],
      fairPlay: [1, 2],
    },
    {
      teams: ["CO", "RO"],
      goals: [1, 3],
      fairPlay: [3, 1],
    },
    {
      teams: ["RO", "CH"],
      goals: [1, 4],
      fairPlay: [6, 0],
    },
    {
      teams: ["US", "CO"],
      goals: [2, 1],
      fairPlay: [1, 1],
    },
    {
      teams: ["US", "RO"],
      goals: [0, 1],
      fairPlay: [2, 2],
    },
    {
      teams: ["CH", "CO"],
      goals: [0, 2],
      fairPlay: [2, 3],
    }
  ],
  B: [
    {
      teams: ["CM", "SE"],
      goals: [2, 2],
      fairPlay: [1, 1],
    },
    {
      teams: ["BR", "RU"],
      goals: [2, 0],
      fairPlay: [0, 3],
    },
    {
      teams: ["BR", "CM"],
      goals: [3, 0],
      fairPlay: [1, 5],
    },
    {
      teams: ["SE", "RU"],
      goals: [3, 1],
      fairPlay: [3, 3],
    },
    {
      teams: ["RU", "CM"],
      goals: [6, 1],
      fairPlay: [3, 2],
    },
    {
      teams: ["BR", "SE"],
      goals: [1, 1],
      fairPlay: [1, 1],
    }
  ],
  C: [
    {
      teams: ["DE", "BO"],
      goals: [1, 0],
      fairPlay: [2, 7],
    },
    {
      teams: ["ES", "KR"],
      goals: [2, 2],
      fairPlay: [5, 2],
    },
    {
      teams: ["DE", "ES"],
      goals: [1, 1],
      fairPlay: [1, 3],
    },
    {
      teams: ["KR", "BO"],
      goals: [0, 0],
      fairPlay: [3, 4],
    },
    {
      teams: ["BO", "ES"],
      goals: [1, 3],
      fairPlay: [0, 2],
    },
    {
      teams: ["DE", "KR"],
      goals: [3, 2],
      fairPlay: [3, 1],
    }
  ],
  D: [
    {
      teams: ["AR", "GR"],
      goals: [4, 0],
      fairPlay: [1, 2],
    },
    {
      teams: ["NG", "BG"],
      goals: [3, 0],
      fairPlay: [1, 1],
    },
    {
      teams: ["AR", "NG"],
      goals: [2, 1],
      fairPlay: [1, 2],
    },
    {
      teams: ["BG", "GR"],
      goals: [4, 0],
      fairPlay: [4, 4],
    },
    {
      teams: ["AR", "BG"],
      goals: [0, 2],
      fairPlay: [3, 7],
    },
    {
      teams: ["GR", "NG"],
      goals: [0, 2],
      fairPlay: [2, 2],
    }
  ],
  E: [
    {
      teams: ["IT", "IE"],
      goals: [0, 1],
      fairPlay: [0, 3],
    },
    {
      teams: ["NO", "MX"],
      goals: [1, 0],
      fairPlay: [2, 1],
    },
    {
      teams: ["IT", "NO"],
      goals: [1, 0],
      fairPlay: [4, 2],
    },
    {
      teams: ["MX", "IE"],
      goals: [2, 1],
      fairPlay: [2, 2],
    },
    {
      teams: ["IE", "NO"],
      goals: [0, 0],
      fairPlay: [3, 2],
    },
    {
      teams: ["IT", "MX"],
      goals: [1, 1],
      fairPlay: [1, 3],
    }
  ],
  F: [
    {
      teams: ["BE", "MA"],
      goals: [1, 0],
      fairPlay: [2, 3],
    },
    {
      teams: ["NL", "SA"],
      goals: [2, 1],
      fairPlay: [2, 3],
    },
    {
      teams: ["BE", "NL"],
      goals: [1, 0],
      fairPlay: [1, 5],
    },
    {
      teams: ["SA", "MA"],
      goals: [2, 1],
      fairPlay: [4, 2],
    },
    {
      teams: ["MA", "NL"],
      goals: [1, 2],
      fairPlay: [5, 2],
    },
    {
      teams: ["BE", "SA"],
      goals: [0, 1],
      fairPlay: [2, 2],
    }
  ],
}

export const matchaf = [
  {
    goals: [3, 2],
    add: null,
  },
  {
    goals: [0, 3],
    add: null,
  },
  {
    goals: [1, 3],
    add: null,
  },
  {
    goals: [3, 2],
    add: null,
  },
  {
    goals: [2, 0],
    add: null,
  },
  {
    goals: [1, 0],
    add: null,
  },
  {
    goals: [1, 2],
    add: `(1:1) ${localeName("ExtraTime")}`,
  },
  {
    goals: [1, 3],
    add: `${localeName("Penalties")}, 1:1 (1:1) ${localeName("ExtraTime")}`,
  }
]

export const matchvf = [
  {
    goals: [2, 1],
    add: null,
  },
  {
    goals: [3, 2],
    add: null,
  },
  {
    goals: [2, 1],
    add: null,
  },
  {
    goals: [4, 5],
    add: `${localeName("Penalties")}, 2:2 (1:1) ${localeName("ExtraTime")}`,
  }
]

export const matchhf = [
  {
    goals: [1, 2],
    add: null,
  },
  {
    goals: [0, 1],
    add: null,
  }
]

export const match3p = {
  goals: [4, 0],
  add: null
}

export const matchf = {
  goals: [3, 2],
  add: `${localeName("Penalties")}, 0:0 ${localeName("ExtraTime")}`,
}

export default matches
