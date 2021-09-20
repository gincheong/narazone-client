import React from 'react'

export interface RadioValue {
  display?: string
  value: string | number
}

interface Props {
  value: RadioValue[]
  name: string
  underlineColor?: string
  onChangeRadio?: (value: string) => void
}

export type UnderlineRadioButtonProps = Props &
  React.LabelHTMLAttributes<HTMLLabelElement>
