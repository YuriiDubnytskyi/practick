const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    room:String,
    users:Array,
    messages:Array
},{
    collection:"chatRooms"
})

module.exports = mongoose.model('Rooms', userSchema);