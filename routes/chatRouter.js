const { Router } = require('express');
const {searchRoom,getRoomUsers,updateMess,getRoomMessages} = require('../services/chatService.js');
//validation to do
const router = Router();

router.get('/getRoom/:id1/:id2', (req, res) => {
    console.log(req.params)
    const id1 = req.params.id1;
    const id2 = req.params.id2
    const result =  searchRoom(id1,id2).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"Room not found"});
        }
    })
})

router.get('/getRoomsUsers/:room', (req, res) => {
    console.log(req.params)
    const room = req.params.room
    const result =  getRoomUsers(room).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"Room not found"});
        }
    })
})

router.get('/getRoomsMessages/:email', (req, res) => {
    console.log(req.params)
    const email = req.params.email
    const result =  getRoomMessages(email).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"Room not found"});
        }
    })
})

router.put("/updateMess", function(req, res){
    const room = req.body.room;
    const mess = req.body.mess;
    const result =  updateMess(room,mess).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({comment:"User not found",status:500});
        }
    })
});

module.exports = router;