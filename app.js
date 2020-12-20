const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./graphql')
const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
  pretty: true
}))

const PORT = 4001
app.listen(PORT, ()=>{
  console.log('Running at Port ' + PORT);
})