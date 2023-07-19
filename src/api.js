const express = require('express')
const sqlite3 = require('sqlite3')

const app = express()
const port = 5555

// Connect to database

const db = new sqlite3.Database('database.db', (err) => {
    if (err){
        console.error('Error connecting to database', err.message)
    } else {
        console.log('Connected to the database')
    }
})

// Define routes

// Get all data from table 'fios' and send it as response in JSON format
app.get('/', (req, res) => {
    const sqlQuery = `SELECT * FROM fios`
    db.all(sqlQuery, (err, rows) => {
        if (err){
            console.error('Error executing query: ', err.message)
            res.status(500).json({error: 'Internal server error'})
        } else {
            res.json(rows)
        }
    })
})

// Creates the table. This won't be used by the end user, it's just for developing
app.post('/create_table', (req, res) => {
    const sqlQuery = `CREATE TABLE IF NOT EXISTS fios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(20),
        marca VARCHAR(15),
        material VARCHAR(30),
        tex INTEGER,
        metragem INTEGER,
        cor VARCHAR(20)
    )`
 
    db.run(sqlQuery, (err, rows) => {
        if (err){
            console.error('Error creating table:', err.message)
            res.sendStatus(500).json({error: 'Internal server error'});
        }
            res.json({ message: 'Table created' })
        })
})

// Alters the table. Probably won't be used by the end user.
app.post('/alter_table', (req, res) => {
    const sqlQuery = `ALTER TABLE fios ADD COLUMN quantidade VARCHAR(30)`
    db.run(sqlQuery, (err, rows) => {
        if (err){
            console.error('Error altering table:', err.message)
            res.sendStatus(500).json({ error: 'Error altering table' })
        }
            res.json({ message:'Column added to the table successfully.' });
    })
})

// Inserts data into the table. This WILL be used in the app, in the component "Add_fios"
app.post('/insert_into', (req, res) => {
    // Get values from request body and format them as SQL strings with placeholders (%s)
    // For now, the values will be hardcode, as a test
    const sqlQuery = `INSERT INTO fios VALUES (
        '1', 'Classic Pull', 'Círculo', '100% acrílico', '606', '330', 'cinza', 'Menos de um novelo')`
    db.run(sqlQuery, (err, rows) => {
        if (err){
            console.error('Error inserting data: ', err.message)
            res.sendStatus(500).json({ error: 'Error inserting data'})
        }
            res.json({ message: 'Fio cadastrado com sucesso!'})
    })
})

// Start server
app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`)
})