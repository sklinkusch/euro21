import { localeName } from "../../components/countries"

const matches = {
  A: [
    {
      teams: ["NL", "NO"],
      goals: [1, 0],
      fairPlay: [1, 1],
    },
    {
      teams: ["DK", "BE"],
      goals: [1, 0],
      fairPlay: [4, 1],
    },
    {
      teams: ["NO", "BE"],
      goals: [0, 2],
      fairPlay: [1, 2],
    },
    {
      teams: ["NL", "DK"],
      goals: [1, 0],
      fairPlay: [0, 3],
    },
    {
      teams: ["BE", "NL"],
      goals: [1, 2],
      fairPlay: [1, 4],
    },
    {
      teams: ["NO", "DK"],
      goals: [0, 1],
      fairPlay: [1, 0],
    }
  ],
  B: [
    {
      teams: ["IT", "RU"],
      goals: [1, 2],
      fairPlay: [2, 1],
    },
    {
      teams: ["DE", "SE"],
      goals: [0, 0],
      fairPlay: [1, 0],
    },
    {
      teams: ["SE", "RU"],
      goals: [2, 0],
      fairPlay: [1, 2],
    },
    {
      teams: ["DE", "IT"],
      goals: [2, 1],
      fairPlay: [3, 5],
    },
    {
      teams: ["RU", "DE"],
      goals: [0, 2],
      fairPlay: [1, 0],
    },
    {
      teams: ["SE", "IT"],
      goals: [2, 3],
      fairPlay: [0, 2],
    }
  ],
  C: [
    {
      teams: ["AT", "CH"],
      goals: [1, 0],
      fairPlay: [2, 4],
    },
    {
      teams: ["FR", "IS"],
      goals: [1, 0],
      fairPlay: [1, 2],
    },
    {
      teams: ["IS", "CH"],
      goals: [1, 2],
      fairPlay: [1, 1],
    },
    {
      teams: ["FR", "AT"],
      goals: [1, 1],
      fairPlay: [1, 1],
    },
    {
      teams: ["CH", "FR"],
      goals: [1, 1],
      fairPlay: [3, 5],
    },
    {
      teams: ["IS", "AT"],
      goals: [0, 3],
      fairPlay: [1, 1],
    }
  ],
  D: [
    {
      teams: ["ES", "PT"],
      goals: [2, 0],
      fairPlay: [0, 0],
    },
    {
      teams: ["GB-ENG", "GB-SCT"],
      goals: [6, 0],
      fairPlay: [2, 1],
    },
    {
      teams: ["GB-SCT", "PT"],
      goals: [1, 2],
      fairPlay: [1, 5],
    },
    {
      teams: ["GB-ENG", "ES"],
      goals: [2, 0],
      fairPlay: [0, 2],
    },
    {
      teams: ["PT", "GB-ENG"],
      goals: [1, 2],
      fairPlay: [0, 2],
    },
    {
      teams: ["GB-SCT", "ES"],
      goals: [1, 0],
      fairPlay: [2, 1],
    }
  ],
}

export const matchvf = [
  {
    goals: [2, 0],
    add: null,
  },
  {
    goals: [1, 2],
    add: null,
  },
  {
    goals: [5, 3],
    add: `${localeName("Penalties")}, 0:0 ${localeName("ExtraTime")}`,
  },
  {
    goals: [1, 0],
    add: null,
  }
]

export const matchhf = [
  {
    goals: [3, 0],
    add: `${localeName("Penalties")}, 0:0 ${localeName("ExtraTime")}`,
  },
  {
    goals: [3, 0],
    add: null,
  }
]

export const matchf = {
  goals: [4, 2],
  add: null,
}

export default matches
