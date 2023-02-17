const express = require('express');
const router = require('./routes');

const app = express();

require('dotenv').config();
require('./db')

app.use('/api', router)

app.listen(process.env.PORT || 3000, () => console.log("server running on port 3333"))