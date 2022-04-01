const express = require('express');
const path = require('path');
const members = require('./members.js');

const logger = require('./middleware/logger')

const { getMaxListeners } = require('process');

const app = express();

app.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))

    if (found) {
        res.json(members.filter((member) => {
            return member.id === parseInt(req.params.id)
        }))
    } else {
        res.status(404)
    }

})

// app.use(logger);
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/members', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public', 'index.html'))
    res.json(members)
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} `);
})