import { makeStyles } from '@material-ui/core';
// import BaseStyle from './BaseStyles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    margin: '10px 0px',
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
});

export default useStyles;