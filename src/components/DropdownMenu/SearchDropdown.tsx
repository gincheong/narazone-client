import React from 'react';
// components
import Card from '../Card/Card';
import NumberInput from '../NumberInput/NumberInput';
import RadioWithoutCircle from '../RadioWithoutCircle/RadioWithoutCircle';
import CustomButton from '../CustomButton/CustomButton';
// styles
import useStyles from "../../assets/styles/jss/SearchDropdownStyle";

const SearchDropdown = () => {
  const classes = useStyles();

  // TODO 각 값이 api에 어떻게 전달될 지 알아야 함
  // 키워드
  const [keyword, setKeyword] = React.useState('');
  // 검색기간 
  const [date, setDate] = React.useState("1");
  // 업무
  const [task, setTask] = React.useState("물품");
  // 유형
  const [type, setType] = React.useState("발주계획");
  // 계약방법
  const [contract, setContract] = React.useState("전체");

  const onChangeRadio = (event: React.FormEvent, setState: Function) => {
    const $target = event.target as HTMLInputElement;
    // bubbling
    if ($target.tagName === 'INPUT') {
      setState($target.value);
    }
  };

  const onClickSave = (event: React.MouseEvent) => {
    console.log('설정 저장');
  };

  const onClickSearch = (event: React.MouseEvent) => {
    const searchParam: any = {};
    searchParam['키워드'] = keyword;
    searchParam['검색기간'] = date;
    searchParam['업무'] = task;
    searchParam['유형'] = type;
    searchParam['계약방법'] = contract;

    console.log('검색', searchParam);
  };

  return (
    <Card>
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
          <label>
            지난
            <NumberInput state={date} setState={setDate} min={0} max={30}/>
            일
          </label>
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
      <div className={classes.container}>
        <CustomButton className={classes.button} onClick={onClickSave}>
          설정 저장
        </CustomButton>
        <CustomButton className={classes.button} onClick={onClickSearch}>
          검색
        </CustomButton>
      </div>
    </Card>
  );
};

export default SearchDropdown;