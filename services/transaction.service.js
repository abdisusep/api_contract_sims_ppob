const model = require('../models/transaction.model');

const getBalance = async (email) => {
    const result = await model.getBalance(email);
    if(!result){
        return 0;
    }
    return result;
}

const insertTopup = async (email, data) => {
    return await model.insertTopup(email, data);
}

const insertTransaction = async (email, data) => {
    // return await model.insertTransaction(email, data);
    return 1;
}

const getTransactionHistory = async (email) => {
    return await model.getTransactionHistory(email);
} 

module.exports = { 
    getBalance, insertTopup, insertTransaction, getTransactionHistory 
}
