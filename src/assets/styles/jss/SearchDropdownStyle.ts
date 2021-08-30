import { makeStyles } from '@material-ui/core';
import BaseStyle from './BaseStyles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    margin: '10px',
  },
  label: {
    flex: '0.3',
    alignSelf: 'center',
  },
  controller: {
    flex: '1',
    padding: '5px',
    display: 'flex',
    '& button': {
      margin: '2px',
    }
  },
  input: {
    padding: '5px',
    flex: '1',
  },
  button: {
    flex: '1',
    margin: '0px 5px',
    padding: '10px 0px',
    border: `1px solid ${BaseStyle.color.gray}`,
    backgroundColor: BaseStyle.color.dark,
    color: BaseStyle.color.light,
    cursor: 'pointer',
  }
});

export default useStyles;