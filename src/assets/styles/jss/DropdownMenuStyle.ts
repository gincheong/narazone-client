import { makeStyles } from '@material-ui/core';
import BaseStyle from './BaseStyles';

const useStyles = makeStyles({
  container: {
    margin: '0px 5px 10px 5px',
  },
  button: {
    width: '100%',
    border: `1px solid black`,
    backgroundColor: BaseStyle.color.blue,
    color: BaseStyle.color.light,
    padding: '10px',
  },
  menuContainer: {
    border: `1px solid ${BaseStyle.color.gray}`,
    backgroundColor: BaseStyle.color.lightBlue,
    padding: '10px',
  }
});

export default useStyles;