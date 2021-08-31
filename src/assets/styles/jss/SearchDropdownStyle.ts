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
    margin: '5px',
    border: `1px solid ${BaseStyle.color.gray}`,
    backgroundColor: BaseStyle.color.dark,
    color: BaseStyle.color.light,
    textAlign: 'center',
  },
  radio: {
    flex: '1',
    color: BaseStyle.color.light,
    backgroundColor: BaseStyle.color.darkgray,
    margin: '2px',
    textAlign: 'center',
  },
  radioChecked: {
    backgroundColor: BaseStyle.color.blue,
  },
});

export default useStyles;