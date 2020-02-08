const sqlite = require("sqlite");
const express = require('express');


const app = express();
const port = process.env.PORT || 3100;

app.get('/tables', async (request, response) => {
    const db = await sqlite.open("./db/database.sqlite");
    const results = await db.all(`SELECT * FROM Tables`);
    response.send(results);
});


app.listen(port);