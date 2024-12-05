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
    process.env.PUBLIC_SUPABASE_URL as string,
    process.env.PUBLIC_SUPABASE_ANON_KEY as string
);

const API_KEYS_CACHE = new NodeCache();

const SEARCH_CACHE = new NodeCache();

type Email = `${string}@${string}`;

app.get('/', async (_req: Request, res: Response) => {
    res.send('hello world!');
});

// Token Auth Endpoints
app.post('/auth/token/get-token', async (req: Request, res: Response) => {
    const email: Email = req.body.email;
    console.log("Token requested by:", email)

    let token: String | Boolean = generateToken(email)

    console.log("token is:", token)


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

// Search endpoints
app.post('/media/search/search-bar', async (req: Request, res: Response) => {
    const email: Email = req.body.email
    const token: String = req.body.token;
    const query: String = req.body.query;

    try {
        const result = await searchBarMediaByTitle(query)
        res.status(200)
        res.send({ "result": result })
    }
    catch (err) {
        console.log(err)
        res.status(401)
        res.send('Not authorized');
    }
});

app.post('/media/search', async (req: Request, res: Response) => {
    const searchQuery: string = req.body.query
    const page: number = req.body.page;
    const pageSize: number = 10;

    const start = (page - 1) * pageSize;
    const end = start + pageSize - 1;

    try {
        const searchResult = await searchAll(searchQuery, start, end)

        res.status(200)
        res.send({ "data": searchResult.data, "results": searchResult.results })

    }
    catch (e) {
        console.log(e)
        res.status(500)
        res.send({ "error": true, "message": e })
    }


})

app.post('/media/search/item', async (req: Request, res: Response) => {
    const mediaTitle: string = req.body.mediaTitle;
    const mediaAuthors: string = req.body.mediaAuthors;
    const mediaType: string = req.body.mediaType;

    try {
        console.log("returning")
        const response = await searchItem(mediaTitle, mediaAuthors, mediaType);
        res.status(200);
        res.send({ "data": response })
    }
    catch (e) {
        console.log(e);
        res.status(500);
        res.send({ "error": true, "message": e })
    }
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
    if (API_KEYS_CACHE.get(email) === undefined) {
        console.log("Invalid email", email)
        return false
    }
    if (API_KEYS_CACHE.get(email) !== token) {
        console.log("Invalid token: ", token)
        return false;
    }
    if (API_KEYS_CACHE.get(email) === token) {
        console.log("valid token")
        return true;
    }
    else {
        console.error("Something went wrong...")
        return false;
    }
}

function refreshToken(email: Email): String | Boolean {
    if (API_KEYS_CACHE.get(email) === undefined) {
        console.log("Invalid email", email)
        return false
    }
    else {
        console.log("Deleting token")
        API_KEYS_CACHE.del("email")
        console.log("Creating new token")
        const token = uuidv4();
        API_KEYS_CACHE.set(email, token)
        return token
    }
}

function generateToken(email: Email): String | Boolean {
    let token: String | Boolean;
    if (API_KEYS_CACHE.get(email) === undefined) {
        console.log("Creating new token")
        token = uuidv4()
        API_KEYS_CACHE.set(email, token)
        return token
    }
    else {
        console.log("refreshing token")
        token = refreshToken(email)
        return token
    }
}

async function searchBarMediaByTitle(query: String) {
    const { data, count, error } = await supabase
        .from('media')
        .select('title, authors, media_type, genre', { count: "exact" }).or(`title.ilike.%${query}%,authors.ilike.%${query}%,genre.ilike.%${query}%`).range(0, 5);
    if (error) {
        console.log(error)
        return { "success": false, "error": error }
    }
    return { "success": true, "data": data, "results": count }
}

async function searchAll(query: string, start: number, end: number) {

    const { data, count, error } = await supabase
        .from('media')
        .select('*', { count: 'exact' })
        .or(`title.ilike.%${query}%,authors.ilike.%${query}%,genre.ilike.%${query}%`)

    if (error) {
        console.log(error)
        return { "success": false, "error": error }
    }
    console.log(data)
    console.log(count)
    return { "success": true, "data": data, "results": count }
}

async function searchItem(mediaTitle: string, mediaAuthors: string, mediaType: string) {

    const { data, error } = await supabase
        .from('media')
        .select('*',).eq("title", mediaTitle).eq("media_type", mediaType).eq("authors", mediaAuthors)
    if (error) {
        console.log(error)
        return { "success": false, "error": error }
    }
    console.log(data)
    return { "success": true, "data": data }
}