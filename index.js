require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./src/routes/to-do.route');
const swaggerRoute = require('./src/routes/swagger.route')
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3003;


connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/to-do-list', routes);
app.use('/api', swaggerRoute)


app.listen(port, () => {
  console.log(`Servidor rodando na porta${port}`);
});

