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
app.post('/auth/token/get', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const token = (0, uuid_1.v4)();
    if (API_Keys_Cache.get(email) === undefined) {
        API_Keys_Cache.set(email, token);
        console.log('API key check', API_Keys_Cache.get(email));
        res.send({
            status: 'success',
            token,
            message: 'successful token creation',
        });
    }
    else {
        res.send({
            status: 'error',
            message: 'Token already exists!',
        });
    }
}));
app.post('/auth/token/verify', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('verifying token');
    res.send('yes');
}));
app.get('/auth/token/refresh', (_req, res) => __awaiter(void 0, void 0, void 0, function* () { }));
app.get('/media/get/all', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('no items in the library');
}));
app.get('/media/get/item', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
