const express = require("express")
const app = express()
const port = 8081

app.set("views", "views")
app.set("view engine", "ejs")

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

let routeractivities = require("./routers/routeractivities")
app.use("/activities", routeractivities)

app.listen(port, () => {
    console.log("Servidor activo en "+port)
})