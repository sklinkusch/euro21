const Match = {
  name: 'Match',
  type: 'object',
  title: 'Spiel in der Gruppe',
  fields: [
    {
      name: 'teamA',
      type: 'Team',
      title: 'Mannschaft A',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'teamB',
      type: 'Team',
      title: 'Mannschaft B',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'goalsTeamA',
      type: 'number',
      title: 'Tore Team A',
      validation: (Rule: any) => Rule.integer().positive(),
    },
    {
      name: 'goalsTeamB',
      type: 'number',
      title: 'Tore Team B',
      validation: (Rule: any) => Rule.integer().positive(),
    },
    {
      name: 'fairPlayTeamA',
      type: 'number',
      title: 'Fairplay-Wertung Team A',
      validation: (Rule: any) => Rule.integer().positive(),
    },
    {
      name: 'fairPlayTeamB',
      type: 'number',
      title: 'Fairplay-Wertung Team B',
      validation: (Rule: any) => Rule.integer().positive(),
    },
  ],
}

export default Match
