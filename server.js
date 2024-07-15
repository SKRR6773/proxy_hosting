const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();


const { IP, PORT } = process.env;

const app = express();



app.use(createProxyMiddleware({
    target: "https://c382-2405-9800-b520-b83f-e155-7c80-7d69-716c.ngrok-free.app",
    secure: false,
    changeOrigin: true,
    ws: true
}));



const main = () => app.listen(PORT, IP, () => {
    return console.log(`Server Listening on port ${PORT}...`);
});


main();