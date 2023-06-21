export const getCurrentContext = (selectedParts) => {
  // Convert the selectedParts array to a string
  return JSON.stringify(selectedParts);
};

export const handleInputSubmit = async (event, input, setInput, messages, setMessages, selectedParts, setAiIsTyping, aiIsTyping) => {
  event.preventDefault(); // Prevent the form from causing the page to refresh

  // Add the user's message to the chat history
  setMessages([...messages, { text: input, sender: 'user', timestamp: new Date().toLocaleTimeString() }]);

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

  // Indicate that the AI is "typing"
  setAiIsTyping(true);
  console.log('Before AI response: ', aiIsTyping); // Add this line

  // Send the messages, context, and selected parts to the server and get the AI's response
  const response = await fetch(process.env.REACT_APP_SERVER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: chatMessages, context: context, selectedParts: selectedParts })
  });

  // Indicate that the AI has finished "typing"
  setAiIsTyping(false);
  console.log('After AI response: ', aiIsTyping); // Add this line

  const data = await response.json();

  if (response.status === 500) {
    console.error('Server error:', data.error);
  }

  const aiMessage = data.message;

  // Add the AI's message to the chat history
  setMessages(prevMessages => [...prevMessages, { text: aiMessage, sender: 'ai', timestamp: new Date().toLocaleTimeString() }]);

  // Clear the input field
  setInput('');
};
