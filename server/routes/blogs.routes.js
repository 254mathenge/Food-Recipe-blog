import { Router } from "express";
import { authenticateUser } from "../middlewares/auth.middleware.js"
// import { useParams } from 'react-router-dom';

// import {getAllBlogs} from "../controllers/blogs.controllers.js";

// router.get('/blogs', async (req, res) => {
//   try {
//       const blogs = await Blog.find();
//       res.json(blogs);
//   } catch (err) {
//       res.status(500).json({ message: err.message });
//   }
// });


const router = Router();



import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
router.get("/",async(req, res) => {
    const id = req.params.id
    try {
        const blogs = await prisma.blog.findMany({
            where: {
                id: id
            },
            include: {
                author: true,
            },
            orderBy: {
                createdAt: "desc",
            },
            take: 10,
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

router.post("/",authenticateUser, async (req, res) => {
    console.log("user req",req.user)

    try {

        const { title, content, createdAt } = req.body;
        const newBlog = await prisma.blog.create({
            data: {
                title: title,
                content: content,
                authorId: req.user.userid,
                createdAt: createdAt
            }
        })
        res.status(201).json(newBlog)

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
})

router.patch("/:id",authenticateUser, async (req, res) => {
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

router.delete("/:id",authenticateUser,async (req, res) => {
    const id = req.params.id
    try {
        const deleteBlog = await prisma.blog.delete({
            where: {
                blogid:id
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