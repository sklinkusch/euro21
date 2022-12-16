const Group = {
  name: 'Group',
  type: 'object',
  title: 'Gruppe',
  fields: [
    {
      name: 'identifier',
      type: 'string',
      title: 'Bezeichner',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'matchList',
      type: 'array',
      title: 'Liste der Paarungen in der Gruppe',
      of: [{type: 'Match'}],
      validation: (Rule: any) => Rule.required().min(1),
    },
  ],
}

export default Group
