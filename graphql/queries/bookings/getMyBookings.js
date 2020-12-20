const {GraphQLList, GraphQLString} = require('graphql')
const {BookingsTypes} = require('../../types/myBookingsTypes')
const {url} = require('../../../config')
const axios = require('axios')

module.exports = {
  type: new GraphQLList(BookingsTypes),
  args:{
    token:{
      name: 'token',
      type: GraphQLString
    }
  },
  async resolve(root, params){
    try {
      const result = await axios({
        method: "GET",
        url: url.api + "/booking/myBooking",
        headers: {
          token: params.token
        },
      })
      return result.data
    } catch (error) {
      console.log(error);
      return error
    }
  }
}