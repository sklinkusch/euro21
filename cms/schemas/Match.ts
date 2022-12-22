type Props = {
  tA: string
  tB: string
  gA: number | undefined
  gB: number | undefined
  date: string
}

const Match = {
  name: 'Match',
  type: 'object',
  title: 'Spiel in der Gruppe',
  fields: [
    {
      name: 'date',
      type: 'datetime',
      title: 'Datum',
      validation: (Rule: any) => Rule.required(),
    },
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
  preview: {
    select: {
      tA: 'teamA',
      tB: 'teamB',
      gA: 'goalsTeamA',
      gB: 'goalsTeamB',
      date: 'date',
    },
    prepare({tA, tB, gA, gB, date}: Props) {
      const unformattedDate = new Date(date)
      const formattedDate = unformattedDate.toLocaleString('de-DE', {
        timeZone: 'Europe/Berlin',
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      if (typeof gA === 'number' && typeof gB === 'number') {
        return {
          title: `${tA} - ${tB}  ${gA}:${gB}`,
          subtitle: formattedDate,
        }
      }
      return {
        title: `${tA} - ${tB}   -:-`,
        subtitle: date,
      }
    },
  },
}

export default Match
