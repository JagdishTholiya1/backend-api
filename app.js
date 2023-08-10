const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const { addIncome, getIncomes, deleteIncome } = require('./controllers/income');
const {readdirSync} = require('fs')
const app = express()
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())
//app.use(express.static(path.join(__dirname,'./frontend/build')))
// app.get('/',(req,res)=>{
//      res.send("hellowprld")
// })
//routes 
// readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))
//app.post('api/v1/add-income', addIncome)
app.use('/api/v1', require('./routes/Transactions.js' ))

// app.use('*',function(req,res){
//     res.sendFile(path.join(__dirname,"./frontend/build/index.html"))
// })

app.get("/",(req,res)=>{
    res.setHeader("Access-Control-Allow-Credentials","true")
})

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()
