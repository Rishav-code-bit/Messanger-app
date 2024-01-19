import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username: 'Rishav', text: 'Hey guys'},{username: 'Shiwang', text: 'Hello'}]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])

  const sendMessage = (event) => {
    // all the logic to send message
    event.preventDefault();
    setMessages([...messages, {username: username, text: input} ]);
    setInput('');
  }


  return (
    <div className="App">
      <h1>Hello Rishav Kumar</h1>
      <h2>Hello {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message....</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      {
        messages.map(message => (
          <Message username={message.username} text={message.text} />
        ))
      }
    </div>
  );
}

export default App;
