import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const saltRounds = 12


export const registerController = async (req, res) => {
    try {

        const { userName, email, password } = req.body


        if (!userName) {
            res.status(500).send({
                success: false,
                message: "Username required."
            })
        }
        if (!email) {
            res.status(500).send({
                success: false,
                message: "Email required."
            })
        }
        if (!password) {
            res.status(500).send({
                success: false,
                message: "Password required."
            })
        }
        const user = await User.findOne({ email })
        const hashPassword = await bcrypt.hash(password, saltRounds)

        if (user) {
            res.status(300).send({
                success: false,
                message: "Email is already in use."
            })
        } else {

            const newUser =await  new User({
                userName,
                email,
                password: hashPassword
            }).save()

           return res.status(201).send({
                success: true,
                message: "User successfully created.",
                newUser
            })
        }



    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if (!user) return res.status(400).json({ message: "User does not exist" })

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) return res.status(400).json({ message: "Password is incorrect" })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY)
        delete user.password
        res.status(200).json({ token, user })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}