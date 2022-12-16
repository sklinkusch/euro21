const Tournament = {
  name: 'Tournament',
  type: 'object',
  title: 'Turnier',
  fields: [
    {
      name: 'TournamentName',
      type: 'string',
      title: 'Name des Turniers',
      required: true,
    },
    {
      name: 'GroupPhase',
      type: 'array',
      title: 'Gruppenphase',
      of: [{type: 'Group'}],
    },
    {
      name: 'Round32',
      type: 'array',
      title: 'Sechzehntelfinale',
      of: [{type: 'MatchResult'}],
      validation: (Rule: any) =>
        Rule.custom((array: any[]) => {
          if (array.length === 0) {
            return true
          } else if (array.length === 16) {
            return true
          }
          return false
        }),
    },
    {
      name: 'Round16',
      type: 'array',
      title: 'Achtelfinale',
      of: [{type: 'MatchResult'}],
      validation: (Rule: any) =>
        Rule.custom((array: any[]) => {
          if (array.length === 0) {
            return true
          } else if (array.length === 8) {
            return true
          }
          return false
        }),
    },
    {
      name: 'Quarterfinal',
      type: 'array',
      title: 'Viertelfinale',
      of: [{type: 'MatchResult'}],
      validation: (Rule: any) =>
        Rule.custom((array: any[]) => {
          if (array.length === 0) {
            return true
          } else if (array.length === 4) {
            return true
          }
          return false
        }),
    },
    {
      name: 'Semifinal',
      type: 'array',
      title: 'Halbfinale',
      of: [{type: 'MatchResult'}],
      validation: (Rule: any) =>
        Rule.custom((array: any[]) => {
          if (array.length === 0) {
            return true
          } else if (array.length === 2) {
            return true
          }
          return false
        }),
    },
    {
      name: 'Place3',
      type: 'array',
      title: 'Spiel um Platz 3',
      of: [{type: 'MatchResult'}],
      validation: (Rule: any) =>
        Rule.custom((array: any[]) => {
          if (array.length === 0) {
            return true
          } else if (array.length === 1) {
            return true
          }
          return false
        }),
    },
    {
      name: 'Final',
      type: 'array',
      title: 'Finale',
      of: [{type: 'MatchResult'}],
      validation: (Rule: any) =>
        Rule.custom((array: any[]) => {
          if (array.length === 0) {
            return true
          } else if (array.length === 1) {
            return true
          }
          return false
        }),
    },
  ],
}

export default Tournament
