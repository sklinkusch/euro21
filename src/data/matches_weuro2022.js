import { localeName } from "../components/countries"

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
      goals: [0, 5],
      fairPlay: [0, 0],
    },
    {
      teams: ["AT", "NO"],
      goals: [1, 0],
      fairPlay: [2, 0],
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
      goals: [0, 3],
      fairPlay: [1, 0],
    },
    {
      teams: ["DK", "ES"],
      goals: [0, 1],
      fairPlay: [1, 1],
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
      goals: [2, 1],
      fairPlay: [0, 0],
    },
    {
      teams: ["NL", "PT"],
      goals: [3, 2],
      fairPlay: [4, 3],
    },
    {
      teams: ["CH", "NL"],
      goals: [1, 4],
      fairPlay: [0, 0],
    },
    {
      teams: ["SE", "PT"],
      goals: [5, 0],
      fairPlay: [2, 1],
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
      goals: [1, 1],
      fairPlay: [1, 0],
    },
    {
      teams: ["FR", "BE"],
      goals: [2, 1],
      fairPlay: [0, 3],
    },
    {
      teams: ["IS", "FR"],
      goals: [1, 1],
      fairPlay: [2, 0],
    },
    {
      teams: ["IT", "BE"],
      goals: [0, 1],
      fairPlay: [1, 0],
    }
  ],
}

export const matchvf = [
  {
    goals: [2, 1],
    add: `${localeName("ExtraTime")}`,
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
    goals: [1, 0],
    add: `${localeName("ExtraTime")}`,
  }
]

export const matchhf = [
  {
    goals: [4, 0],
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
