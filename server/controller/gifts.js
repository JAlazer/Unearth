import { pool } from "../config/database.js";

export default async function getGifts(req, res) {

    const giftQuery = `
        SELECT * FROM gifts ORDER BY id ASC
    `

    try {
        const giftDataResponse = await pool.query(giftQuery)
        res.status(200).json(giftDataResponse.rows)
    } catch (err) {
        res.status(409).json({error: err.message})
    }
}