import { makeStyles } from '@material-ui/core';
import BaseStyle from './BaseStyles';

const useStyles = makeStyles({
  radio: {
    display: 'none', // hide radio checkbox
  },
  label: {
    border: `1px solid ${BaseStyle.color.gray}`,
    backgroundColor: BaseStyle.color.dark,
    color: BaseStyle.color.light,
    padding: '10px 10px',
    margin: '2px',
    fontSize: BaseStyle.fontSize.small,
  },
  checked: {
    backgroundColor: BaseStyle.color.blue,
  }
});

export default useStyles;