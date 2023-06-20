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
  try {
    console.log('Creating chat with OpenAI API...');
    const requestBody = {
      model: 'gpt-3.5-turbo',
      messages: [...chatMessages],
    };

    if (context && context.length > 0) {
      requestBody.context = context;
    }

    if (selectedParts && selectedParts.length > 0) {
      requestBody.messages.push({
        role: 'system',
        content: `The user has selected the following parts: ${JSON.stringify(selectedParts)}`,
      });
    }

    const response = await openai.post('/v1/chat/completions', requestBody);

    console.log('Received response from OpenAI API:', response.data);
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('An error occurred while creating chat with OpenAI API:', error);
    console.error('Error details:', error.response?.data); // Log error details
    throw error;
  }
};


module.exports = getAiMessage;
