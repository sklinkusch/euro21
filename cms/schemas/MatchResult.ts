type Props = {
  aRegular: number | undefined
  bRegular: number | undefined
  aExtra: number | undefined
  bExtra: number | undefined
  aPenalties: number | undefined
  bPenalties: number | undefined
  date: string
}

const MatchResult = {
  name: 'MatchResult',
  type: 'object',
  title: 'Spielergebnis',
  fields: [
    {
      name: 'date',
      type: 'datetime',
      title: 'Datum',
      validation: (Rule: any) => Rule.required(),
    },
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
  preview: {
    select: {
      aRegular: 'goalsTeamARegular',
      bRegular: 'goalsTeamBRegular',
      aExtra: 'goalsTeamAExtra',
      bExtra: 'goalsTeamBExtra',
      aPenalties: 'goalsTeamAPenalties',
      bPenalties: 'goalsTeamBPenalties',
      date: 'date',
    },
    prepare({aRegular, bRegular, aExtra, bExtra, aPenalties, bPenalties, date}: Props) {
      const unformattedDate = new Date(date)
      const formattedDate = unformattedDate.toLocaleString('de-DE', {
        timeZone: 'Europe/Berlin',
        hour: '2-digit',
        minute: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      if (
        typeof aRegular === 'number' &&
        typeof bRegular === 'number' &&
        typeof aExtra === 'number' &&
        typeof bExtra === 'number' &&
        typeof aPenalties === 'number' &&
        typeof bPenalties === 'number'
      ) {
        return {
          title: `${aRegular}:${bRegular}, ${aExtra}:${bExtra} n.V.,${aPenalties}:${bPenalties} i.E.`,
          subtitle: formattedDate,
        }
      } else if (
        typeof aRegular === 'number' &&
        typeof bRegular === 'number' &&
        typeof aExtra === 'number' &&
        typeof bExtra === 'number'
      ) {
        return {
          title: `${aRegular}:${bRegular}, ${aExtra}:${bExtra} n.V.`,
          subtitle: formattedDate,
        }
      } else if (typeof aRegular === 'number' && typeof bRegular === 'number') {
        return {
          title: `${aRegular}:${bRegular}`,
          subtitle: formattedDate,
        }
      } else {
        return {
          title: '-:-',
          subtitle: formattedDate,
        }
      }
    },
  },
}

export default MatchResult
