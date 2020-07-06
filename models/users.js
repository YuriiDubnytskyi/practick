const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:String,
    nickname:String,
    name:String,
    family_name:String,
    id_notifications:String
},{
    collection:"userPractice"
})

module.exports = mongoose.model('User', userSchema);