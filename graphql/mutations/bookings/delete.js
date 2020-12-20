const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} = require('graphql')
const {BookingsInputTypes, BookingsTypes} = require('../../types/myBookingsTypes')
const {url} = require('../../../config')
const axios = require('axios')

module.exports = {
  type: BookingsTypes,
  args:{
    id: {
      name: 'data',
      type: new GraphQLNonNull(GraphQLInt),
    },
    token:{
      name: 'token',
      type: GraphQLString
    }
  },
  async resolve(root, params){
    try {
      const result = await axios({
        method: "DELETE",
        url: url.api + "/booking/myBooking?id=" + params.id,
        headers: {
          token: params.token
        },
      })
      return result.data
    } catch (error) {
      return error
    }
  }
}