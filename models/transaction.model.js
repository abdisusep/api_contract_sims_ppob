const db = require('../config/db.config');

const getBalance = async (email) => {
   const user = await getUserByEmail(email);
   const user_id = user.id;
   
   const [rows] = await db.query('SELECT SUM(CASE WHEN transaction_type = "TOPUP" THEN total_amount ELSE 0 END) - SUM(CASE WHEN transaction_type = "PAYMENT" THEN total_amount ELSE 0 END) AS balance FROM transactions WHERE user_id=?', [user_id]);
   return rows[0];
}

const insertTopup = async (email, data) => {
   const user = await getUserByEmail(email);
   const user_id = user.id;
   
   const invoice_number = await getInvoice(user_id);
   const description = 'Top Up Balance';
   const { top_up_amount } = data;

    const result = await db.query(
        'INSERT INTO transactions (user_id, invoice_number, transaction_type, description, total_amount, created_on) VALUES (?, ?, ?, ?, ?, NOW())',
        [user_id, invoice_number, description, top_up_amount]
    );

    return result;
}

const insertTransaction = async (email, data) => {
   const user = getUserByEmail(email);
   const user_id = user.id;
    // const { email, first_name, last_name, password } = data;

    // const result = await db.query(
    //     'INSERT INTO users (email, first_name, last_name, password) VALUES (?, ?, ?, ?)',
    //     [email, first_name, last_name, password]
    // );

    return 1;
}

const getTransactionHistory = async (email) => {
   const user = await getUserByEmail(email);
   const user_id = user.id;
   
   const [rows] = await db.query('SELECT invoice_number, transaction_type, description, total_amount, created_on FROM transactions WHERE user_id=?', [user_id]);
   return rows;
}

const getUserByEmail = async (email) => {
    const [rows] = await db.query('SELECT * FROM users WHERE email=?', [email]);
    return rows[0];
}

const getServiceById = async (id) => {
    const [rows] = await db.query('SELECT * FROM services WHERE id=?', [id]);
    return rows[0];
}

const getInvoice = async (user_id) => {
    const [rows] = await db.query('SELECT COUNT(*) AS count FROM transactions WHERE user_id=?', [user_id]);
    return 'INV-' + rows[0].count;
}

module.exports = {
    getBalance, insertTopup, insertTransaction, getTransactionHistory, getUserByEmail
}
