const express = require('express');
const router = express.Router();

const controller = require('../controllers/transaction.controller');
const authenticateToken = require('../middleware/auth.middleware');

router.get('/balance', controller.getBalance);
router.post('/topup', controller.insertTopup);
router.post('/transaction', controller.insertTransaction);
router.get('/transaction/history', controller.getTransactionHistory);

module.exports = router;