import pool from './pool.js';

export async function getAllMerchants(){
    const { rows } = await pool.query('SELECT * FROM merchants ORDER BY id ASC');
    return rows;
};

export async function getMerchant(id){
    const merchant = await pool.query('SELECT * FROM merchants WHERE id = $1', [id]);
    return merchant.rows[0];
}

export async function addMerchant(merchant){
    const test1 = await pool.query('SELECT * FROM merchants WHERE acceptor_id = $1', [merchant.acceptor_id]);
    const test2 = await pool.query('SELECT * FROM merchants WHERE legal_name = $1', [merchant.business_name]);
    if(test1.rows[0] !== undefined && test2.rows[0] !== undefined){
        return 'Acceptor ID and Business Name must be unique.';
    } else if(test1.rows[0] !== undefined){
        return 'Acceptor ID must be unique.';
    } else if(test2.rows[0] !== undefined){
        return 'Business Name must be unique.';
    }
    await pool.query('INSERT INTO merchants (legal_name, account_id, acceptor_id) VALUES ($1, $2, $3)', [merchant.business_name, merchant.account_id, merchant.acceptor_id]);
};

export async function deleteMerchant(id){
    await pool.query('DELETE FROM merchants WHERE id = $1', [id]);
};

export async function updateMerchant(id, newName){
    const test = await pool.query('SELECT * FROM merchants WHERE legal_name = $1', [newName]);
    if(test.rows[0] !== undefined){
        return 'Business Name must be unique.';
    }
    await pool.query('UPDATE merchants SET legal_name = $2 WHERE id = $1', [id, newName]);
}

export async function addProcessingProfile(id, body){
    await pool.query('INSERT INTO processing_profiles (merchant_id, market_type, terminal_id) VALUES ($1, $2, $3)', [id, body.market_type, body.terminal_id]);
}

export async function getProcessingProfiles(id){
    const { rows } = await pool.query('SELECT * FROM processing_profiles WHERE merchant_id = $1', [id]);
    return rows;
}

export async function deleteProcessingProfile(merchant_id, market_type, terminal_id){
    await pool.query(`DELETE FROM processing_profiles WHERE merchant_id = $1 AND market_type = $2 AND terminal_id = $3`, [merchant_id, market_type, terminal_id]);
}