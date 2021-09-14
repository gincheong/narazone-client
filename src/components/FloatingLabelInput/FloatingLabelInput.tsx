import React from 'react'
// styles
import useStyles from '../../assets/styles/jss/FloatingLabelInputStyle';

const FloatingLabelInput = (props: FloatingLabelInputProps ): JSX.Element => {
  const { label, underlineColor, value, onChange, className, ...rest } = props;
  
  const [focus, setFocus] = React.useState(false);

  const classes = useStyles({ focus, underlineColor });

  const onBlur = () => {
    if (value === '') {
      setFocus(false);
    }
  };

  return (
    <label className={classes.label + ' ' + (className ?? '')} {...rest}>
    <span className={classes.span}>{label}</span>
      <input
        className={classes.input}
        onFocus={() => setFocus(true)}
        onBlur={onBlur}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

interface Props {
  label: string;
  underlineColor?: string;
}

type FloatingLabelInputProps = Props & React.InputHTMLAttributes<any>;

export default FloatingLabelInput;
