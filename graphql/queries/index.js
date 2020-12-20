const bookingsQuery = require('./bookings')
const roomsQuery = require('./rooms')

module.exports = {
  ...bookingsQuery,
  ...roomsQuery
}