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

export async function createGift(req, res) {
    try{
        const data = req.body;
        const insertQuery = `INSERT INTO gifts (name, pricepoint, audience, image, description, submittedBy, submittedOn) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`
        const result = await pool.query(insertQuery, [data.name, data.pricepoint, data.audience, data.image, data.description, data.submittedby, data.submittedon]);

        console.log(`Gift added: ${result.rows[0]}`);

        res.status(201).json(result.rows[0]);
    } catch(err) {
        res.status(409).json({error: err.message})
    }
}

export async function updateGift(req, res) {
    try {
        const data = req.body;
        const id = parseInt(req.params.id)

        const updateQuery = `
        UPDATE gifts SET name = $1, pricepoint = $2, audience = $3, image = $4, description = $5, submittedBy = $6, submittedOn = $7 WHERE id = ${id}
        `;

        const result = await pool.query(updateQuery, [data.name, data.pricepoint, data.audience, data.image, data.description, data.submittedBy, data.submittedOn]);

        res.status(200).json(result.rows[0]);
    } catch(err) {
        res.status(409).json({error: err.message})
    }
}

export async function deleteGift(req, res) {
    try{
        const id = parseInt(req.params.id);
        const results = await pool.query(`DELETE FROM gifts WHERE id = ${id}`, [id]);

        res.status(200).json(results.rows[0]);
    } catch (err) {
        res.status(409).json({error: err.message})
    }
}