// const locales = require("../data/locales.json")

import { localeName } from "../../components/countries"

const matches = {
  A: [
    {
      teams: ["FR", "KR"],
      goals: [4, 0],
      fairPlay: [0, 0],
    },
    {
      teams: ["NO", "NG"],
      goals: [3, 0],
      fairPlay: [0, 2],
    },
    {
      teams: ["NG", "KR"],
      goals: [2, 0],
      fairPlay: [1, 2],
    },
    {
      teams: ["FR", "NO"],
      goals: [2, 1],
      fairPlay: [1, 1],
    },
    {
      teams: ["NG", "FR"],
      goals: [0, 1],
      fairPlay: [5, 1],
    },
    {
      teams: ["KR", "NO"],
      goals: [1, 2],
      fairPlay: [2, 0],
    }
  ],
  B: [
    {
      teams: ["DE", "CN"],
      goals: [1, 0],
      fairPlay: [1, 4],
    },
    {
      teams: ["ES", "ZA"],
      goals: [3, 1],
      fairPlay: [1, 5],
    },
    {
      teams: ["DE", "ES"],
      goals: [1, 0],
      fairPlay: [1, 0],
    },
    {
      teams: ["ZA", "CN"],
      goals: [0, 1],
      fairPlay: [1, 0],
    },
    {
      teams: ["ZA", "DE"],
      goals: [0, 4],
      fairPlay: [3, 1],
    },
    {
      teams: ["CN", "ES"],
      goals: [0, 0],
      fairPlay: [1, 0],
    }
  ],
  C: [
    {
      teams: ["AU", "IT"],
      goals: [1, 2],
      fairPlay: [1, 3],
    },
    {
      teams: ["BR", "JM"],
      goals: [3, 0],
      fairPlay: [2, 1],
    },
    {
      teams: ["AU", "BR"],
      goals: [3, 2],
      fairPlay: [0, 3],
    },
    {
      teams: ["JM", "IT"],
      goals: [0, 5],
      fairPlay: [2, 0],
    },
    {
      teams: ["JM", "IT"],
      goals: [1, 4],
      fairPlay: [1, 1],
    },
    {
      teams: ["IT", "BR"],
      goals: [0, 1],
      fairPlay: [1, 2],
    }
  ],
  D: [
    {
      teams: ["GB-ENG", "GB-SCT"],
      goals: [2, 1],
      fairPlay: [0, 2],
    },
    {
      teams: ["AR", "JP"],
      goals: [0, 0],
      fairPlay: [0, 3],
    },
    {
      teams: ["JP", "GB-SCT"],
      goals: [2, 1],
      fairPlay: [1, 1],
    },
    {
      teams: ["GB-ENG", "AR"],
      goals: [1, 0],
      fairPlay: [1, 2],
    },
    {
      teams: ["JP", "GB-ENG"],
      goals: [0, 2],
      fairPlay: [0, 0],
    },
    {
      teams: ["GB-SCT", "AR"],
      goals: [3, 3],
      fairPlay: [3, 1],
    }
  ],
  E: [
    {
      teams: ["CA", "CM"],
      goals: [1, 0],
      fairPlay: [0, 2],
    },
    {
      teams: ["NZ", "NL"],
      goals: [0, 1],
      fairPlay: [0, 0],
    },
    {
      teams: ["NL", "CM"],
      goals: [3, 1],
      fairPlay: [0, 3],
    },
    {
      teams: ["CA", "NZ"],
      goals: [2, 0],
      fairPlay: [0, 0],
    },
    {
      teams: ["NL", "CA"],
      goals: [2, 1],
      fairPlay: [2, 2],
    },
    {
      teams: ["CM", "NZ"],
      goals: [2, 1],
      fairPlay: [1, 1],
    }
  ],
  F: [
    {
      teams: ["CL", "SE"],
      goals: [0, 2],
      fairPlay: [2, 1],
    },
    {
      teams: ["US", "TH"],
      goals: [13, 0],
      fairPlay: [0, 1],
    },
    {
      teams: ["SE", "TH"],
      goals: [5, 1],
      fairPlay: [0, 2],
    },
    {
      teams: ["US", "CL"],
      goals: [3, 0],
      fairPlay: [2, 3],
    },
    {
      teams: ["SE", "US"],
      goals: [0, 2],
      fairPlay: [1, 1],
    },
    {
      teams: ["TH", "CL"],
      goals: [0, 2],
      fairPlay: [2, 0],
    }
  ],
}

export const matchaf = [
  {
    goals: [3, 0],
    add: null,
  },
  {
    goals: [4, 1],
    add: `${localeName("Penalties")} 1:1 ${localeName("ExtraTime")}`,
  },
  {
    goals: [3, 0],
    add: null,
  },
  {
    goals: [2, 1],
    add: localeName("ExtraTime"),
  },
  {
    goals: [1, 2],
    add: null,
  },
  {
    goals: [1, 0],
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
    goals: [0, 3],
    add: null,
  },
  {
    goals: [1, 2],
    add: null,
  },
  {
    goals: [0, 2],
    add: null,
  },
  {
    goals: [1, 2],
    add: null,
  }
]

export const matchhf = [
  {
    goals: [1, 2],
    add: null,
  },
  {
    goals: [1, 0],
    add: localeName("ExtraTime"),
  }
]

export const match3p = {
  goals: [1, 2],
  add: null,
}

export const matchf = {
  goals: [2, 0],
  add: null,
}

export default matches
