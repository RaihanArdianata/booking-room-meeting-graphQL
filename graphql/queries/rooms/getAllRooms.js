const {GraphQLList, GraphQLString} = require('graphql')
const {roomsTypes} = require('../../types/roomsTypes')
const {url} = require('../../../config')
const axios = require('axios')

module.exports = {
  type: new GraphQLList(roomsTypes),
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
        url: url.api + "/rooms",
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