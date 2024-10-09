import { Router, Request, Response } from 'express';
import { Pool } from 'pg';
import mysql from 'mysql2/promise';

const router = Router();
const pool = mysql.createPool({
    host: 'localhost', // Replace with your actual database host
    user: 'root',
    database: 'product_record_play',
    password: 'Docp3627@mysql',
    port: 3306,
});

router.get('/records/:productId', async (req: Request, res: Response) => {
    const { productId } = req.params;

    try {
        const result = await pool.query(`
            SELECT * FROM records WHERE product_id = ?
        `, [productId]);
        res.json(result[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

export default router;