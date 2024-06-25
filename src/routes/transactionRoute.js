//1-requires
const express = require('express');
const router = express.Router();

const {getTransactions, getTransactionById} = require('../controllers/transactionController');
//2-Routes
router.route('/:accountId')
.get(getTransactions);

router.route('/transaction/:id')
.get(getTransactionById)

//3-export
module.exports = router;


