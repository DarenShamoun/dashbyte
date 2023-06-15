function ContactSection() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Have a question or need help? Start a chat with our AI assistant for immediate assistance.</p>
      <button onClick={() => window.location.href='/chat'}>Start Chat</button>
      <p>Or, you can send us a message using the form below and we'll get back to you as soon as possible.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ContactSection;
