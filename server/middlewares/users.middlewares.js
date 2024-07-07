import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
 
export const validateInformation = async (res, req, next) => {
    const { firstName, lastName, emailAddress, password, phone } = req.body;

    if (!firstName) return res.status(400).json({ success: false, message: "firstName is required" })
    if(!lastName) return res.status(400).json({success:false,  message:"lastName is required"})
    if (!emailAddress) return res.status(400)({ success: false, message: "email is required" })
    if (!password) return res.status(400)({ success: false, message: "password is required" })
    if (!phone) return res.status(400)({ success: false, message: "phone is required" })
    const userWithEmail = await prisma.user.findFirst({
        where: { emailAddress:emailAddress },
    })
    if(!userWithEmail) return res.status(400)({ success: false, message: "email already taken" })
    next();
}