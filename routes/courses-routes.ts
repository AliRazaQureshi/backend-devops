import express from 'express'
import { prisma } from '../prisma/db';
const router = express.Router();

router.get('/', async (req, res) => {
    const courses = await prisma.course.findMany();
    return res.json({ courses }).status(200)
})


router.post('/', async (req, res) => {
    const body = req.body;
    console.log({ body })
    const course = await prisma.course.create({
        data: {
            title: body.title,
            description: body.description
        }
    })
    return res.json({ course }).status(201)
})

export default router;