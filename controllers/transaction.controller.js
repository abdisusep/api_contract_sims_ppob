const service = require('../services/transaction.service');

const getBalance = async (req, res) => {
   try {
      const result = await service.getBalance(req.email);
      res.status(200).json({
         status: 0,
         message: 'Get Balance Berhasil',
         data: result
      });
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
}

const insertTopup = async (req, res) => {
   try {
      // const result = await service.insertTopup(req.email, req.body);
      res.status(200).json({
         status: 0,
         message: 'Top Up Balance berhasil',
         // data: result
      });
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
}

const insertTransaction = async (req, res) => {
   try {
      // const result = await service.insertTransaction(req.email, req.body);
      res.status(200).json({
         status: 0,
         message: 'Transaksi berhasil',
         // data: result
      });
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
}

const getTransactionHistory = async (req, res) => {
   try {
      // const result = await service.getTransactionHistory(req.email);
      res.status(200).json({
         status: 0,
         message: 'Get History Berhasil',
         // data: result
      });
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
}

module.exports = { 
   getBalance, insertTopup, insertTransaction, getTransactionHistory 
}
