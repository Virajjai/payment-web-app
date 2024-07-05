const express = require("express");
const userRouter = require("./user")
const router = express.Router();
const accountRouter = require("./account");

router.use("/user" , userRouter);
router.use("/account", accountRouter);

module.exports = router;
// all reuest will start from 
// api/v1/user
// api/v1/transaction