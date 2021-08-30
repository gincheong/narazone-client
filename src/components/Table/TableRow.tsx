// styles
import useStyles from "../../assets/styles/jss/TableRowStyles";

const TableRow = (props: Props) => {
  const classes = useStyles();
  const { data } = props;

  return (
    <tr className={classes.tableRow}>
      {data.map(each => 
        <td key={each} className={classes.tableData}>
          {each}
        </td>
      )}
    </tr>
  );
};

interface Props {
  data: string[];
}

export default TableRow;