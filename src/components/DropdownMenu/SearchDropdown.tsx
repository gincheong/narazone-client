// styles
import useStyles from "../../assets/styles/jss/SearchDropdownStyle";

const SearchDropdown = () => {
  const classes = useStyles();

  return (
    <div>
      <label className={classes.container}>
        <span className={classes.label}>키워드</span>
        <div className={classes.controller}>
          <input className={classes.input} type="text"
            placeholder={"ex) 재난, 안전, ..."}
          />
        </div>
      </label>
      <label className={classes.container}>
        <span className={classes.label}>검색기간</span>
        <div className={classes.controller}>
          <button type="button">-</button>
          <div>지난 2일</div>
          <button type="button">+</button>
        </div>
      </label>
      <label className={classes.container}>
        <span className={classes.label}>업무</span>
        <div className={classes.controller}>
          <button>물품</button>
          <button>공사</button>
          <button>용역</button>
        </div>
      </label>
      <label className={classes.container}>
        <span className={classes.label}>유형</span>
          <div className={classes.controller}>
            <button>발주계획</button>
            <button>사전규격</button>
            <button>공고</button>
            <button>개찰결과</button>
          </div>
      </label>
      <label className={classes.container}>
        <span className={classes.label}>계약방법</span>
          <div className={classes.controller}>
            <button>전체</button>
            <button>경쟁</button>
            <button>수의</button>
          </div>
      </label>
    </div>
  );
};

export default SearchDropdown;