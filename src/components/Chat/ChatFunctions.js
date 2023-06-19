export const getCurrentContext = (selectedParts) => {
  // Convert the selectedParts array to a string
  return JSON.stringify(selectedParts);
};

export const handleInputSubmit = async (event, messages, setMessages, selectedParts, setAiIsTyping) => {
  event.preventDefault();

  // Get the input value from the form event
  const input = event.target.elements.input.value;

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

  // Send the messages, context, and selected parts to the server and get the AI's response
  setAiIsTyping(true); // AI starts typing
  const response = await fetch(process.env.REACT_APP_SERVER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: chatMessages, context: context, selectedParts: selectedParts })
  });    
  setAiIsTyping(false); // AI finishes typing

  const data = await response.json();
  if (response.status === 500) {
    console.error('Server error:', data.error);
  }
  const aiMessage = data.message;

  // Add the AI's message to the chat history
  setMessages(prevMessages => [...prevMessages, { text: aiMessage, sender: 'ai', timestamp: new Date().toLocaleTimeString() }]);

  // Clear the input field
  event.target.elements.input.value = '';
};
