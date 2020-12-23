const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./graphql')
const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  pretty: true
}))

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
  console.log('Running at Port ' + PORT);
})