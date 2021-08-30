import { makeStyles } from '@material-ui/core';
import BaseStyle from './BaseStyles';

const useStyles = makeStyles({
  container: {
    padding: '20px',
    borderRadius: BaseStyle.radius.default,
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',

    ...BaseStyle.disableButtonHighlight,
  },
});

export default useStyles;