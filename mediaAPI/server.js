const express = require('express');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const nodeCache = require('node-cache')
const cors = require('cors');
const uuid = require('uuid');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

const supabase = createClient(process.env.URL, process.env.PUBLIC_KEY);

const API_Keys_Cache = new nodeCache()

app.get('/', async (req, res) => {
    res.send("hello world!");
});

app.post('/auth/token/get', async (req, res) => {
    const email = req.body.email
    const token = uuid.v4()
    if (API_Keys_Cache.get(email) == undefined) {
        API_Keys_Cache.set(email, token)

        console.log("API key check", API_Keys_Cache.get(email))
        res.send({ "status": "success", "token": token, "message": "successful token creation" })

    }
    else {
        res.send({ "status": "error", "message": "Token already exists!" })
    }


})

app.get('/auth/token/refresh', async (req, res) => { })

app.get('/media/get/all', async (req, res) => {
    res.send("no items in the library")
})

app.get('/media/get/item', async (req, res) => {
    res.send("there's no such thing")
})

app.get('/media/reservation', async (req, res) => {
    res.send("There are no current reservations")
})

app.get('/media/booked', async (req, res) => {
    res.send("There is no media booked")
})

app.put('/media/reserve', async (req, res) => {
    res.send("Reserved!")
})

app.put('/media/book', async (req, res) => {
    res.send("Booked")
})

app.post('/media/create', async (req, res) => { res.send("Are you staff?") })

app.delete('/media/delete', async (req, res) => {
    res.send("Removed media")
})


app.listen(PORT, () => {
    console.log(`> Ready on http://localhost:3000`);
});