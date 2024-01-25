const mongoose = require("mongoose")


const dataSchema = new mongoose.Schema({
    Name : {type : String, required : true},
    Address : {type : String, required : true},
    
})

const DataModel = mongoose.model("data", dataSchema)


module.exports = {
    DataModel
}