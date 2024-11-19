const express = require('express');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');


const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/', async (req, res) => {
    res.send("hello world!");
});




app.listen(PORT, () => {
    console.log(`> Ready on http://localhost:3000`);
});