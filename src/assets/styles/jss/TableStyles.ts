import { makeStyles } from '@material-ui/core';
import BaseStyle from './BaseStyles';

const useStyles = makeStyles({
  container: {
    padding: '5px',
  },
  table: {
    minWidth: '100%',
    width: 'max-content',
    borderCollapse: 'collapse',
  },
  tableHead: {
    color: BaseStyle.color.blue,
    fontWeight: 'bold',
  },
});

export default useStyles;