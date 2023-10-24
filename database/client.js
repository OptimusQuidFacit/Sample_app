const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const client = new MongoClient(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const collection= client.db("Potion_database").collection('users');

const dbobject= {};
async function connect(){
    try{
   await client.connect();
   console.log('You are connected to mongodb');
    }
    catch(err){
    console.log(err);
    }

}
dbobject.connect=connect;
dbobject.client=client;
dbobject.collection=collection;
module.exports=dbobject;