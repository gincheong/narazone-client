import { makeStyles } from "@material-ui/core";
import BaseStyle from "./BaseStyles";

const useStyles = makeStyles({
  container: {
    backgroundColor: BaseStyle.color.light,
    padding: '10px',
    margin: '10px',
    borderRadius: '10px',
    boxShadow: BaseStyle.shadow.default,
  },
});

export default useStyles;