require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

const brazilRoutes = require('./routes/brazilRoutes');
const argentinaRoutes = require('./routes/argentinaRoutes');
const chileRoutes = require('./routes/chileRoutes');
const peruRoutes = require('./routes/peruRoutes');
const colombiaRoutes = require('./routes/colombiaRoutes');
const paraguayRoutes = require('./routes/paraguayRoutes');
const uruguayRoutes = require('./routes/uruguayRoutes');
const surinameRoutes = require('./routes/surinameRoutes');

// Routes
server.use('/brazil', brazilRoutes);
server.use('/argentina', argentinaRoutes);
server.use('/chile', chileRoutes);
server.use('/peru', peruRoutes);
server.use('/colombia', colombiaRoutes);
server.use('/paraguay', paraguayRoutes);
server.use('/uruguay', uruguayRoutes);
server.use('/suriname', surinameRoutes);



// Mongo Connection

const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${DB_NAME}:${DB_PASSWORD}@integrado.7rzmsck.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
  console.log('MongoDB Conectado')
  server.listen(5000);
}).catch(()=>{
  console.log('Erro ao conectar ao MongoDB fake')
})
