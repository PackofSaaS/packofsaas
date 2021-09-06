const express = require('express');

const router = express.Router();

const Post = require('../models/Posts')

router.get('/', (req, res)=>{
    res.send("We are on posts")
})

router.get('/specific', (req, res)=>{
    res.send("We are on specifc posts")
})

router.post('/', async (req, res)=>{
   
    const post = new Post({
        title : req.body.title,
        description: req.body.description
    });

    post.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json({message : err})
    })
  

})

module.exports = router;