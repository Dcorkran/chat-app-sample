import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoginButton from './login-button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export default function LoginButtonsContainer(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <LoginButton handleLogin={props.handleLogin} color='default' userName='John'/>
      <LoginButton handleLogin={props.handleLogin} color='primary' userName='Ted'/>
      <LoginButton handleLogin={props.handleLogin} color='secondary' userName='Janet'/>
    </div>
  );
}