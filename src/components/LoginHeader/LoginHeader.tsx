// styles
import useStyles from '../../assets/styles/jss/HeaderStyles';
// assets
import logo from '../../assets/images/loona.svg';

const LoginHeader = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logo} alt="logo" />
    </header>
  );

};

export default LoginHeader;