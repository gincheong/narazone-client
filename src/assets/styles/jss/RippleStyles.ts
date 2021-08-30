import { makeStyles } from '@material-ui/core';
// import BaseStyle from './BaseStyles';

const useStyles = makeStyles({
  container: {
    background: 'rgba(255, 255, 255, 0.5)',
    width: '10px',
    height: '10px',
    borderRadius: '9999px',
    position: 'absolute',

    animation: '0.9s ease forwards ripple-effect',
  },
  '@global': {
    '@keyframes ripple-effect': {
      '0%': { transform: 'scale(1)', opacity: '1', },
      '80%': { transform: 'scale(50)', },
      '100%': { opacity: '0', },
    },
  },
});

export default useStyles;