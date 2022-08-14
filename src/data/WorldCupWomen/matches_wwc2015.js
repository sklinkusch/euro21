// const locales = require("../data/locales.json")

import { localeName } from "../../components/countries"

const matches = {
  A: [
    {
      teams: ["CA", "CN"],
      goals: [1, 0],
      fairPlay: [1, 0],
    },
    {
      teams: ["NZ", "NL"],
      goals: [0, 1],
      fairPlay: [0, 2],
    },
    {
      teams: ["CN", "NL"],
      goals: [1, 0],
      fairPlay: [0, 0],
    },
    {
      teams: ["CA", "NZ"],
      goals: [0, 0],
      fairPlay: [1, 2],
    },
    {
      teams: ["NL", "CA"],
      goals: [1, 1],
      fairPlay: [1, 1],
    },
    {
      teams: ["CN", "NZ"],
      goals: [2, 2],
      fairPlay: [2, 2],
    }
  ],
  B: [
    {
      teams: ["NO", "TH"],
      goals: [4, 0],
      fairPlay: [0, 2],
    },
    {
      teams: ["DE", "CI"],
      goals: [10, 0],
      fairPlay: [0, 6],
    },
    {
      teams: ["DE", "NO"],
      goals: [1, 1],
      fairPlay: [1, 0],
    },
    {
      teams: ["CI", "TH"],
      goals: [2, 3],
      fairPlay: [1, 0],
    },
    {
      teams: ["TH", "DE"],
      goals: [0, 4],
      fairPlay: [1, 0],
    },
    {
      teams: ["CI", "NO"],
      goals: [1, 3],
      fairPlay: [1, 1],
    }
  ],
  C: [
    {
      teams: ["CM", "EC"],
      goals: [6, 0],
      fairPlay: [1, 6],
    },
    {
      teams: ["JP", "CH"],
      goals: [1, 0],
      fairPlay: [0, 3],
    },
    {
      teams: ["CH", "EC"],
      goals: [10, 1],
      fairPlay: [0, 1],
    },
    {
      teams: ["JP", "CM"],
      goals: [2, 1],
      fairPlay: [0, 1],
    },
    {
      teams: ["CH", "CM"],
      goals: [1, 2],
      fairPlay: [1, 5],
    },
    {
      teams: ["EC", "JP"],
      goals: [0, 1],
      fairPlay: [2, 1],
    }
  ],
  D: [
    {
      teams: ["SE", "NG"],
      goals: [3, 3],
      fairPlay: [0, 0],
    },
    {
      teams: ["US", "AU"],
      goals: [3, 1],
      fairPlay: [2, 0],
    },
    {
      teams: ["AU", "NG"],
      goals: [2, 0],
      fairPlay: [0, 2],
    },
    {
      teams: ["US", "SE"],
      goals: [0, 0],
      fairPlay: [0, 0],
    },
    {
      teams: ["NG", "US"],
      goals: [0, 1],
      fairPlay: [6, 0],
    },
    {
      teams: ["AU", "SE"],
      goals: [1, 1],
      fairPlay: [0, 0],
    }
  ],
  E: [
    {
      teams: ["ES", "CR"],
      goals: [1, 1],
      fairPlay: [1, 0],
    },
    {
      teams: ["BR", "KR"],
      goals: [2, 0],
      fairPlay: [0, 1],
    },
    {
      teams: ["BR", "ES"],
      goals: [1, 0],
      fairPlay: [1, 1],
    },
    {
      teams: ["KR", "CR"],
      goals: [2, 2],
      fairPlay: [3, 0],
    },
    {
      teams: ["CR", "BR"],
      goals: [0, 1],
      fairPlay: [0, 0],
    },
    {
      teams: ["KR", "ES"],
      goals: [2, 1],
      fairPlay: [1, 1],
    }
  ],
  F: [
    {
      teams: ["FR", "GB-ENG"],
      goals: [1, 0],
      fairPlay: [0, 1],
    },
    {
      teams: ["CO", "MX"],
      goals: [1, 1],
      fairPlay: [3, 1],
    },
    {
      teams: ["FR", "CO"],
      goals: [0, 2],
      fairPlay: [0, 2],
    },
    {
      teams: ["GB-ENG", "MX"],
      goals: [2, 1],
      fairPlay: [1, 1],
    },
    {
      teams: ["MX", "FR"],
      goals: [0, 5],
      fairPlay: [2, 0],
    },
    {
      teams: ["GB-ENG", "CO"],
      goals: [2, 1],
      fairPlay: [1, 3],
    }
  ],
}

export const matchaf = [
  {
    goals: [4, 1],
    add: null,
  },
  {
    goals: [1, 0],
    add: null,
  },
  {
    goals: [0, 1],
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
    goals: [1, 2],
    add: null,
  },
  {
    goals: [2, 0],
    add: null,
  },
  {
    goals: [2, 1],
    add: null,
  }
]

export const matchvf = [
  {
    goals: [5, 4],
    add: `${localeName("Penalties")}, 1:1 ${localeName("ExtraTime")}`,
  },
  {
    goals: [0, 1],
    add: null,
  },
  {
    goals: [0, 1],
    add: null,
  },
  {
    goals: [2, 1],
    add: null,
  }
]

export const matchhf = [
  {
    goals: [2, 0],
    add: null,
  },
  {
    goals: [2, 1],
    add: null,
  }
]

export const match3p = {
  goals: [0, 1],
  add: localeName("ExtraTime"),
}

export const matchf = {
  goals: [5, 2],
  add: null,
}

export default matches
