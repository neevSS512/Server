const mongoose = require("mongoose")
const DisplaySchema = new mongoose.Schema(
  {
    Id: {
      type: String,
      required: true,
      unique:true,
    },
    UserName: {
      type: String,
      required: true,
      unique:true,
      trim:"true"
    },
    Password:{
        type:String,
        required:true,
        unique:"true"
    },
    MobileNo: {
        type: String,
        required: true,
        unique:"true",
        minlength:[2,"minimum 10 digits"]
    },
    State:{
        type:String,
        required:true,
    },
    Status:{
        type:String,
        required:true,
        enum:["Active","Offline"]
    },
    Updated:{
        type:String,
        required:true,
    },
    BlockRemarks:{
        type:String,
        required:true,
    }
    
  },
  { timestamps: true,
    collection: 'getUsers'

   }
)
const Display = new mongoose.model("Display", DisplaySchema)
module.exports = Display