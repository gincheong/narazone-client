import React from 'react';
// components
import RadioWithoutCircle from '../RadioWithoutCircle/RadioWithoutCircle';
// styles
import useStyles from "../../assets/styles/jss/SearchDropdownStyle";

const SearchDropdown = () => {
  const classes = useStyles();

  // TODO 각 값이 api에 어떻게 전달될 지 알아야 함
  // 키워드
  const [keyword, setKeyword] = React.useState('');
  // 검색기간 
  const [date, setDate] = React.useState(1);
  // 업무
  const [task, setTask] = React.useState("물품");
  // 유형
  const [type, setType] = React.useState("발주계획");
  // 계약방법
  const [contract, setContract] = React.useState("전체");

  const adjustDate = (positive: Boolean) => {
    positive ? setDate(date + 1) : setDate(date - 1);
  };

  const onChangeRadio = (event: React.FormEvent, setState: Function) => {
    const $target = event.target as HTMLInputElement;
    // bubbling
    if ($target.tagName === 'INPUT') {
      setState($target.value);
    }
  };

  return (
    <div>
      <label className={classes.container}>
        <span className={classes.label}>키워드</span>
        <div className={classes.controller}>
          <input className={classes.input}
            type="text"
            placeholder={"ex) 재난, 안전, ..."}
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
        </div>
      </label>
      <label className={classes.container}>
        <span className={classes.label}>검색기간</span>
        <div className={classes.controller}>
          {/* TODO input:number로 변경, 0부터 최대 n?까지 */}
          <button type="button" onClick={() => adjustDate(false)}>-</button>
          <div>지난 {date}일</div>
          <button type="button" onClick={() => adjustDate(true)}>+</button>
        </div>
      </label>
      <label className={classes.container}>
        <span className={classes.label}>업무</span>
        <div className={classes.controller} onChange={e => onChangeRadio(e, setTask)}>
          <RadioWithoutCircle name={"업무"} value={"물품"} defaultChecked />
          <RadioWithoutCircle name={"업무"} value={"공사"} />
          <RadioWithoutCircle name={"업무"} value={"용역"} />
        </div>
      </label>
      <label className={classes.container}>
        <span className={classes.label}>유형</span>
          <div className={classes.controller} onChange={e => onChangeRadio(e, setType)}>
            <RadioWithoutCircle name={"유형"} value={"발주계획"} defaultChecked />
            <RadioWithoutCircle name={"유형"} value={"사전규격"} />
            <RadioWithoutCircle name={"유형"} value={"공고"} />
            <RadioWithoutCircle name={"유형"} value={"개찰결과"} />
          </div>
      </label>
      <label className={classes.container}>
        <span className={classes.label}>계약방법</span>
          <div className={classes.controller} onChange={e => onChangeRadio(e, setContract)}>
            <RadioWithoutCircle name={"계약방법"} value={"전체"} defaultChecked />
            <RadioWithoutCircle name={"계약방법"} value={"경쟁"} />
            <RadioWithoutCircle name={"계약방법"} value={"수의"} />
          </div>
      </label>
    </div>
  );
};

export default SearchDropdown;