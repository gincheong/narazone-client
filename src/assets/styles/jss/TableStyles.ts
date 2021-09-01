import { makeStyles } from '@material-ui/core';
import BaseStyle from './BaseStyles';

const useStyles = makeStyles({
  container: {
    padding: '5px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHead: {
    color: BaseStyle.color.blue,
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
  },
});

export default useStyles;