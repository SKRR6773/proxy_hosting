const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();


const { IP, PORT } = process.env;

const app = express();



app.use(createProxyMiddleware({
    target: "http://s6773code.thddns.net:8999",
    secure: false,
    changeOrigin: true,
    ws: true
}));



const main = () => app.listen(PORT, IP, () => {
    return console.log(`Server Listening on port ${PORT}...`);
});


main();