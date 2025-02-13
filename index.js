const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();
const cors = require("cors");
require('dotenv').config();
const authRoutes = require("./routes/auth.js");
const displayRoutes=require("./routes/details.js")
const rechargeRoutes=require("./routes/recharge.js")
const withdrawRoutes=require("./routes/withdraw.js")
const kycRoutes=require("./routes/kyc.js")
const bankRoutes=require("./routes/bankdata.js")
const gameuserRoutes=require("./routes/gameuser.js")
const playingctgRoutes=require("./routes/playingCTG.js")

app.use(cors());
app.use(express.json());
app.use(express.static("public"))

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/details",displayRoutes)
app.use("/withdraw",withdrawRoutes)
app.use("/kyc",kycRoutes)
app.use('/bankdata',bankRoutes)
app.use('/recharge',rechargeRoutes)
app.use('/gameuser',gameuserRoutes)
app.use("/playingCTGData",playingctgRoutes)

const PORT = 3001;
mongoose.connect("mongodb://localhost:27017/HKI_neev")
  // .connect("process.env.MONGO_URL", {
  //   dbName: "HKI",
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));