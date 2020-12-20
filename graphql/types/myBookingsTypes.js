const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} = require('graphql')

const GraphQLDate = require('graphql-date')

const BookingsTypes = new GraphQLObjectType({
  name: 'MyBookings',
  description: 'All user booking',
  fields: ()=> ({
    id: {type: GraphQLID},
    user_id:{type: GraphQLID},
    room_id:{type: GraphQLID},
    total_person:{type: GraphQLInt},
    booking_time:{type: GraphQLString},
    noted:{type: GraphQLString},
    check_in_time:{type: GraphQLString},
    check_out_time:{type: GraphQLString},
    createdAt:{type: GraphQLString},
    updatedAt:{type: GraphQLString},
  })
})

const BookingsInputTypes = new GraphQLInputObjectType({
  name: 'MyBookingInput',
  description: 'Input new bookings room',
  fields: ()=> ({
    room_id:{type: GraphQLInt},
    total_person:{type: GraphQLInt},
    booking_time:{type: GraphQLDate},
    noted:{type: GraphQLString},
    check_out_time:{type: GraphQLDate},
  })
})

const BookingPutTypes = new GraphQLInputObjectType({
  name: 'BookingPutTypes',
  description: 'put check in time',
  fields: ()=> ({
    id:{type: GraphQLInt},
    check_in_time:{type: GraphQLDate},
  })
})

module.exports = {
  BookingsTypes,
  BookingsInputTypes,
  BookingPutTypes
}