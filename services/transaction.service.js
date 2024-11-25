const model = require('../models/transaction.model');

const getBalance = async (email) => {
    const result = await model.getBalance(email);
    return { balance: Number(result.balance) };
}

const insertTopup = async (email, top_up_amount) => {
    const result = await model.insertTopup(email, top_up_amount);
    return await getBalance(email);
}

const insertTransaction = async (email, service_code) => {
    const result = await model.insertTransaction(email, service_code);
    return result;
}

const getTransactionHistory = async (email, param) => {
    let offset = parseInt(param.offset) || 0;
    let limit  = parseInt(param.limit) || 0;

    return await model.getTransactionHistory(email, offset, limit);
} 

module.exports = { 
    getBalance, insertTopup, insertTransaction, getTransactionHistory 
}
