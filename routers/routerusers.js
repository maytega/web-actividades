const express = require("express")
const routerusers = express.Router()

let users = require("../data/users")

routerusers.post("/check", (req, res) => {
    let username = req.body.username
    let password = req.body.password

    let user = users.find(u => u.name == username && u.password == password)

    if(user == null){
        res.send("Usuario no existe")
        return
    }

    res.send(user.name+ " tiene "+user.money)
})

module.exports = routerusers