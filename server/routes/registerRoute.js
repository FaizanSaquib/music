import express from "express"
import {registerController} from "../controllers/authControllers.js"

const route= express.Router()
route.post("/register",registerController)

export default route