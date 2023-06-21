// Import the uuidv4 function to generate unique IDs
import { v4 as uuidv4 } from 'uuid';

// Define a function to get the current context based on the selected parts
export const getCurrentContext = (selectedParts) => {
  // Start with a base system message
  let context = "You are a helpful IT assistant.";

  // If selectedParts is not undefined or empty, add the selected parts to the context
  // selectedParts is expected to be an array of selected parts
  if (selectedParts && selectedParts.length > 0) {
    // Add a stringified version of the selected parts to the context
    // JSON.stringify is used to convert the selectedParts array into a string
    context += ` The user has selected the following parts: ${JSON.stringify(selectedParts)}`;
  }

  // Return the context string
  return context;
};


//creates a new message object for the user's input, sends the user's message and the 
//current context to the server, 
//and updates the messages state with the server's response. 
export const handleInputSubmit = async (e, input, setInput, messages, setMessages, selectedParts) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Only proceed if the input is not empty
  if (input.trim() !== '') {
    // Create a new message object for the user's input
    const newMessage = {
      id: uuidv4(), // Generate a unique ID for the message
      text: input, // The text of the message is the user's input
      sender: 'user', // The sender of the message is the user
    };

    // Add the new message to the messages state
    setMessages([...messages, newMessage]);

    // Clear the input field
    setInput('');

    // Get the current context based on the selected parts
    const context = getCurrentContext(selectedParts);

    // Prepare the messages to send to the server
    const chatMessages = [
      {
        role: 'user', // The role of the message sender
        content: input // The content of the message
      }
    ];

    // If there is a context, add a system message with the context to the beginning of the messages
    if (context) {
      chatMessages.unshift({
        role: 'system', // The role of the message sender
        content: context // The content of the message
      });
    }

    // Send the messages to the server for processing
    const response = await fetch(process.env.REACT_APP_SERVER_URL, {
      method: 'POST', // Use a POST request
      headers: { 'Content-Type': 'application/json' }, // Set the content type of the request body
      body: JSON.stringify({ messages: chatMessages }) // The body of the request is the stringified messages
    });

    // If the server responds with a 500 status code, log the error message and return early
    if (response.status === 500) {
      const data = await response.json();
      console.error('Server error:', data.error);
      return;
    }

    // Parse the server's response as JSON
    const data = await response.json();

    // Log the data object to see its structure
    console.log(data);

    // If the server's response includes a message, create a new message object for the AI's response
    if (data && data.message) {
      const aiMessage = {
        id: uuidv4(), // Generate a unique ID for the message
        text: data.message, // The text of the message is the server's response
        sender: 'ai', // The sender of the message is the AI
      };

      // Add the AI's message to the messages state
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } else {
      // If the server's response doesn't include a message, log an error message
      console.error('Invalid server response:', data);
    }
  }
};

