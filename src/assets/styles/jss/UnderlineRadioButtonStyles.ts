import { makeStyles } from '@material-ui/core'
import BaseStyle from './BaseStyles'

const useStyles = makeStyles({
  label: {
    padding: '5px',
    position: 'relative',
    cursor: 'pointer',

    '&:before': {
      borderBottom: '1px solid #777',
      position: 'absolute',
      content: '""',
      left: '0',
      right: '0',
      bottom: '0',
    },
    '&:after': {
      borderBottom: `2px solid ${BaseStyle.color.blue}`,
      position: 'absolute',
      content: '""',
      left: '0',
      right: '0',
      bottom: '0',
      transform: 'scaleX(0)',
      transition: 'transform ease-out 0.2s',
    },
  },
  checked: {
    '&:after': {
      transform: 'scaleX(1)',
    },
    fontWeight: 'bold',
    // backgroundColor: 'rgba(100, 100, 100, 0.1)',
    borderRadius: '5px',
  },
  radio: {
    display: 'none',
  },
})

export default useStyles
