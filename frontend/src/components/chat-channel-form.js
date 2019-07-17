import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: theme.spacing(3)
  },
  header: {
    textAlign: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(3),
    width: '90%'
  }
}));


export default function ChatChannelForm(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    channelId: ''
  });

  const handleChange = event => {
    setValues({ ...values, channelId: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleChannelSubmit(values.channelId);
    setValues({ ...values, channelId: '' });
  }

  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <h1>Enter Channel ID</h1>
      <TextField
        id="outlined-name"
        label="Channel ID"
        className={classes.textField}
        value={values.channelId}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
      />
    </form>
  );
}