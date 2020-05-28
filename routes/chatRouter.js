const { Router } = require('express');
const {searchRoom} = require('../services/chatService.js');
//validation
const router = Router();


router.get('/getRoom/:id1/:id2', (req, res) => {
    console.log(req.params)
    const id1 = req.params.id1;
    const id2 = req.params.id2
    const result =  searchRoom(id1,id2).then((r)=>{
        console.log("route"+r)
        if (r) {
            res.json(r);
        } else {
            res.json({user:false,status:404,comment:"Room not found"});
        }
    })
})

module.exports = router;