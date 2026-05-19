import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 2,
  tables: [
    tableSchema({
        name: 'accounts',
        columns:[
            {name: 'name', type: 'string'},
            {name: 'cap', type: 'number'},
            {name: 'tap', type: 'number'},
        ]
    }),
    tableSchema({
      name: 'allocations',
      columns: [
        { name: 'income', type: 'number' },
        { name: 'created_at', type: 'number' },
      ],
    })
  ]
})