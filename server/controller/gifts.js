import { pool } from "../config/database.js";

export async function getGifts(req, res) {

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

export async function getGiftById(req, res) {
    try {
        const selectQuery = `
            SELECT name, pricePoint, audience, image, description, submittedBy, submittedOn
            FROM gifts
            WHERE id=${req.params.giftId}
        `
        const result = await pool.query(selectQuery);

        console.log(`The query result: ${result.rows[0]}`);
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(409).json( { error: err.message} )
    }
}