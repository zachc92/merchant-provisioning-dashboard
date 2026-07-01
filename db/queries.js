import pool from './pool.js';

export async function getAllMerchants(){
    const { rows } = await pool.query('SELECT * FROM merchants');
    return rows;
};

export async function getMerchant(id){
    const merchant = await pool.query('SELECT * FROM merchants WHERE id = $1', [id]);
    return merchant.rows[0];
}

export async function addMerchant(merchant){
    await pool.query('INSERT INTO merchants (legal_name, account_id, acceptor_id) VALUES ($1, $2, $3)', [merchant.business_name, merchant.account_id, merchant.acceptor_id]);
};

export async function addProcessingProfile(id, body){
    console.log(id, body);
    await pool.query('INSERT INTO processing_profiles (merchant_id, market_type, terminal_id) VALUES ($1, $2, $3)', [id, body.market_type, body.terminal_id]);
}

export async function getProcessingProfiles(){
    const { rows } = await pool.query('SELECT * FROM processing_profiles');
    return rows;
}