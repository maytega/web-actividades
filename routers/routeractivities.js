const express = require("express")
const routeractivities = express.Router()

let activities = require("../data/activities")
let users = require("../data/users")

routeractivities.get("/", (req,res) => {
    res.render("pageactividad", {acts:activities})
})

routeractivities.post("/donacion", (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let activityname = req.body.activityname
    let money = parseFloat(req.body.money)

    let user = users.find(u => u.name == username && u.password == password)
    if(user == null){
        res.send("Usuario no existe")
        return
    }

    if(user.money <= money){
        res.send("No hay suficiente dinero")
        return
    }

    let activity = activities.find(a => a.name == activityname)
    if(activity == null){
        res.send("Actividad no existe")
        return
    }
    user.money = user.money - money
    activity.money = activity.money + money
    res.redirect("/activities")
})

module.exports = routeractivities