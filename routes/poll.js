const express = require('express');
const router = express.Router();

const Pusher = require('pusher');

const pusher = new Pusher({
  appId: "1437775",
  key: "a7acda32f7cd007dfc8a",
  secret: "ceb398b2166d04853f4e",
  cluster: "ap2",
  useTLS: true
});
router.get('/', (req, res)=>{
    res.send('POLL');
})

router.post('/', (req, res)=>{
    pusher.trigger("os-poll", "os-vote", {
       points: 1, 
       os: req.body.os
      });

     return res.json({success: true, message: 'Thank you for voting'}); 
});

module.exports = router;