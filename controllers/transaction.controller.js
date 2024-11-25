const getBalance = async (req, res) => {
   res.send('get balance');
}

const insertTopup = async (req, res) => {
   res.send('insert topup');
}

const insertTransaction = async (req, res) => {
   res.send('insert transaction');
}

const getTransactionHistory = async (req, res) => {
   res.send('get transaction history');
}

module.exports = { getBalance, insertTopup, insertTransaction, getTransactionHistory }
