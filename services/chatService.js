const chatSchema = require("../models/chatroom")

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

module.exports = {searchRoom}