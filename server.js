import express from "express"
import dotenv from "dotenv"
import deviceRoutes from "./src/routes/deviceRoutes.js"
import errorHandler from "./src/middleware/errorHandler.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use("/devices", deviceRoutes)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

