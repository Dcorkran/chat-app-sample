import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  messageContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  fromText: {
    fontSize: '.25em'
  }
}));

export default function ChatMessageContainer(props) {
  const classes = useStyles();
  const { messages } = props;
  return (
    <div className={classes.container}>
      { !messages && <h1>Loading...</h1> }
      { messages && messages.length === 0 && <h1> No Messages... ✨ ✨Add some! ✨✨</h1>}
      { messages && messages.length > 0 && messages.map((message, i) => {
        return (
          <div key={i} className={classes.messageContainer}>
            <p>{message.msg}</p>
            <p className={classes.fromText}>from {message.sent_from}</p>
          </div>
        )
      })}
    </div>
  );
}