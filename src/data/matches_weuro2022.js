// const locales = require("../data/locales.json")

const matches = {
  A: [
    {
      teams: ["GB-ENG", "AT"],
      goals: [1, 0],
      fairPlay: [0, 0],
    },
    {
      teams: ["NO", "GB-NIR"],
      goals: [4, 1],
      fairPlay: [0, 1],
    },
    {
      teams: ["AT", "GB-NIR"],
      goals: [2, 0],
      fairPlay: [0, 0],
    },
    {
      teams: ["GB-ENG", "NO"],
      goals: [8, 0],
      fairPlay: [0, 3],
    },
    {
      teams: ["GB-NIR", "GB-ENG"],
      goals: [null, null],
      fairPlay: [null, null],
    },
    {
      teams: ["AT", "NO"],
      goals: [null, null],
      fairPlay: [null, null],
    }
  ],
  B: [
    {
      teams: ["ES", "FI"],
      goals: [4, 1],
      fairPlay: [1, 1],
    },
    {
      teams: ["DE", "DK"],
      goals: [4, 0],
      fairPlay: [3, 4],
    },
    {
      teams: ["DK", "FI"],
      goals: [1, 0],
      fairPlay: [1, 0],
    },
    {
      teams: ["DE", "ES"],
      goals: [2, 0],
      fairPlay: [2, 0],
    },
    {
      teams: ["FI", "DE"],
      goals: [null, null],
      fairPlay: [null, null],
    },
    {
      teams: ["DK", "ES"],
      goals: [null, null],
      fairPlay: [null, null],
    }
  ],
  C: [
    {
      teams: ["PT", "CH"],
      goals: [2, 2],
      fairPlay: [0, 3],
    },
    {
      teams: ["NL", "SE"],
      goals: [1, 1],
      fairPlay: [0, 0],
    },
    {
      teams: ["SE", "CH"],
      goals: [null, null],
      fairPlay: [null, null],
    },
    {
      teams: ["NL", "PT"],
      goals: [null, null],
      fairPlay: [null, null],
    },
    {
      teams: ["CH", "NL"],
      goals: [null, null],
      fairPlay: [null, null],
    },
    {
      teams: ["SE", "PT"],
      goals: [null, null],
      fairPlay: [null, null],
    }
  ],
  D: [
    {
      teams: ["BE", "IS"],
      goals: [1, 1],
      fairPlay: [1, 1],
    },
    {
      teams: ["FR", "IT"],
      goals: [5, 1],
      fairPlay: [0, 2],
    },
    {
      teams: ["IT", "IS"],
      goals: [null, null],
      fairPlay: [null, null],
    },
    {
      teams: ["FR", "BE"],
      goals: [null, null],
      fairPlay: [null, null],
    },
    {
      teams: ["IS", "FR"],
      goals: [null, null],
      fairPlay: [null, null],
    },
    {
      teams: ["IT", "BE"],
      goals: [null, null],
      fairPlay: [null, null],
    }
  ],
}

export const matchvf = [
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
