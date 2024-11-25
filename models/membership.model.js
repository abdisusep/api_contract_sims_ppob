const db = require('../config/db.config');

const registerUser = async (data) => {
    const { email, first_name, last_name, password } = data;

    const result = await db.query(
        'INSERT INTO users (email, first_name, last_name, password) VALUES (?, ?, ?, ?)',
        [email, first_name, last_name, password]
    );

    return result;
 }

const checkEmail = async (email) => {
    const [rows] = await db.query('SELECT email FROM users WHERE email=?', [email]);
    return rows[0];
 }

const loginUser = async (data) => {
    const { email } = data;
    const [rows] = await db.query('SELECT email, password FROM users WHERE email=?', [email]);

    return rows[0];
}

const getProfile = async (email) => {
    const [rows] = await db.query('SELECT email, first_name, last_name, profile_image FROM users WHERE email=?', [email]);
    return rows[0];
}

const updateProfile = async (email, data) => {
    const { first_name, last_name } = data;

    const result = await db.query(
        'UPDATE users SET first_name=?, last_name=? WHERE email=?',
        [first_name, last_name, email]
    );

    const updated = await getProfile(email);
    return updated;
 }

module.exports = { 
    registerUser, checkEmail, loginUser, getProfile, updateProfile 
}
