const {
  GraphQLNonNull,
  GraphQLString
} = require('graphql')
const {BookingsInputTypes, BookingsTypes} = require('../../types/myBookingsTypes')
const {url} = require('../../../config')
const axios = require('axios')

module.exports = {
  type: BookingsTypes,
  args:{
    data: {
      name: 'data',
      type: new GraphQLNonNull(BookingsInputTypes),
    },
    token:{
      name: 'token',
      type: GraphQLString
    }
  },
  async resolve(root, params){
    try {
      const result = await axios({
        method: "POST",
        url: url.api + "/booking/newBook",
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
