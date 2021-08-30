import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    padding: '20px',
    margin: '15px',
    borderRadius: '10px',
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',

    // 모바일에서, 클릭 시 파란색 highlight 효과 제거
    '-webkit-tap-highlight-color': 'transparent',
    outline: 'none',
    '-ms-touch-action': 'manipulation',
    'touch-action': 'manipulation',
  },
});

export default useStyles;