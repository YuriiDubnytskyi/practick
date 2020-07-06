const { Router } = require('express');
const {searchNotifications,addNotifications,deleteNotifications} = require('../services/notificationsService.js');
//validation to do
const router = Router();

// router.post('/createNotifications', (req, res) => {
//     const notifi = {
//         email:req.body.email,
//         room:req.body.room,
//         notifications:0
//     }
//     const result =  createNotifications(notifi).then((r)=>{
//         if (r) {
//             res.json(r);
//         } else {
//             res.status(400).json('error has occured');
//         }
//     })
// })


router.get('/getNotification/:email', (req, res) => {
    const email = req.params.email;
    const result =  searchNotifications(email).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"Room not found"});
        }
    })
})

router.post('/addNotification/:email/:room', (req, res) => {
    const email = req.params.email;
    const room = req.params.room;
    const result =  addNotifications(email,room).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"Room not found"});
        }
    })
})

router.delete('/deleteNotification/:email/:room', (req, res) => {
    const email = req.params.email;
    const room = req.params.room;
    const result =  deleteNotifications(email,room).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"Room not found"});
        }
    })
})

module.exports = router;