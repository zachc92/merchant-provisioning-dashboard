import pool from './pool.js';

export async function getAllMerchants(){
    const { rows } = await pool.query('SELECT * FROM merchants');
    return rows;
}