const express = require("express");
const {
  createExpCtrl,
  fetchAllExpCtrl,
  fetchExpDetailsCtrl,
  updateExpCtrl,
  deleteExpCtrl,
} = require("../controllers/expenceCtrl");
const authMiddleware = require("../middlewares/authMIddleware");

const expenseRoute = express.Router();

expenseRoute.post("/", authMiddleware, createExpCtrl);
expenseRoute.get("/", authMiddleware, fetchAllExpCtrl);
expenseRoute.get("/:id", authMiddleware, fetchExpDetailsCtrl);
expenseRoute.put("/:id", authMiddleware, updateExpCtrl);
expenseRoute.delete("/:id", authMiddleware, deleteExpCtrl);
module.exports = expenseRoute;