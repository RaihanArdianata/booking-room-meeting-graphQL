const {
  GraphQLObjectType,
  GraphQLSchema
} = require('graphql')
const mutations = require('./mutations')
const queries = require('./queries')

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'query',
    fields: queries
  }),
  mutation: new GraphQLObjectType({
    name: 'mutation',
    fields: mutations
  })
})