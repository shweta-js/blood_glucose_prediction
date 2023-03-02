const express = require("express");
const { route } = require("../app");
const {
  temp,
  createProfile,
  updateProfile,
  deleteProfile,
  getProfile
} = require("../controllers/ProfileController");
const router = express.Router();

// router.get("/temp", temp);
router.post("/createProfile",createProfile);
router.delete("/deleteProfile/:id",deleteProfile);
router.put("/updateProfile/:name",updateProfile);
router.get("/getProfile/:name",getProfile)

module.exports = router;
