import React from 'react';
// styles
import useStyles from '../../assets/styles/jss/RadioWithoutCircleStyles';

const RadioWithoutCircle = (props: Props) => {
  const classes = useStyles();
  const { value, name, text, defaultChecked } = props;

  const [checked, setChecked] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const $input = inputRef.current;
    setChecked($input?.checked ?? false);
  }, [inputRef.current?.checked]);

  return (
    <label className={classes.label + " " + (checked && classes.checked)}>
      <input 
        className={classes.radio}
        value={value}
        type="radio"
        name={name}
        ref={inputRef}
        defaultChecked={defaultChecked}
      />
      {text ?? value}
    </label>
  );
};

interface Props {
  value: string;
  name?: string;
  text?: string;
  defaultChecked?: boolean
}

export default RadioWithoutCircle;