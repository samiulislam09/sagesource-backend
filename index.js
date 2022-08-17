const express = require('express');
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
const dotenv = require('dotenv');
const mongoose = require('mongoose')

dotenv.config()
app.use(cors())
app.use(express.json())



const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const run = async () => {
    try {
        await client.connect();
        const collection = client.db("sagesource-blogs").collection("blogs");
        const user = { name: 'samiul', email: "sawon@gmail.com" };
        const result = await collection.insertOne(user)
    } finally {
        // await client.close();
    }
}

run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Running app')
});


//create post 

app.listen(port, () => {
    console.log('running')
})