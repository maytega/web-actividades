const express = require("express")
const app = express()
const port = 8081

let routeractivities = require("./routers/routeractivities")
app.use("/routeractivities", routeractivities)

app.listen(port, () => {
    console.log("Servidor activo en "+port)
})