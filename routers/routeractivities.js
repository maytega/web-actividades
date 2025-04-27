const express = require("express")
const routeractivities = express.Router()

let activities = require("../data/activities")

routeractivities.get("/", (req,res) => {
    res.render("pageactividad", {acts:activities})
})

module.exports = routeractivities