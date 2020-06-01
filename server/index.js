const path = require("path");
const sqlite = require("sqlite");
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3100;

app.use('/', express.static(path.join(__dirname, './../restaurant/build')));

app.get('/tables', async (request, response) => {
    const db = await sqlite.open("./db/database.sqlite");
    const results = await db.all(`SELECT * FROM Tables`);
    response.send(results);
});

function formatDate(timestampDate, withTime = false) {
    const tmpDate = new Date(timestampDate);
    let reservationDate = `${tmpDate.getFullYear()}-${tmpDate.getMonth() < 9 ? '0' : ''}${(tmpDate.getMonth() + 1)}-${tmpDate.getDate() < 10 ? '0' : ''}${tmpDate.getDate()}`;
    if (withTime) {
        reservationDate += ` ${tmpDate.getHours() < 10 ? '0' : ''}${tmpDate.getHours()}:${tmpDate.getMinutes() < 10 ? '0' : ''}${tmpDate.getMinutes()}`;
    }
    return reservationDate;
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
    try {
        console.log(request.body);
        const {timestamp, email} = request.body;
        const reservationDate = formatDate(timestamp, true);
        const db = await sqlite.open("./db/database.sqlite");
        console.log(`SELECT id FROM Clients WHERE email='${email}'`);
        console.log(`SELECT id FROM Reservation WHERE reservation_time='${reservationDate}'`);
        const [client, reservation] = await Promise.all([
            db.get(`SELECT id FROM Clients WHERE email='${email}'`),
            db.get(`SELECT * FROM Reservation WHERE reservation_time='${reservationDate}'`)
        ]);

        if(!reservation) {
            if (!client) {
                const result = await db.exec(`INSERT INTO Clients(email) VALUES('${email}')`);
                console.log(result);
                response.send(result);
            } else {
                console.log(`INSERT INTO Reservation(client_id, reservation_time) VALUES(${client.id}, '${reservationDate}')`);
                const result = await db.exec(`INSERT INTO Reservation(client_id, reservation_time) VALUES(${client.id}, '${reservationDate}')`);
                console.log("insert reservation", result);
                response.send(result);
            }
        } else {
            response.send({message: "Not a chance!"});
        }
        

    } catch(error) {
        console.error(error);
        response.sendStatus(500);
    }

});


app.listen(port, () => console.log(`Server started on port ${port}`));