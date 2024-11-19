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




app.listen(PORT, () => {
    console.log(`> Ready on http://localhost:3000`);
});