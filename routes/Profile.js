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

router.get("/temp", temp);
router.post("/createProfile",createProfile);
router.delete("/deleteProfile/:id",deleteProfile);
router.put("/updateProfile/:id",updateProfile);
router.get("/getProfile/:profileId",getProfile)

module.exports = router;
