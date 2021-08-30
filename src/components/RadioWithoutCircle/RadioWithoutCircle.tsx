import React from 'react';
// components
import CustomButton from '../CustomButton/CustomButton';
// styles
import useStyles from '../../assets/styles/jss/RadioWithoutCircleStyles';

const RadioWithoutCircle = (props: Props
    & React.LabelHTMLAttributes<HTMLLabelElement>
    & React.InputHTMLAttributes<HTMLInputElement>
  ) => {
  const classes = useStyles();
  const { value, name, text, defaultChecked, className, checkedClassName } = props;

  const [checked, setChecked] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const $input = inputRef.current;
    setChecked($input?.checked ?? false);
  }, [inputRef.current?.checked]);

  return (
    <label className={classes.label + " " + className}>
      <input 
        className={classes.radio}
        value={value}
        type="radio"
        name={name}
        ref={inputRef}
        defaultChecked={defaultChecked}
      />
      <CustomButton className={checked ? checkedClassName : ''}>
        {text ?? value}
      </CustomButton>
    </label>
  );
};

interface Props {
  text?: string;
  checkedClassName?: string;
}

export default RadioWithoutCircle;