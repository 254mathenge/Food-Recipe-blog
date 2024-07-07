import { Router } from "express";


// import {getAllBlogs} from "../controllers/blogs.controllers.js";


const router = Router();



import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
router.get("/",async(req, res) => {
    const id = req.params.id
    try {
        const blogs = await prisma.blog.findFirst({
            where: {
                id: id
            }
        })
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json({success:false ,message:error.message})
  }
})
router.get("/:id",async(req, res) => {
    const id = req.params.id
    try {
        const blogs = await prisma.blog.findFirst({
            where: {
                id: id
            }
        })
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json({success:false ,message:error.message})
  }
}
)

router.post("/", async (req, res) => {
    try {
        const { title, content, createdAt, authorId } = req.body;
        const newBlog = await prisma.blog.create({
            data: {
                title: title,
                content: content,
                createdAt: createdAt,
                authorId: authorId
            }
        })
        res.status(201).json(newBlog)

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
})

router.patch("/:id", async (req, res) => {
    const { title, content, createdAt, authorId } = req.body;
    const id = req.params.id

    
    try{
        let updatedBlog;

        if (title) [
            updatedBlog= await prisma.blog.update({
                where: {
                    blogid: id
                },
                data: {title: title}
               })
        ]
        if (content) [
            updatedBlog = await prisma.blog.update({
                where: {
                    blogid: id
                },
                data: {content:content}
               })
        ]
        if (createdAt) [
            updatedBlog = await prisma.blog.update({
                where: {
                    blogid: id
                },
                data: {createdAt:createdAt }
               })
        ]
        if ( authorId) [
            updatedBlog = await prisma.blog.update({
                where: {
                    blogid: id
                },
                data: { authorId:authorId}
               })
        ]

       res.status(200).json({ updatedBlog})
    }
    catch (error) {
        res.status(500).json({success:false ,message:error.message})
  }

})

router.delete("/:id",async (req, res) => {
    const id = req.params.id
    try {
        const deleteBlog = await prisma.blog.delete({
            where: {
                id:id
            },
            select: {
                title: true,
                content: true,
                createdAt: true,
                authorId:true
            }

        })
        res.status(200).json(deleteBlog)
    }
    catch (error) {
        res.status(500).json({success:false ,message:error.message})
  }
})
export default router