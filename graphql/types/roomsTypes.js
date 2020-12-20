const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} = require('graphql')
const {BookingsTypes} = require('./myBookingsTypes')
const GraphQLDate = require('graphql-date')

const roomsTypes = new GraphQLObjectType({
  name: 'roomsTypes',
  description: 'All rooms Props',
  fields: ()=> ({
    id: {type: GraphQLID},
    room_name: {type: GraphQLString},
    room_capacity: {type: GraphQLInt},
    photo: {type: GraphQLString},
    createdAt: {type: GraphQLDate},
    updatedAt: {type: GraphQLDate},
    bookings: {type: new GraphQLList(BookingsTypes)}
  })
})

module.exports = {
  roomsTypes
}