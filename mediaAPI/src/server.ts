import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import NodeCache from 'node-cache';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { error } from 'console';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const supabase = createClient(
    process.env.URL as string,
    process.env.PUBLIC_KEY as string
);

const API_Keys_Cache = new NodeCache();

type Email = `${string}@${string}`;

app.get('/', async (_req: Request, res: Response) => {
    res.send('hello world!');
});

app.post('/auth/token/get-token', async (req: Request, res: Response) => {
    const email: Email = req.body.email;

    const token = uuidv4();

    if (API_Keys_Cache.get(email) === undefined) {
        API_Keys_Cache.set(email, token);

        console.log('API key check', API_Keys_Cache.get(email));
        res.status(200)
        res.send(token);
    }
    else {
        res.status
        res.send("Token already exists!");
    }
});

app.post('/auth/token/verify', async (req: Request, res: Response) => {
    const email: Email = req.body.email
    const token: String = req.body.token;

    if (verifyAuthToken(email, token)) {
        res.status(200)
        res.send(true)
    }
    else {
        res.status(401)
        res.send(false)
    }
})


app.get('/auth/token/refresh', async (_req: Request, res: Response) => { });

app.get('/media/get/all', async (_req: Request, res: Response) => {
    res.send('no items in the library');
});

app.get('/media/get/item', async (_req: Request, res: Response) => {
    res.send("there's no such thing");
});

app.get('/media/reservation', async (_req: Request, res: Response) => {
    res.send('There are no current reservations');
});

app.get('/media/booked', async (_req: Request, res: Response) => {
    res.send('There is no media booked');
});

app.put('/media/reserve', async (_req: Request, res: Response) => {
    res.send('Reserved!');
});

app.put('/media/book', async (_req: Request, res: Response) => {
    res.send('Booked');
});

app.post('/media/create', async (_req: Request, res: Response) => {
    res.send('Are you staff?');
});

app.delete('/media/delete', async (_req: Request, res: Response) => {
    res.send('Removed media');
});

app.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
});

function verifyAuthToken(email: Email, token: String): Boolean {
    if (API_Keys_Cache.get(email) === undefined) {
        console.log("Invalid email", email)
        return false
    }

    if (API_Keys_Cache.get(email) !== token) {
        console.log("Invalid token: ", token)
        return false;
    }

    if (API_Keys_Cache.get(email) === token) {
        console.log("valid token")
        return true;
    }

    else {
        console.error("Something went wrong...")
        return false;
    }

}

function refreshToken(email: Email): String | Boolean {

    if (API_Keys_Cache.get(email) === undefined) {
        console.log("Invalid email", email)
        return false
    }
    else {
        API_Keys_Cache.del("email")
        const token = uuidv4();
        API_Keys_Cache.set("email", token)
        return token
    }

}