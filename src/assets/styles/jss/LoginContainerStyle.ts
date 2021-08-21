import { makeStyles } from '@material-ui/core';
import BaseStyle from './BaseStyle';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '500px',
    padding: '20px 10px',

    border: `1px solid ${BaseStyle.color.gray}`,
  },
  button: {
    marginTop: '20px',
    width: '500px',
    padding: '20px 10px',
    boxSizing: 'content-box',

    fontSize: '18px',
    border: `1px solid ${BaseStyle.color.gray}`,
    cursor: 'pointer',
  },
  loginButton: {
    backgroundColor: `${BaseStyle.color.accent}`,
    color: `${BaseStyle.color.light}`,
  },
  guestButton: {
    backgroundColor: `${BaseStyle.color.dark}`,
    color: `${BaseStyle.color.light}`,
  }

});

export default useStyles;
