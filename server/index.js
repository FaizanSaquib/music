import express from "express"
import dotenv from "dotenv"
import mongoose from 'mongoose'
import loginRoute from "./routes/loginRoute.js"
import registerRoute from "./routes/registerRoute.js"
const app= express()
app.use(express.json())
dotenv.config()

app.use("/api/v1/auth" , loginRoute)
app.use("/api/v1/auth" , registerRoute)
const PORT = process.env.PORT || 8001
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`));

}).catch((err) => console.log(err))