import express from 'express'
import { Client } from 'pg';

// Configure your PostgreSQL connection here
const client = new Client({
    user: 'your_database_user',
    host: 'your_database_host',
    database: 'your_database_name',
    password: 'your_database_password',
    port: 5432, // default PostgreSQL port
});

client.connect();

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM courses');
        const courses = result.rows;
        return res.status(200).json({ courses });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req, res) => {
    const { title, description } = req.body;

    try {
        const result = await client.query(
            'INSERT INTO courses (title, description) VALUES ($1, $2) RETURNING *',
            [title, description]
        );
        const course = result.rows[0];
        return res.status(201).json({ course });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
