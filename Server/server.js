require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors module
const MongoClient = require('mongodb').MongoClient; // Import the MongoDB driver

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

const openai = axios.create({
  baseURL: 'https://api.openai.com',
  headers: 
  {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
  }
});

// MongoDB connection code
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('An error occurred while connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');
  
  // You can create your database and collections here
  // You can also insert your data into the collections here
});

app.post('/chat', async (req, res) => {
  const chatMessages = req.body.messages;
  const context = req.body.context;

  try 
  {
    console.log('Creating chat with OpenAI API...');
    const response = await openai.post('/v1/chat/completions', 
    {
      model: 'gpt-3.5-turbo',
      messages: chatMessages,
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
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
