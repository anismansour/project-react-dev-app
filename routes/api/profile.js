const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Profile = require("../../models/Profile");
const User = require("../../models/Users");

// @route  Get api/profile/me
// @desc  Get cureent users

// route GET API/profile
router.get("/", auth, async (req, res) => {
  try {
    const profile = await profile.findOne({ user: req.user.id });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
