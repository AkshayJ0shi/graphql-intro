const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema/schema")
const colors = require("colors")
const connectDb = require("./config/db")
const cors = require("cors")

require("dotenv").config()
const port = process.env.PORT || 5000
const app = express()

connectDb()

app.use(cors())

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"

}))

app.listen(port, ()=> {
    console.log(port)
})