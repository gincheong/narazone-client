import React from 'react'
// interfaces
import { UnderlineRadioButtonProps } from './interfaces'
// styles
import useStyles from '../../assets/styles/jss/UnderlineRadioButtonStyles'

const UnderlineRadioButton = (props: UnderlineRadioButtonProps) => {
  const { value, name, underlineColor, onChangeRadio, className, ...rest } =
    props

  const [checked, setChecked] = React.useState<string>('')

  const classes = useStyles()

  const onClick = (event: React.MouseEvent) => {
    const $target = event.target as HTMLInputElement

    if ($target.tagName === 'INPUT') {
      setChecked($target.value)
      onChangeRadio && onChangeRadio($target.value)
    }
  }

  return (
    <div onClick={onClick}>
      {value.map((each) => (
        <label
          key={each.value}
          className={[
            classes.label,
            checked === each.value ? classes.checked : '',
            className,
          ].join(' ')}
          {...rest}
        >
          <input
            className={classes.radio}
            type="radio"
            name={name}
            value={each.value}
            checked={each.value === checked}
            readOnly
          />
          {each.display ?? each.value}
        </label>
      ))}
    </div>
  )
}

export default UnderlineRadioButton
