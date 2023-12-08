import React, { useState, useEffect } from 'react';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

const Chat = ({ currentUser, recipientUser }) => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`/messages?senderId=${currentUser.id}&receiverId=${recipientUser.id}`);
      const data = await response.json();
      setMessages(data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [currentUser, recipientUser]);

  const sendMessage = async (content) => {
    try {
      const newMessage = {
        senderId: currentUser.id,
        receiverId: recipientUser.id,
        content: content,
      };

      await fetch('/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessage),
      });

      // Fetch updated messages after sending the new message
      fetchMessages();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <MessageList messages={messages} currentUser={currentUser} />
      <MessageForm sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
