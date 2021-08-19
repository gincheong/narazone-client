import React from 'react';
// styles
import useStyles from "../../assets/styles/jss/SearchContainerStyles";

const SearchContainer = () => {
  const classes = useStyles();

  const [searchKeyword, setSearchKeyword] = React.useState('');
  const [searchDatetime, setSearchDatetime] = React.useState('');

  // 숫자만 입력 가능하도록 이벤트 등록
  const onChangeNumberInput = (event: React.ChangeEvent) => {
    setSearchDatetime((event.target as HTMLInputElement).value.replace(/[^0-9]/, ''));
  };

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type="text"
        placeholder="검색키워드1, 검색키워드2, ..."
        value={searchKeyword}
        onChange={e => setSearchKeyword(e.target.value)}
      />
      <input
        className={classes.input}
        type="text"
        placeholder="검색기간(일, 기본값 1)"
        value={searchDatetime}
        onChange={onChangeNumberInput}
      />
      <button className={classes.button} type="button">검색</button>
    </div>
  );
};

export default SearchContainer;