const pool = require("../db");

const createUser = async (name, email) => {
  return pool.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [name, email]);
};

const getAllUsers = async () => {
  return pool.query("SELECT id, name, email, created_at FROM users");
};

module.exports = { createUser, getAllUsers };