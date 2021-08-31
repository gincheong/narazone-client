import React from 'react';
import { useDispatch } from 'react-redux';
// components
import Card from '../Card/Card';
import NumberInput from '../NumberInput/NumberInput';
import RadioWithoutCircle from '../RadioWithoutCircle/RadioWithoutCircle';
import CustomButton from '../CustomButton/CustomButton';
// actions
import { fetchBid } from '../../reducers/bidReducer';
// styles
import useStyles from "../../assets/styles/jss/SearchDropdownStyle";
import Grid from '../Grid/Grid';

const SearchDropdown = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

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
    // unused
    const searchParam: any = {};
    searchParam['키워드'] = keyword;
    searchParam['검색기간'] = date;
    searchParam['업무'] = task;
    searchParam['유형'] = type;
    searchParam['계약방법'] = contract;

    // ? 키워드 입력하지 않을 시 검색하지 않음
    // ? UI적인 표현이 필요해보임
    if (keyword === '') { return; }

    dispatch(fetchBid({ itemName: keyword, period: date }));

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
          <Grid>
            <RadioWithoutCircle
              className={classes.radio} checkedClassName={classes.radioChecked}
              name={"업무"} value={"물품"} defaultChecked
            />
            <RadioWithoutCircle
              className={classes.radio} checkedClassName={classes.radioChecked}
              name={"업무"} value={"공사"}
            />
            <RadioWithoutCircle
              className={classes.radio} checkedClassName={classes.radioChecked}
              name={"업무"} value={"용역"}
            />
          </Grid>
        </div>
      </label>
      <label className={classes.container}>
        <span className={classes.label}>유형</span>
          <div className={classes.controller} onChange={e => onChangeRadio(e, setType)}>
            <Grid>
              <RadioWithoutCircle
                className={classes.radio} checkedClassName={classes.radioChecked}
                name={"유형"} value={"발주계획"} defaultChecked
              />
              <RadioWithoutCircle
                className={classes.radio} checkedClassName={classes.radioChecked}
                name={"유형"} value={"사전규격"}
              />
            </Grid>
            <Grid>
              <RadioWithoutCircle
                className={classes.radio} checkedClassName={classes.radioChecked}
                name={"유형"} value={"공고"}
              />
              <RadioWithoutCircle
                className={classes.radio} checkedClassName={classes.radioChecked}
                name={"유형"} value={"개찰결과"}
              />
            </Grid>
          </div>
      </label>
      <label className={classes.container}>
        <span className={classes.label}>계약방법</span>
          <div className={classes.controller} onChange={e => onChangeRadio(e, setContract)}>
            <Grid>
              <RadioWithoutCircle
                className={classes.radio} checkedClassName={classes.radioChecked}
                name={"계약방법"} value={"전체"} defaultChecked
              />
              <RadioWithoutCircle
                className={classes.radio} checkedClassName={classes.radioChecked}
                name={"계약방법"} value={"경쟁"}
              />
              <RadioWithoutCircle
                className={classes.radio} checkedClassName={classes.radioChecked}
                name={"계약방법"} value={"수의"}
              />
            </Grid>
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