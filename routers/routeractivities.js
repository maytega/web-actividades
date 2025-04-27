const express = require("express")
const routeractivities = express.Router()

let activities = require("../data/activities")

routeractivities.get("/", (req,res) => {
    res.send(activities)
})

module.exports = routeractivities