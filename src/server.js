const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();

const port = 9999;

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.use(cors());

app.listen(port, (err) => {
    
    if (err) {
        throw Error(err)
    }

    console.log(`Server start, port:${port}`);

})