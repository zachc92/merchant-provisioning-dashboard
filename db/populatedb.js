import { Client } from 'pg';

const SQL = `
CREATE TABLE merchants (
    id SERIAL PRIMARY KEY,
    legal_name VARCHAR ( 255 ) NOT NULL,
    account_id VARCHAR ( 10 ) NOT NULL,
    acceptor_id VARCHAR ( 50 ) NOT NULL,
    onboarding_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE processing_profiles (
    id SERIAL PRIMARY KEY,
    merchant_id INT NOT NULL REFERENCES merchants(id) ON DELETE CASCADE,
    market_type VARCHAR(50) NOT NULL,
    terminal_id VARCHAR(4) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO merchants (legal_name, account_id, acceptor_id)
    VALUES
        ('Store #1', '88776655', '11223344')
`;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/merchants`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();