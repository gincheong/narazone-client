// components
import TableRow from './TableRow';
// styles
import useStyles from '../../assets/styles/jss/TableStyles';

const Table = (props: Props) => {
  const classes = useStyles();
  const { children, head } = props;

  return (
    <div className={classes.container}>
      <table className={classes.table}>
        <thead className={classes.tableHead}>
          <TableRow data={head} />
        </thead>
        {children}
      </table>
    </div>
  );
};

interface Props {
  children: React.ReactNode;
  head: string[];
}

export default Table;