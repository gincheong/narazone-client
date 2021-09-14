import { makeStyles } from "@material-ui/core";
// import BaseStyle from "./BaseStyles";

interface StyleProps {
  focus: boolean;
  underlineColor?: string;
}
const useStyles = makeStyles({
  label: (props: StyleProps) => ({
    paddingTop: '12px',
    position: 'relative',

    '&:before': {
      borderBottom: '1px solid #777',
      position: 'absolute',
      content: '""',
      left: 0,
      right: 0,
      bottom: '-10px',
    },

    '&:after': {
      borderBottom: `2px solid ${props.underlineColor ?? 'black'}`,
      position: 'absolute',
      content: '""',
      left: 0,
      right: 0,
      bottom: '-10px',

      transform: props.focus ? 'scaleX(1)' : 'scaleX(0)',
      transition: 'transform ease-out 0.2s',
    },
    '& > *': {
      padding: '10px',
    }
  }),
  span: (props: StyleProps) => ({
    pointerEvents: 'none',
    width: 'fill-available',
    color: '#777',
    position: 'absolute',
    transition: 'font-size ease-out 0.1s, margin-top ease-out 0.1s',
    fontSize: props.focus ? '0.8em' : '0.9em',
    marginTop: props.focus ? '-20px' : '0px',
  }),
  input: (props: StyleProps) => ({
    width: 'fill-available',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
  }),
});

export default useStyles;