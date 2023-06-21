import { v4 as uuidv4 } from 'uuid';

export const getCurrentContext = (selectedParts) => {
  // Convert the selectedParts array to a string
  return JSON.stringify(selectedParts);
};


export const handleInputSubmit = async (e, input, setInput, messages, setMessages, selectedParts, setAiIsTyping) => {
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

    // Prepare the messages to send to the server
    const chatMessages = [
      {
        role: 'system',
        content: 'You are a helpful IT assistant.'
      },
      {
        role: 'user',
        content: input
      }
    ];

    // Get the current context (this will depend on your application)
    const context = getCurrentContext(selectedParts);

    // Send the user's message to your server for processing
    const response = await fetch(process.env.REACT_APP_SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: chatMessages, context: context, selectedParts: selectedParts })
    });

    // Check for server error
    if (response.status === 500) {
      const data = await response.json();
      console.error('Server error:', data.error);
      return;
    }

    const data = await response.json();
    const aiMessage = {
      id: uuidv4(),
      text: data.message, // Use the message from the server's response
      sender: 'ai',
    };

    setMessages((prevMessages) => [...prevMessages, aiMessage]);
    setAiIsTyping(false);
  }
};
