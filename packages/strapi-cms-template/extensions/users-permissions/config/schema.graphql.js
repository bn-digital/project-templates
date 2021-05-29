module.exports = {
  definition: `
    type Employee {
      id: ID!
      firstName: String
      lastName: String
      photo: UploadFile
    }
    extend type Query {
      employees: [Employee]!
    }
   `,
  resolver: {
    Query: {
      employees: {
        resolverOf: 'plugins::users-permissions.user.employees',
        resolver: 'plugins::users-permissions.user.employees',
      },
    },
  },
}
