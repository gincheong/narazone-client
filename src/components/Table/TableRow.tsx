import DOMPurify from 'dompurify';
import ReactHtmlParser from 'react-html-parser';
// styles
import useStyles from "../../assets/styles/jss/TableRowStyles";

const TableRow = (props: Props) => {
  const classes = useStyles();
  const { data, bold } = props;

  const boldText = (text: string, keyword: string) => {
    const re = new RegExp(keyword, 'g');

    const cleaned = DOMPurify.sanitize(text.replace(re, `<b>${keyword}</b>`));
  
    return ReactHtmlParser(cleaned);
  };

  return (
    <tr className={classes.tableRow}>
      {data.map((each, idx) => 
        <td key={each} className={classes.tableData}>
          {(idx === 0 && bold) ?
            boldText(each, bold) :
            each
          }
        </td>
      )}
    </tr>
  );
};

interface Props {
  data: string[];
  bold?: string;
}

export default TableRow;