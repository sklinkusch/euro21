const MatchResult = {
  name: 'MatchResult',
  type: 'object',
  title: 'Spielergebnis',
  fields: [
    {
      name: 'goalsTeamARegular',
      type: 'number',
      title: 'Tore Team A (reguläre Spielzeit)',
      validation: (Rule: any) => Rule.integer().positive(),
    },
    {
      name: 'goalsTeamBRegular',
      type: 'number',
      title: 'Tore Team B (reguläre Spielzeit)',
      validation: (Rule: any) => Rule.integer().positive(),
    },
    {
      name: 'goalsTeamAExtra',
      type: 'number',
      title: 'Tore Team A (nach Verlängerung)',
      validation: (Rule: any) => Rule.integer().positive(),
    },
    {
      name: 'goalsTeamBExtra',
      type: 'number',
      title: 'Tore Team B (nach Verlängerung)',
      validation: (Rule: any) => Rule.integer().positive(),
    },
    {
      name: 'goalsTeamAPenalties',
      type: 'number',
      title: 'Tore Team A (im Elfmeterschießen)',
      validation: (Rule: any) => Rule.integer().positive(),
    },
    {
      name: 'goalsTeamBPenalties',
      type: 'number',
      title: 'Tore Team B (im Elfmeterschießen)',
      validation: (Rule: any) => Rule.integer().positive(),
    },
  ],
}

export default MatchResult
