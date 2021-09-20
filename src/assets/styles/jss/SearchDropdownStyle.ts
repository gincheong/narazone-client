import { makeStyles } from '@material-ui/core'
import BaseStyle from './BaseStyles'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    margin: '10px',
    minHeight: '40px',
  },
  label: {
    flex: '0.3',
    alignSelf: 'center',
  },
  controller: {
    flex: '1',
    padding: '5px',
    '& button': {
      margin: '2px',
    },
  },
  button: {
    flex: '1',
    margin: '5px',
    border: `1px solid ${BaseStyle.color.gray}`,
    backgroundColor: BaseStyle.color.dark,
    color: BaseStyle.color.light,
    textAlign: 'center',
  },
})

export default useStyles
