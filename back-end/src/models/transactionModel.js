const pool = require("../db");

const createTransaction = async (user_id, amount, type) => {
  return pool.query(
    "INSERT INTO transactions (user_id, amount, type) VALUES ($1, $2, $3) RETURNING *",
    [user_id, amount, type]
  );
};

const getTransactionsByUser = async (user_id) => {
  return pool.query("SELECT * FROM transactions WHERE user_id = $1 ORDER BY created_at DESC", [user_id]);
};

const getUserBalance = async (user_id) => {
  const result = await pool.query(
    "SELECT SUM(CASE WHEN type = 'deposit' THEN amount ELSE -amount END) AS balance FROM transactions WHERE user_id = $1",
    [user_id]
  );
  return result.rows[0].balance || 0;
};

module.exports = { createTransaction, getTransactionsByUser, getUserBalance };
