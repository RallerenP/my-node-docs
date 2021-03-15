const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, () => {
    console.clear();
    console.log(`Listening on ${PORT}...`);
});