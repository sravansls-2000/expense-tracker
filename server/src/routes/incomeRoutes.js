const express = require("express");
const {
  createIncCtrl,
  fetchAllIncCtrl,
  fetchIncDetailsCtrl,
  updateIncCtrl,
  deleteIncCtrl,
} = require("../controllers/incomeCtrl");
const authMiddleware = require("../middlewares/authMIddleware");

const incomeRoute = express.Router();

incomeRoute.post("/", authMiddleware, createIncCtrl);
incomeRoute.get("/", authMiddleware, fetchAllIncCtrl);
incomeRoute.get("/:id", authMiddleware, fetchIncDetailsCtrl);
incomeRoute.put("/:id", authMiddleware, updateIncCtrl);
incomeRoute.delete("/:id", authMiddleware, deleteIncCtrl);
module.exports = incomeRoute;