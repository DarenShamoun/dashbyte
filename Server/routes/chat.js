const axios = require('axios');

const openai = axios.create({
  baseURL: 'https://api.openai.com',
  headers: 
  {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
  }
});

module.exports = (app) => {
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
      res.json({ message:aiMessage });
    } 
    catch (error) 
    {
      console.error('An error occurred while creating chat with OpenAI API:', error);
      console.error('Error details:', error.response?.data); // Log error details
      res.status(500).json({ message: 'An error occurred while processing your request.', error: error.message });
    }
  });
};
