const mongoose = require("mongoose")


const dataSchema = new mongoose.Schema({
    Name :String,
    Address :String
    
})

const DataModel = mongoose.model("data", dataSchema)


module.exports = {
    DataModel
}