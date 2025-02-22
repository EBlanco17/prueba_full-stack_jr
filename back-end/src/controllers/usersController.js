const userModel = require("../models/userModel");

const createUser = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Faltan datos" });

  try {
    const result = await userModel.createUser(name, email);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: "El email ya está registrado" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await userModel.getAllUsers();
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createUser, getAllUsers };
