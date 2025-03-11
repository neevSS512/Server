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
const playctgRoutes = require("./routes/pctg.js");
const playpoolctgRoutes = require("./routes/poolctg.js");
const dealctgRoutes = require("./routes/dealctg.js");
const ludoctgRoutes = require("./routes/ludoplayctg"); 
const snakectgRoutes = require("./routes/snakeplayctg"); 
const ludopublicRoutes = require("./routes/ludopublic.js"); 
const ludocounterRoutes = require("./routes/ludocounter.js"); 
const snakecounterRoutes = require("./routes/snakecounter.js"); 
const ludoscoreRoutes = require("./routes/ludoscore.js"); 
const snakescoreRoutes = require("./routes/snakescore.js"); 
const snakepublicRoutes = require("./routes/snakepublic.js"); 
const transactionRoutes=require("./routes/transaction.js");
const gameconfigurationRoutes =require("./routes/gameconfigdata.js")
const matchTrackDataRoutes=require("./routes/matchTrackData.js")




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
app.use("/pctg", playctgRoutes);
app.use("/poolctg", playpoolctgRoutes);
app.use("/dealctg", dealctgRoutes);
app.use("/ludoplayctg", ludoctgRoutes);
app.use("/snakeplayctg", snakectgRoutes);
app.use("/ludopublic", ludopublicRoutes);
app.use("/ludocounter", ludocounterRoutes);
app.use("/snakecounter", snakecounterRoutes);
app.use("/ludoscore", ludoscoreRoutes);
app.use("/snakescore", snakescoreRoutes);
app.use("/snakepublic", snakepublicRoutes);
app.use('/transaction',transactionRoutes);
app.use('/gameconfigdata',gameconfigurationRoutes)
app.use('/matchTrackData',matchTrackDataRoutes)



const PORT = 3001
// mongoose.connect("mongodb://localhost:27017/HKI_neev")
//   // .connect("process.env.MONGO_URL", {
//   //   dbName: "HKI",
//   //   useNewUrlParser: true,
//   //   useUnifiedTopology: true,
//   // })
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
//   })
//   .catch((err) => console.log(`${err} did not connect`));


mongoose
  .connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err.message);  // Log error message
    console.log("Full error object:", err);  // Log full error object for more details
  });







