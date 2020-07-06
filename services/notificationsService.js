const notificationsSchema = require("../models/notifications")
const notifications = require("../models/notifications")

const createNotifications = async (data) => {
    const Notifi = new notificationsSchema(data)
    let promise = new Promise((res,rej)=>{
        Notifi.save(function(err,user){
            if(err) return console.log(err);
            console.log(user)
        })
    }) 
    return await promise
}

const searchNotifications = async (email) => {
    let promise = new Promise((res,rej)=>{
        const Notifi = notificationsSchema
        Notifi.find({email:email},function(err,notifications){
            if(err) return console.log(err);
            res(notifications)
        })
    }) 
    return await promise
}

const addNotifications = async (email,room) => {
    let promise = new Promise((res,rej)=>{
        const Notifi = notificationsSchema
        Notifi.find({email:email,room:room},function(err,notificationsUser){
            if(err) return console.log(err);
            let not = JSON.stringify(notificationsUser)
            let not2 = JSON.parse(not)
            console.log(not2)
            console.log(not2[0])
            let index=notificationsUser.notifications+1
            Notifi.findOneAndUpdate({email:email,room:room},{notifications:not2[0].notifications+1},{new:true , useFindAndModify: false},function(err,notifi){
                if(err) return console.log(err);
                res(notifi)
            })
        })
    }) 
    return await promise
}

const deleteNotifications = async (email,room) => {
    let promise = new Promise((res,rej)=>{
        const Notifi = notificationsSchema
        Notifi.find({email:email,room:room},function(err,notificationsUser){
            if(err) return console.log(err);
            Notifi.findOneAndUpdate({email:email,room:room},{notifications:0},{new:true , useFindAndModify: false},function(err,notifi){
                if(err) return console.log(err);
                res(notifi)
            })
        })
    }) 
    return await promise
}

module.exports = {searchNotifications,addNotifications,deleteNotifications,createNotifications}