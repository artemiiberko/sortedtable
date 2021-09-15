import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
// import { MongoClient } from "mongodb"

// const MongoClient = require("mongodb").MongoClient

// const uri =
//   "mongodb+srv://ada:ada@cluster0.tvhjm.mongodb.net/ada?retryWrites=true&w=majority"

// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

// async function run() {
//   try {
//     console.log("do")
//     await client.connect()
//     console.log("po")
//     const coll = client.db("cars").collection("cars")
//     const cursor = coll.find()
//     await cursor.forEach(console.dir)
//   } finally {
//     await client.close()
//   }
// }

// run().catch(console.dir)
// const cars = client.db().collection("cars")
// console.log(cars)

ReactDOM.render(<App />, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
