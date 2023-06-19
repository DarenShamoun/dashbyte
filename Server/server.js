require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { connectToMongoDB, db, client } = require('./db');

const partsRoute = require('./routes/parts');
const chatRoute = require('./routes/chat');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

connectToMongoDB();

app.use((req, res, next) => {
  if (!db) {
    res.status(503).json({ message: 'Server is starting up. Please try again later.' });
  } else {
    next();
  }
});

partsRoute(app, db);
chatRoute(app);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// Close the MongoDB connection when the server shuts down
process.on('SIGINT', async () => {
  console.log('Server is shutting down...');
  await client.close();
  server.close(() => {
    console.log('Server has shut down');
    process.exit(0);
  });
});
