import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import SECRET_KEY from "dotenv"
const prisma = new PrismaClient();

//create  a  new user
export const createUser = async (req, res) => {
    console.log(req.body)
    try {
        const { firstName, lastName, emailAddress, password, phone } = req.body;
        const phoneNumber=phone.toString()
       const hashedPassword=bcrypt.hashSync(password ,10)
        const newUser = await prisma.user.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                emailAddress: emailAddress,
                password: hashedPassword,
                phone: phoneNumber,
            }
        })
        res.status(201).json(newUser)
       
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
export const getAllUsers =async(req, res) => {
    try {
        const users= await prisma.user.findMany();
        res.status(200).json(users)
    } 
    catch (error) {
        res.status(500).json({success:false ,message:error.message})
  }
}

export const getUserById = async (req, res) => {
    const id = req.params.id
    try {
        const users = await prisma.user.findFirst({
            where: {
                id: id
            }
        })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({success:false ,message:error.message})
  }
}

export const updateUser = async (req, res) => {
    const {firstName, lastName, emailAddress, password, phone} = req.body;
    const id = req.params.id
    try{
        let updatedUser;
       
        if (firstName) [
            updatedUser = await prisma.user.update({
                where: {
                    userid: id
                },
                data: {firstName: firstName }
               }) 
        ]
        if (lastName) [
            updatedUser = await prisma.user.update({
                where: {
                    userid: id
                },
                data: {lastName:lastName}
               }) 
        ]
        if (emailAddress) [
            updatedUser = await prisma.user.update({
                where: {
                    userid: id
                },
                data: {emailAddress: emailAddress }
               }) 
        ]
        if ( password) [
            updatedUser = await prisma.user.update({
                where: {
                    userid: id
                },
                data: { password: password}
               }) 
        ]
        if (phone) [
            updatedUser = await prisma.user.update({
                where: {
                    userid: id
                },
                data:{phone: phone }
               }) 
        ]
       res.status(200).json({ updatedUser})
    } 
    catch (error) {
        res.status(500).json({success:false ,message:error.message})
  }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const deleteUser = await prisma.user.delete({
            where: {
                id:id
            },
            select: {
                firstName:true,
                lastName: true,
                emailAddress: true,
                password: true,
                phone: true,
            }

        })
        res.status(200).json(deleteUser)
    } 
    catch (error) {
        res.status(500).json({success:false ,message:error.message})
  }
}
export const loginUser = async (req, res) => {
    const { emailAddress, password } = req.body;
    try {
        const user = await prisma.user.findFirst({
            where: {
                emailAddress: emailAddress
            }
        })
        if (user) {
            const passwordMatch = bcrypt.compareSync(password, user.password)
            if (passwordMatch === true) {
               
                const token = jwt.sign({userid:user.userid}, process.env.SECRET_KEY, { expiresIn: "96h" })

                res.cookie("access_token", token)

                res.status(200).json({ success: true, data: { ...user,token} })
            } else {
                return res.status(400).json({ success: false, message: "Invalid email or password" })
    
            }
        }
        else {
            return res.status(400).json({ success: false, message: "Invalid email or password" })
        }
    }
    catch (error) {
        res.status(401).json({ success: false, message: error.message })
    }
}