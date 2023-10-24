const express= require('express')
const router= express.Router();
const cryptojs = require('crypto-js');
// const dotenv = require('dotenv');
// dotenv.config();

const dbobject = require('../database/client.js');

router.post('/', async (req, res)=>{
    dbobject.connect();
try{
   
    const usernameexists= await dbobject.collection.findOne({Username: req.body.Name});
    const useremailexists= await dbobject.collection.findOne({Email: req.body.Email});
    if(usernameexists){
        res.status(401).send('User Already Exists');
    }
    else if(useremailexists){
        res.status(401).send('Email already in use');
    }
    
   else
    { const user = await dbobject.collection.insertOne({Username: req.body.Name, 
        Password: cryptojs.AES.encrypt(req.body.Password, process.env.PASS_SEC).toString(), 
        Email: req.body.Email});
        res.json(user);
    }
}
catch(err){
    res.status(500).send(err);
    console.log(err)
}
});

module.exports=router;