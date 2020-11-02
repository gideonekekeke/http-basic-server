const express = require('express')
const mongoose = require('mongoose')
const port = 5040;


const url = 'mongodb://localhost/assignmentDB'


const app = express()


mongoose.connect(url, {useNewUrlParser : true})


const con = mongoose.connection 


con.on('open', ()=>{
    console.log('connected...')
})

app.use(express.json())

const code = require('./Router/router')
app.use('/', code)




app.listen(port, ()=>{
    console.log('listening on port')
})



