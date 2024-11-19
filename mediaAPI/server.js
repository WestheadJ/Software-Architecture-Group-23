const express = require('express');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const supabase = createClient(process.env.URL, process.env.PUBLIC_KEY);

app.get('/', async (req, res) => {
    res.send("hello world!");
});

app.get('/auth/token', async (req, res) => {
    res.send("need an auth token?")
})

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