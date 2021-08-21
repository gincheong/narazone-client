// styles
import useStyles from '../../assets/styles/jss/FooterStyles';

const LoginFooter = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      Copyright © Tlqkf Corp. All Rights Reserved.
    </footer>
  );
};

export default LoginFooter;