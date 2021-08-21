// styles
import useStyles from '../../assets/styles/jss/MainHeaderStyles';

const MainHeader = (props: Props) => {
  const { title } = props;
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <button className={classes.button} type="button">사이드바</button>
      <div className={classes.title}>
        {title}
      </div>
      <button className={classes.button} type="button">로갓</button>
      <button className={classes.button} type="button">설정</button>
    </header>
  );
};

interface Props {
  title: string;
}

export default MainHeader;