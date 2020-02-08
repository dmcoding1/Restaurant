--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS Tables (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    capacity INTEGER
);

INSERT INTO Tables VALUES(1, "Stół dla dwojga", 2);
INSERT INTO Tables VALUES(2, "Stoł z powyłamywanymi nogami", 4);


CREATE TABLE IF NOT EXISTS Clients (
    id INTEGER PRIMARY KEY,
    email TEXT NOT NULL
);



CREATE TABLE IF NOT EXISTS Reservation (
    table_id INTEGER,
    client_id INTEGER,
    reservation_time DATETIME
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------