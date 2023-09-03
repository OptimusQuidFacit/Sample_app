const express= require('express');
const router= express.Router();
const cryptojs = require('crypto-js');
const dotenv= require('dotenv');
dotenv.config();

const dbobject = require('../database/client.js');
router.post('/', async (req, res)=>{
try{
    dbobject.client.connect();
    const user = await dbobject.collection.findOne({Username: req.body.Name});
    if(!user){
        res.status(401).send('User does not exist');
    }
    password= cryptojs.AES.decrypt(user.Password, process.env.PASS_SEC).toString();
if(password!==req.body.Password){
    res.status(401).send("Wrong Password");
}

    res.json(`User succesfully logged in. ${user}`);
}
catch (err){
    res.status(500).send('Incorrect Credentials');
}
});

module.exports=router;