import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import './Message.css';

function Message(props) {
  return (
      <Card className="message_card">
      <CardContent>
        <Typography
          color="black"  // Change the color to your desired color
          variant="h5"     // Change the variant to your desired heading variant
          component="h2"
        >
          {props.username} : {props.text}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Message