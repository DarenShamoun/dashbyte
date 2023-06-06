const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const openai = require('openai');
const cors = require('cors');

openai.apiKey = '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';

app.use(cors());
app.use(express.json()); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;
    const prompt = 'Tech support: ' + userMessage;
    const maxTokens = 60;

    const response = await openai.Completion.create({
        engine: 'text-davinci-002',
        prompt: prompt,
        max_tokens: maxTokens
    });

    const aiMessage = response.choices[0].text.trim();
    res.json({ message: aiMessage });
});
