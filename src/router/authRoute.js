const express = require("express");
const { signup, login, verification } = require("../Controller/Auth");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/verify/:Userid/:UniqueString",verification);

module.exports = router;
