const express = require("express");
const { route } = require("../app");
const {
  temp,
  addFood,
  getAllFood,
  updateFood,
  deleteFood,
  dataForDate,
  todayIntake,
  betweenDate,
} = require("../controllers/FoodController");
const router = express.Router();


router.post("/addFood",addFood);
router.get("/allfood",getAllFood);
router.delete("/deletefood/:id",deleteFood);
router.put("/:id",updateFood);
router.get("/today", todayIntake);
router.get("/getData/:date",dataForDate);
router.get("/between/:fromdate/:todate",betweenDate)


module.exports = router;
