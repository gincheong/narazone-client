// components
import TableRow from './TableRow';
// styles
import useStyles from '../../assets/styles/jss/TableStyles';

const Table = (props: Props) => {
  const classes = useStyles();
  const { children, head, headClassName } = props;

  return (
    <div className={classes.container}>
      <table className={classes.table}>
        <thead className={classes.tableHead}>
          <TableRow data={head} className={headClassName} />
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};

interface Props {
  children: React.ReactNode;
  head: string[];
  headClassName: string;
}

export default Table;