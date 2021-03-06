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

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleMessageSubmit(values.msg)
    setValues({ ...values, msg: '' })
  }

  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="outlined-name"
        label="Message"
        className={classes.textField}
        value={values.msg}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
    </form>
  );
}