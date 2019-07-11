const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

// route POST API/USERS
//register user
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "please include a valid email").isEmail(),
    check("password", "enter a password with more than 6 characters").isLength({
      min: 6
    })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send("User route");
  }
);

module.exports = router;
