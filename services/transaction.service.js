const model = require('../models/transaction.model');

const getBalance = async (email) => {
    return await model.getBalance(email);
}

const insertTopup = async (email, data) => {
    return await model.insertTopup(email, data);
}

const insertTransaction = async (email, data) => {
    return await model.insertTransaction(email, data);
}

const getTransactionHistory = async (email) => {
    return await model.getTransactionHistory(email);
} 

module.exports = { 
    getBalance, insertTopup, insertTransaction, getTransactionHistory 
}
