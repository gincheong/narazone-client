import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
// styles
import useStyles from "../../assets/styles/jss/NumberInputStyles";

const NumberInput = (props: Props) => {
  const classes = useStyles();
  const { state, setState, min, max } = props;

  const [MIN_VALUE, MAX_VALUE] = [min, max];

  /**
   * @param {boolean} flag true라면 더하기, false라면 빼기
   */
  const adjustNumber = (flag: boolean) => {
    if (flag) {
      if (Number.parseInt(state) < MAX_VALUE) {
        setState(String(Number.parseInt(state) + 1));
      }
    } else {
      if (Number.parseInt(state) > MIN_VALUE) {
        setState(String(Number.parseInt(state) - 1));
      }
    }
  };

  /**
   * input값이 변경될 때의 처리
   */
  const onChangeNumber = (event: React.ChangeEvent) => {
    const $target = event.target as HTMLInputElement;

    if ($target.valueAsNumber > MAX_VALUE) {
      setState(MAX_VALUE);
    } else if ($target.valueAsNumber > MIN_VALUE) {
      // 숫자 왼쪽에 0이 오지 않도록 처리
      setState($target.value.replace(/(^0+)/, ""));

    } else if ($target.value === '') {
      // 백스페이스 등으로 숫자 삭제할 때
      setState(MIN_VALUE);
    }
  };

  const onKeyDownNumber = (event: React.KeyboardEvent) => {
    if (event.key === '.') {
      // 소수점 입력 제한
      event.preventDefault();
    }
  };

  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={() => adjustNumber(false)} title="minus">
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input
        className={classes.inputNumber}
        type="number"
        value={state}
        onChange={onChangeNumber}
        onKeyDown={onKeyDownNumber}
      />
      <button className={classes.button} onClick={() => adjustNumber(true)} title="plus">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

interface Props {
  state: string;
  setState: Function;
  min: number;
  max: number;
}

export default NumberInput;