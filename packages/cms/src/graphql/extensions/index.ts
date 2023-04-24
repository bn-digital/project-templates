import resolvers, { resolversConfig } from "../resolvers"
const readOnlyEntities = [
  "plugin::users-permissions.permission",
  "plugin::users-permissions.role",
  "plugin::upload.folder",
  "plugin::users-permissions.user",
]

const writeOnlyEntities = ["plugin::upload.folder"]

const schemaExtension: Graphql.ExtensionCallback = ({ nexus }) => ({
  types: [
    nexus.extendType({
      type: "Query",
      definition: t => {
        t.field("me", {
          type: "UsersPermissionsUser",
        })
      },
    }),
    nexus.extendType<"UsersPermissionsUser">({
      type: "UsersPermissionsUser",
      definition: t => {
        t.nonNull.id("id")
      },
    }),
  ],
  resolvers,
  resolversConfig,
})

export { readOnlyEntities, schemaExtension, writeOnlyEntities }
