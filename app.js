const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const path = require('path');
const heroRoutes = require('./routes/heroRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use(morgan('dev'));

app.use('/heroes', heroRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})