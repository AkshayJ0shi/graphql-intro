const mongoose = require("mongoose")
var Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name : {
        type: String,
        required: true
    }, 
    email : {
        type: String,
    }, 
    phone : {
        type: String,
    }, 
})



module.exports = mongoose.model("Client", ClientSchema)