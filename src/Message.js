import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import './Message.css';

function Message({message, username}) {
const isUser = username ===message.username;

  return (
    <div className={`message ${isUser && `message__user`}`}>
      <Card className={isUser ? "message_usercard" : "message_guestcard"}>
        <CardContent>
          <Typography
            color="black"  // Change the color to your desired color
            variant="h5"     // Change the variant to your desired heading variant
            component="h2"
          >
            {message.username} : {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Message