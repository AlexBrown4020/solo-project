const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./knex');

const serverSetup = () => {
    const app = express();
    app.use(
        morgan(
            ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
        )
    );
    
    app.use(express.static(path.resolve(__dirname, '..', 'dist')));
    app.use(cors())
    app.get('/api/events', async (req, res) => {
        try {
            const events = await db.select().table('events');
            res.json(events);
        } catch (err) {
            console.error('Error loading events', err);
            res.sendStatus(500);
        }
    });
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
    });
    return app; //configured instance of express
}

module.exports = serverSetup;