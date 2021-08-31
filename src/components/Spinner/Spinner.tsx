import { useSelector } from "react-redux";
// reducers
import { RootState } from "../../reducers/rootReducer";
// styles
import useStyles from "../../assets/styles/jss/SpinnerStyles";

const Spinner = () => {
  const classes = useStyles();
  const { spinner } = useSelector((state: RootState) => state.bidReducer);

  return (
    <>
    {spinner &&
      <div className={classes.container}>
        <div className={classes.spinner}>Loading...</div>
      </div>
    }
    </>
  );
};

export default Spinner;