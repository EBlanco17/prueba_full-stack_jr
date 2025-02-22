const express = require("express");
const { createTransaction, getTransactionsByUser } = require("../controllers/transactionsController");
const router = express.Router();

router.post("/", createTransaction);
router.get("/:user_id", getTransactionsByUser);

module.exports = router;