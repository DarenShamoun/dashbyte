import { v4 as uuidv4 } from 'uuid';

export const getCurrentContext = (selectedParts) => {
  // Start with the base system message
  let context = "You are a helpful IT assistant.";

  // If selectedParts is not undefined or empty, add the selected parts to the context
  if (selectedParts && selectedParts.length > 0) {
    context += ` The user has selected the following parts: ${JSON.stringify(selectedParts)}`;
  }

  return context;
};

export const handleInputSubmit = async (e, input, setInput, messages, setMessages, selectedParts) => {
  e.preventDefault();
  if (input.trim() !== '') {
    const newMessage = {
      id: uuidv4(),
      text: input,
      sender: 'user',
    };
    setMessages([...messages, newMessage]);
    setInput('');

    // Get the current context
    const context = getCurrentContext(selectedParts);

    // Prepare the messages to send to the server
    const chatMessages = [
      {
        role: 'user',
        content: input
      }
    ];

    // Only include the system message if context is not null
    if (context) {
      chatMessages.unshift({
        role: 'system',
        content: context
      });
    }

    // Send the user's message to your server for processing
    const response = await fetch(process.env.REACT_APP_SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: chatMessages })
    });

    // Check for server error
    if (response.status === 500) {
      const data = await response.json();
      console.error('Server error:', data.error);
      return;
    }

    const data = await response.json();
    console.log(data); // Log the data object to see its structure

    const aiMessage = {
      id: uuidv4(),
      text: data, // Use the message from the server's response
      sender: 'ai',
    };
    

    setMessages((prevMessages) => [...prevMessages, aiMessage]);
  }
};
