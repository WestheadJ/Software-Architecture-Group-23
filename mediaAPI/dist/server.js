"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const supabase_js_1 = require("@supabase/supabase-js");
const dotenv_1 = __importDefault(require("dotenv"));
const node_cache_1 = __importDefault(require("node-cache"));
const cors_1 = __importDefault(require("cors"));
const uuid_1 = require("uuid");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const supabase = (0, supabase_js_1.createClient)(process.env.URL, process.env.PUBLIC_KEY);
const API_Keys_Cache = new node_cache_1.default();
app.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('hello world!');
}));
app.post('/auth/token/get-token', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    console.log("Token requested by:", email);
    let token = generateToken(email);
    res.status(200);
    res.send({ "token": token });
}));
app.post('/auth/token/verify', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const token = req.body.token;
    console.log(token);
    console.log(`Token being verified by: ${email}, token: ${token}`);
    if (verifyAuthToken(email, token)) {
        console.log(`${email}'s token verified`);
        res.status(200);
        res.send({ "auth": true });
    }
    else {
        console.log(`${email}'s token not verified`);
        res.status(401);
        res.send({ "auth": false });
    }
}));
app.post('/auth/token/refresh', (req, res) => __awaiter(void 0, void 0, void 0, function* () { }));
app.post('/media/get/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const token = req.body.token;
    if (verifyAuthToken(email, token)) {
        res.status(200);
        res.send("Some library stuff");
    }
    else {
        res.status(401);
        res.send('Not authorized');
    }
}));
app.post('/media/get/item', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("there's no such thing");
}));
app.get('/media/reservation', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('There are no current reservations');
}));
app.get('/media/booked', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('There is no media booked');
}));
app.put('/media/reserve', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Reserved!');
}));
app.put('/media/book', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Booked');
}));
app.post('/media/create', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Are you staff?');
}));
app.delete('/media/delete', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Removed media');
}));
app.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
});
function verifyAuthToken(email, token) {
    console.log(API_Keys_Cache.get(email));
    if (API_Keys_Cache.get(email) === undefined) {
        console.log("Invalid email", email);
        return false;
    }
    if (API_Keys_Cache.get(email) !== token) {
        console.log("Invalid token: ", token);
        return false;
    }
    if (API_Keys_Cache.get(email) === token) {
        console.log("valid token");
        return true;
    }
    else {
        console.error("Something went wrong...");
        return false;
    }
}
function refreshToken(email) {
    if (API_Keys_Cache.get(email) === undefined) {
        console.log("Invalid email", email);
        return false;
    }
    else {
        console.log("Deleting token");
        API_Keys_Cache.del("email");
        console.log("Token");
        const token = (0, uuid_1.v4)();
        API_Keys_Cache.set("email", token);
        return token;
    }
}
function generateToken(email) {
    let token;
    if (API_Keys_Cache.get(email) === undefined) {
        console.log("Creating new token");
        token = (0, uuid_1.v4)();
        API_Keys_Cache.set(email, token);
        return token;
    }
    else {
        console.log("refreshing token");
        token = refreshToken(email);
        return token;
    }
}
