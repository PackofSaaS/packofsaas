// Email router

const express = require('express');

const router = express.Router();

const Email = require('../models/Emails')


router.post('/', async (req, res)=>{
   
    const email = new Email({
        name: req.body.name,
        email: req.body.email
    });

    try{
        const savedEmail = await email.save();
        res.json(savedEmail)
    }
    catch(err)
    {
         res.json({message : err})
    }
  

})

module.exports = router;