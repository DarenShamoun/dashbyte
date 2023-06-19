const axios = require('axios');

const openai = axios.create({
  baseURL: 'https://api.openai.com',
  headers: 
  {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
  }
});

const getAiMessage = async (chatMessages, context, selectedParts) => {
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
    return response.data.choices[0].message.content;
  } 
  catch (error) 
  {
    console.error('An error occurred while creating chat with OpenAI API:', error);
    console.error('Error details:', error.response?.data); // Log error details
    throw error;
  }
};

module.exports = getAiMessage;
