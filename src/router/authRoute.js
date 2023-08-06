const express = require("express");
const { signup } = require("../Controller/Auth");
const router = express.Router();

router.post("signup", signup);

module.export = router;
