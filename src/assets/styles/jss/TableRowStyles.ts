import { makeStyles } from '@material-ui/core';
import BaseStyle from './BaseStyles';

const useStyles = makeStyles({
  tableRow: {
    borderBottom: `1px solid ${BaseStyle.color.gray}`,
  },
  tableData: {
    padding: '10px',
  },
  highlight: {
    backgroundColor: '#fcf695',
  },
});

export default useStyles;