const db = require('../config/db.config');

const getBalance = async (email) => {
   // const [rows] = await db.query('SELECT 100000 AS balanceers');
   return 1;
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
   // const [rows] = await db.query('SELECT service_code, service_name, service_icon, service_tarif FROM services');
   return 1;
}

module.exports = {
    getBalance, insertTopup, insertTransaction, getTransactionHistory
}
