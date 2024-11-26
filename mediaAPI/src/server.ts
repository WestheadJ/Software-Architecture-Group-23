import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import NodeCache from 'node-cache';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';


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
    console.log("Token requested by:", email)

    let token: String | Boolean = generateToken(email)

    res.status(200)
    res.send({ "token": token })
});

app.post('/auth/token/verify', async (req: Request, res: Response) => {
    const email: Email = req.body.email
    const token: String = req.body.token;
    console.log(token)
    console.log(`Token being verified by: ${email}, token: ${token}`)

    if (verifyAuthToken(email, token)) {
        console.log(`${email}'s token verified`)
        res.status(200)
        res.send({ "auth": true })
    }
    else {
        console.log(`${email}'s token not verified`)

        res.status(401)
        res.send({ "auth": false })
    }
})


app.post('/auth/token/refresh', async (req: Request, res: Response) => { });

app.post('/media/get/all', async (req: Request, res: Response) => {
    const email: Email = req.body.email
    const token: String = req.body.token;

    if (verifyAuthToken(email, token)) {
        res.status(200)
        res.send("Some library stuff")
    }
    else {
        res.status(401)
        res.send('Not authorized');
    }
});

app.post('/media/get/item', async (req: Request, res: Response) => {
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
        console.log("Deleting token")
        API_Keys_Cache.del("email")
        console.log("Token")
        const token = uuidv4();
        API_Keys_Cache.set("email", token)
        return token
    }
}

function generateToken(email: Email): String | Boolean {
    let token: String | Boolean;
    if (API_Keys_Cache.get(email) === undefined) {
        console.log("Creating new token")
        token = uuidv4()
        API_Keys_Cache.set(email, token)
        return token
    }
    else {
        console.log("refreshing token")
        token = refreshToken(email)
        return token
    }
}

