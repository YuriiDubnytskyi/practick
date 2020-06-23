const { Router } = require('express');
const {create,searchUser,userUpdate,userDelete,getAllUsers} = require('../services/userService.js');
//validation to do

const router = Router();

router.post('/create', (req, res) => {
    const user = {
        email:req.body.email,
        nickname:req.body.nickname,
        name:req.body.name,
        family_name:req.body.family_name
    }
    const result =  create(user).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.status(400).json('error has occured');
        }
    })
})

router.get('/search/:email', (req, res) => {
    const email = req.params.email;
    const result =  searchUser(email).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"User not found"});
        }
    })
})

router.put("/updateUser", function(req, res){
    const name = req.body.name;
    const nickname = req.body.nickname;
    const family_name = req.body.family_name
    const id = req.body.id;
    const userUpdating = {name,nickname,family_name};
    const result =  userUpdate(id,userUpdating).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({comment:"User not found",status:500});
        }
    })
});

router.delete("/deleteUser/:id", function(req, res){
    const id = req.params.id;
    const result =  userDelete(id).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({comment:"User not found",status:500});
        }
    })
});

router.get("/getAll", function(req, res){
    const result =  getAllUsers().then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({comment:"User not found",status:500});
        }
    })
});

module.exports = router;