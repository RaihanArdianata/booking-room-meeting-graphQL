const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} = require('graphql')
const {BookingPutTypes, BookingsTypes} = require('../../types/myBookingsTypes')
const {url} = require('../../../config')
const axios = require('axios')

module.exports = {
  type: BookingsTypes,
  args:{
    data: {
      name: 'data',
      type: new GraphQLNonNull(BookingPutTypes),
    },
    token:{
      name: 'token',
      type: GraphQLString
    },
  },
  async resolve(root, params){
    try {
      const result = await axios({
        method: "PUT",
        url: url.api + "/booking/myBooking?id=" + params.data.id,
        headers: {
          token: params.token
        },
        data: params.data
      })
      return result.data
    } catch (error) {
      return error
    }
  }
}