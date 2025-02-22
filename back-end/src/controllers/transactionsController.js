const transactionModel = require("../models/transactionModel");

const createTransaction = async (req, res) => {
  const { user_id, amount, type } = req.body;
  if (!user_id || amount == null || !type) return res.status(400).json({ error: "Faltan datos" });
  if (amount <= 0) return res.status(400).json({ error: "El monto debe ser positivo" });

  try {
    const balance = await transactionModel.getUserBalance(user_id);
    if (type === "withdrawal" && balance < amount) {
      return res.status(400).json({ error: "Saldo insuficiente" });
    }

    const result = await transactionModel.createTransaction(user_id, amount, type);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTransactionsByUser = async (req, res) => {
  const { user_id } = req.params;
  try {
    const transactions = await transactionModel.getTransactionsByUser(user_id);
    if (transactions.rows.length === 0) return res.status(404).json({ error: "No hay transacciones" });

    res.json(transactions.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createTransaction, getTransactionsByUser };
