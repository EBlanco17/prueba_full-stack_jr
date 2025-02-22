require("dotenv").config();
const express = require("express");
const cors = require("cors");
const usersRoutes = require("./src/routes/users");
const transactionsRoutes = require("./src/routes/transactions");

const app = express();

app.use(cors());

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/transactions", transactionsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server on http://localhost:${PORT}`));
