const express = require('express');
const myData = require('../data');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index',{myData});
});
router.get('/skill',(req,res)=>{
    res.render('skill',{myData});
});


module.exports = router;