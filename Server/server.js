require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors module

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

const openai = axios.create({
  baseURL: 'https://api.openai.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
  }
});

app.post('/chat', async (req, res) => {
  const chatMessages = req.body.messages;

  try {
    console.log('Creating chat with OpenAI API...');
    const response = await openai.post('/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: chatMessages
    });

    console.log('Received response from OpenAI API:', response.data);
    const aiMessage = response.data.choices[0].message.content;
    res.json({ message: aiMessage });
  } catch (error) {
    console.error('An error occurred while creating chat with OpenAI API:', error);
    console.error('Error details:', error.response.data); // Log error details
    res.status(500).json({ message: 'An error occurred while processing your request.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

