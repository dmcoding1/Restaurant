const sqlite = require("sqlite");
const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3100;

app.get('/tables', async (request, response) => {
    const db = await sqlite.open("./db/database.sqlite");
    const results = await db.all(`SELECT * FROM Tables`);
    response.send(results);
});

function formatDate(timestampDate) {
    const tmpDate = new Date(timestampDate);
    const reservationDate = `${tmpDate.getFullYear()}-${tmpDate.getMonth() < 9 ? '0' : ''}${(tmpDate.getMonth() + 1)}-${tmpDate.getDate() < 10 ? '0' : ''}${tmpDate.getDate()}`;
    console.log(reservationDate);
}

app.get('/tables/available', async (request, response) => {
    const db = await sqlite.open("./db/database.sqlite");
    console.log(request.query);
    const tmpDate = new Date(parseInt(request.query.reservationDate, 10));
    const reservationDate = `${tmpDate.getFullYear()}-${tmpDate.getMonth() < 9 ? '0' : ''}${(tmpDate.getMonth() + 1)}-${tmpDate.getDate() < 10 ? '0' : ''}${tmpDate.getDate()}`;
    console.log(reservationDate);
    const results = await db.all(`SELECT reservation_time, table_id, capacity FROM Reservation LEFT JOIN Tables ON table_id=Tables.id WHERE reservation_time BETWEEN '${reservationDate} 12:00' AND '${reservationDate} 20:00'`);
    let postResults = {};

    results.forEach(r => {
        const tmpTime = r.reservation_time.split(" ")[1];
        if (postResults[tmpTime]) {
            postResults[tmpTime].push({
                tableId: r.table_id,
                capacity: r.capacity
            })
        } else {
            postResults[tmpTime] = [{
                tableId: r.table_id,
                capacity: r.capacity
            }];
        }
    });
    response.send(postResults);
});

app.post('/reservation', async (request, response) => {
    console.log(request.body);
});


app.listen(port);