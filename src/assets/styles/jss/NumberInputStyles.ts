import { makeStyles } from '@material-ui/core';
import BaseStyle from './BaseStyles';

const useStyles = makeStyles({
  container: {
    display: 'inline',
    border: `2px solid ${BaseStyle.color.dark}`,
    borderRadius: '5px',
    backgroundColor: BaseStyle.color.light,
    padding: '2px',
    margin: '0px 5px',
  },
  inputNumber: {
    border: 'none',
    backgroundColor: 'transparent',
    width: '20px',
    textAlign: 'center',
  },
  button: {
    color: BaseStyle.color.dark,
    border: 'none',
    backgroundColor: 'transparent',
  }
});

export default useStyles;