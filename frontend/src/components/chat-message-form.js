import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '90%'
  }
}));


export default function ChatMessageform(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    msg: ''
  });

  const handleChange = event => {
    setValues({ ...values, msg: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={props.handleMessageSubmit(values.msg)}>
      <TextField
        id="outlined-name"
        label="Name"
        className={classes.textField}
        value={values.msg}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
    </form>
  );
}