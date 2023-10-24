const express= require('express');
const app = express();
const path= require('path');
// const dotenv= require('dotenv');
// dotenv.config();

const login_router= require('./routers/login.js');
const signup_router= require('./routers/signup.js');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'Public')));

app.use('/login', login_router);
app.use('/signup', signup_router);

const port = process.env.PORT||5000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});


