import { makeStyles } from '@material-ui/core';
import BaseStyle from './BaseStyles';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    marginBottom: '10px',
  },
  title: {
    backgroundColor: `${BaseStyle.color.blue}`,
    color: `${BaseStyle.color.light}`,
    flex: '1',
    padding: '10px',
    textAlign: 'center',

    border: '1px solid black',

    margin: '5px',
  },
  button: {
    margin: '5px',
  }
});

export default useStyles;