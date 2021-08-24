import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
// styles
import useStyles from "../../assets/styles/jss/NumberInputStyles";

const NumberInput = (props: Props) => {
  const classes = useStyles();
  const { state, setState } = props;

  /**
   * @param {boolean} flag true라면 더하기, false라면 빼기
   */
  const adjustNumber = (flag: boolean) => {
    if (flag) {
      setState(String(Number.parseInt(state) + 1));
    } else {
      if (Number.parseInt(state) > 0) {
        setState(String(Number.parseInt(state) - 1));
      }
    }
  };

  // ! 최대값 지정하거나, input의 width를 넓혀야 함
  /**
   * input값이 변경될 때의 처리
   */
  const onChangeNumber = (event: React.ChangeEvent) => {
    const $target = event.target as HTMLInputElement;
    if ($target.valueAsNumber > 0) {
      // 숫자 왼쪽에 0이 오지 않도록 처리
      setState($target.value.replace(/(^0+)/, ""));

    } else if ($target.value === '') {
      // 백스페이스 등으로 숫자 삭제할 때
      setState("0");
    }
  };

  return (
    <div className={classes.container}>
      <button className={classes.button} onClick={() => adjustNumber(false)}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input
        className={classes.inputNumber}
        type="number"
        value={state}
        onChange={onChangeNumber}
      />
      <button className={classes.button} onClick={() => adjustNumber(true)}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

interface Props {
  state: string;
  setState: Function;
}

export default NumberInput;