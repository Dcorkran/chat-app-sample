import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChatMessageContainer from './chat-message-container'
import ChatMessageForm from './chat-message-form'

const useStyles = makeStyles(theme => ({
  container: {
    //TODO style
  }
}));

export default function Chat(props) {
  const classes = useStyles();
  const { handleMessageSubmit } = props;
  const messages = [{
    from: 'Janet',
    msg: 'hey there!'
  },
  {
    from: 'Janet',
    msg: 'hey friend!'
  },
  {
    from: 'Janet',
    msg: 'hey person!'
  },
  {
    from: 'Janet',
    msg: 'hey foobar!'
  }]
  return (
    <div className={classes.container}>
      <ChatMessageContainer messages={messages}/>
      <ChatMessageForm handleMessageSubmit={handleMessageSubmit}/>
    </div>
  );
}