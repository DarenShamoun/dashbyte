import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const handleInputSubmit = async (e, input, setInput, messages, setMessages, setAiIsTyping) => {
  e.preventDefault();
  if (input.trim() !== '') {
    const newMessage = {
      id: uuidv4(),
      text: input,
      sender: 'user',
    };
    setMessages([...messages, newMessage]);
    setInput('');
    setAiIsTyping(true);

    // Send the user's message to your server for processing
    const response = await axios.post('/api/chat', { message: input });

    // After receiving the response from the server, create a new message object for the AI's response
    const aiMessage = {
      id: uuidv4(),
      text: response.data.message, // Use the message from the server's response
      sender: 'ai',
    };

    setMessages((prevMessages) => [...prevMessages, aiMessage]);
    setAiIsTyping(false);
  }
};
