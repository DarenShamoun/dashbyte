require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { connectToMongoDB, getDb, client } = require('./db');
const partsRoute = require('./routes/parts');
const chatRoute = require('./routes/chat');
const checkDbConnection = require('./middlewares/check-db-connection');
const shutdown = require('./shutdown');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

connectToMongoDB().then(() => {
  app.set('db', getDb()); // Set the database connection in the Express app instance
});

app.use(checkDbConnection(getDb));

partsRoute(app);
chatRoute(app);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

shutdown(server, client);
