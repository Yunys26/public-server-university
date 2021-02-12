const express = require('express');
const request = require('request');
const cors = require('cors');

const { client, textDB } = require('./db');

const app = express();

const port = 9999;

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.use(cors());

app.listen(port, (err) => {
    
    client
        .connect()
        .then(() => console.log('DB connected'))
        .catch((error) => console.error('connection error', error.stack))

    // client
    //     .query(textDB.dbQueryMain)
    //     .then((res) => console.log(res))
    //     .catch((error) => console.error(error.stack))
    
    if (err) {
        throw Error(err)
    }

    console.log(`Server start, port:${port}`);

})