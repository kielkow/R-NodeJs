const express = require("express")
const mongoose = require("mongoose")

//Inicando o app
const app = express()

//Iniciando com o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })


//Primeira rota
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(3001)