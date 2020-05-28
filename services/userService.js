const userSchema = require("../models/users")

const create = async (data) => {
    const User = new userSchema(data)
    let promise = new Promise((res,rej)=>{
        User.save(function(err,user){
            if(err) return console.log(err);
            res(user)
        })
    }) 
    return await promise
}

const searchUser = async (email) => {
    let promise = new Promise((res,rej)=>{
        const User = userSchema
        User.findOne({email},function(err,user){
            if(err) return console.log(err);
            res(user)
        })
    }) 
    return await promise
}

const userUpdate = async (id,userUpdate) => {
    let promise = new Promise((res,rej)=>{
        const User = userSchema
        User.findOneAndUpdate({_id:id},userUpdate,{new:true , useFindAndModify: false},function(err,user){
            if(err) return console.log(err);
            res(user)
        })
    }) 
    return await promise
}

const userDelete = async (id) => {
    let promise = new Promise((res,rej)=>{
        const User = userSchema
        User.findByIdAndDelete(id, function(err, user){ 
            if(err) return console.log(err);
            res(user);
        });
    }) 
    return await promise
}

const getAllUsers = async (id) => {
    let promise = new Promise((res,rej)=>{
        const User = userSchema
        User.find({}, function(err, users){ 
            if(err) return console.log(err);
            res(users);
        });
    }) 
    return await promise
}


module.exports = {create,searchUser,userUpdate,userDelete,getAllUsers}