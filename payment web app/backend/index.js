const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const mainRouter = require("./routes/index")

app.use("/api/v1" , mainRouter );
app.listen(3000);

// all requests coming to /api/v1 will go to mainRouter

// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/changepassword

// /api/v1/account/transfermoney
// /api/v1/account/balance
