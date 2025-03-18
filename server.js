// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Carregar variáveis do .env

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected, Acesse http://127.0.0.1:5000/'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Saia do processo se a conexão falhar
  });

const users = require('./routes/users');
app.use('/api/users', users);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
