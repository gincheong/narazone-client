import { makeStyles } from '@material-ui/core';
import BaseStyle from './BaseStyles';

const useStyles = makeStyles({
  radio: {
    display: 'none', // hide radio checkbox
  },
  label: {
    fontSize: BaseStyle.fontSize.small,
    borderRadius: BaseStyle.radius.default,
    cursor: 'pointer',
    ...BaseStyle.disableButtonHighlight,
  },
});

export default useStyles;