const chatSchema = require("../models/chatroom")
const {createNotifications} = require('../services/notificationsService')

const searchRoom = async (id1,id2) => {
    let promise = new Promise((res,rej)=>{
        const Room = chatSchema
        Room.findOne({room:`${id1}${id2}`},function(err,room){
            if(err) return console.log(err);
            if(room === null){
                Room.findOne({room:`${id2}${id1}`},function(err,room){
                    if(err) return console.log(err);
                    if(room === null){
                        const room = new chatSchema({room:`${id2}${id1}`,users:[id2,id1],messages:[]})
                        createNotifications({email:id1,room:`${id2}${id1}`,notifications:0})
                        createNotifications({email:id2,room:`${id2}${id1}`,notifications:0})
                        room.save(function(err,room){
                            if(err) return console.log(err);
                            res(room)
                        })
                    }else{
                        res(room)
                    }
                })      
            }else{
                res(room)
            }
        })
    }) 
    return await promise
}

const getRoomUsers = async (email) => {
    let promise = new Promise((res,rej)=>{
        const Room = chatSchema
        Room.find({users:{$in:[email]}},function(err,rooms){
            if(err) return console.log(err);
            res(rooms)
        })
    }) 
    return await promise
}

const getRoomMessages = async (room) => {
    let promise = new Promise((res,rej)=>{
        const Room = chatSchema
        Room.find({room:room},function(err,messages){
            if(err) return console.log(err);
            res(messages)
        })
    }) 
    return await promise
}

const updateMess = async (roomId,mess) => {
    let promise = new Promise((res,rej)=>{
        const Room = chatSchema
        Room.findOneAndUpdate({room:roomId},{messages:mess},{new:true , useFindAndModify: false},function(err,room){
            if(err) return console.log(err);
            res(room)
        })
    }) 
    return await promise
}

module.exports = {searchRoom,getRoomUsers,updateMess,getRoomMessages}