const express = require("express");
const { route } = require("../app");
const {
  temp,
  addFood,
  getAllFood,
  updateFood,
  deleteFood
} = require("../controllers/FoodController");
const router = express.Router();

router.get("/temp", temp);
router.post("/addFood",addFood);
router.get("/allfood",getAllFood);
router.delete("/deletefood/:id",deleteFood);
router.put("/:id",updateFood);


module.exports = router;
