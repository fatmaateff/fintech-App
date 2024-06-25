//1-requires
const express = require('express');
const router = express.Router();

//2-Routes
router.route('/transaction')
.post(createTransaction)
.get(getTransactions);

router.route('/transaction/:id')
.get(getTransactionById)
.put(updateTransaction)
.delete(deleteTransaction);

//3-export
module.exports = router;


