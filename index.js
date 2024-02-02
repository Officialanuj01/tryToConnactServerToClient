const express = require('express')
const app = express()
const port = 5500

app.get("/",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.json({"message":"I am connected to the backend"})
})

app.listen(port,(err)=>{
    if (err){
        return console.log(err)
    }
    console.log("server is running on the port 5500")
})