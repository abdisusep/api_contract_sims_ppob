const db = require('../config/db.config');

const getBalance = async (email) => {
   const user_id = getUserByEmail(email).id;
   const [rows] = await db.query('SELECT SUM(total_amount) AS balance FROM transactions WHERE transaction_type="TOPUP"');
   return rows[0];
}

const insertTopup = async (email, data) => {
    // const { email, first_name, last_name, password } = data;

    // const result = await db.query(
    //     'INSERT INTO users (email, first_name, last_name, password) VALUES (?, ?, ?, ?)',
    //     [email, first_name, last_name, password]
    // );

    return 1;
}

const insertTransaction = async (email, data) => {
    // const { email, first_name, last_name, password } = data;

    // const result = await db.query(
    //     'INSERT INTO users (email, first_name, last_name, password) VALUES (?, ?, ?, ?)',
    //     [email, first_name, last_name, password]
    // );

    return 1;
}

const getTransactionHistory = async (email) => {
   const user_id = getUserByEmail(email).id;
   const [rows] = await db.query('SELECT invoice_number, transaction_type, description, total_amount, created_on FROM transactions');
   return rows;
}

const getUserByEmail = async (email) => {
    const [rows] = await db.query('SELECT * FROM users WHERE email=?', [email]);
    return rows[0];
}

module.exports = {
    getBalance, insertTopup, insertTransaction, getTransactionHistory
}
