import React from 'react';
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

  const onClickBtn = (event: React.MouseEvent, setState: Function) => {
    const $target = event.target as HTMLButtonElement;
    // bubbling
    if ($target.tagName === 'BUTTON') {
      setState($target.innerText);
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
          <button type="button" onClick={() => adjustDate(false)}>-</button>
          <div>지난 {date}일</div>
          <button type="button" onClick={() => adjustDate(true)}>+</button>
        </div>
      </label>
      <label className={classes.container}>
        <span className={classes.label}>업무</span>
        <div className={classes.controller} onClick={e => onClickBtn(e, setTask)}>
          <button>물품</button>
          <button>공사</button>
          <button>용역</button>
        </div>
      </label>
      <label className={classes.container}>
        <span className={classes.label}>유형</span>
          <div className={classes.controller} onClick={e => onClickBtn(e, setType)}>
            <button>발주계획</button>
            <button>사전규격</button>
            <button>공고</button>
            <button>개찰결과</button>
          </div>
      </label>
      <label className={classes.container}>
        <span className={classes.label}>계약방법</span>
          <div className={classes.controller} onClick={e => onClickBtn(e, setContract)}>
            <button>전체</button>
            <button>경쟁</button>
            <button>수의</button>
          </div>
      </label>
    </div>
  );
};

export default SearchDropdown;