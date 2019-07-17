import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StyledButton from './styled-button';

const useStyles = makeStyles(theme => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
  },
  outerContainer: {
    marginTop: theme.spacing(3),
    textAlign: 'center'
  }
}));

export default function LoginButtonsContainer(props) {
  const classes = useStyles();
  const { handleUserSelect } = props
  return (
    <div className={classes.outerContainer}>
      <h1>Select User</h1>
      <div className={classes.buttonContainer}>
        <StyledButton handleClick={() => handleUserSelect('John')} color='default' text='John'/>
        <StyledButton handleClick={() => handleUserSelect('Ted')} color='primary' text='Ted'/>
        <StyledButton handleClick={() => handleUserSelect('Janet')} color='secondary' text='Janet'/>
      </div>
    </div>

  );
}