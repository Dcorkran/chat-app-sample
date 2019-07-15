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
      { messages.map((message, i) => {
        return (
          <div key={i} className={classes.messageContainer}>
            <p>{message.msg}</p>
            <p className={classes.fromText}>from {message.from}</p>
          </div>
        )
      })}
    </div>
  );
}