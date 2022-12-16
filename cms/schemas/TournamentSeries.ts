const TournamentSeries = {
  name: 'TournamentSeries',
  type: 'document',
  title: 'Turnierserie',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tournaments',
      title: 'Turniere',
      type: 'array',
      of: [{type: 'Tournament'}],
    },
  ],
}

export default TournamentSeries
