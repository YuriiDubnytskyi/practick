const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:String,
    room:String,
    notifications:Number
},{
    collection:"userNotifications"
})

module.exports = mongoose.model('Notifications', userSchema);