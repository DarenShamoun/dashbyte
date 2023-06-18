require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors module
const MongoClient = require('mongodb').MongoClient; // Import the MongoDB driver

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

app.use((req, res, next) => {
  if (!db) {
    res.status(503).json({ message: 'Server is starting up. Please try again later.' });
  } else {
    next();
  }
});

const openai = axios.create({
  baseURL: 'https://api.openai.com',
  headers: 
  {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
  }
});

// MongoDB connection code
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

client.connect(err => {
  if (err) {
    console.error('An error occurred while connecting to MongoDB:', err);
    process.exit(1); // Exit the application if there's an error
  }

  console.log('Connected to MongoDB');
  
  db = client.db('user_benchmarks'); // Connect to the 'user_benchmarks' database
});

app.get('/api/parts/:part', async (req, res) => {
  try {
    const collection = db.collection(`${req.params.part}_UserBenchmarks`);
    const parts = await collection.find().toArray();
    res.json(parts);
  } catch (err) {
    console.error('An error occurred while fetching parts:', err);
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
});


app.post('/chat', async (req, res) => {
  const chatMessages = req.body.messages;
  const context = req.body.context;
  const selectedParts = req.body.selectedParts;

  try 
  {
    console.log('Creating chat with OpenAI API...');
    const response = await openai.post('/v1/chat/completions', 
    {
      model: 'gpt-3.5-turbo',
      messages: [...chatMessages, { role: 'system', content: `The user has selected the following parts: ${JSON.stringify(selectedParts)}` }],
      context: context // pass the context to the AI
    });

    console.log('Received response from OpenAI API:', response.data);
    const aiMessage = response.data.choices[0].message.content;
    res.json({ message: aiMessage });
  } 
  catch (error) 
  {
    console.error('An error occurred while creating chat with OpenAI API:', error);
    console.error('Error details:', error.response.data); // Log error details
    res.status(500).json({ message: 'An error occurred while processing your request.', error: error.message });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
