// styles
import useStyles from "../../assets/styles/jss/CardStyles";

const Card = (props: Props) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.container}>
      {children}
    </div>
  );
};

interface Props {
  children: React.ReactNode;
}

export default Card;