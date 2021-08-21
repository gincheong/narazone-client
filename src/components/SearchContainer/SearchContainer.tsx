import React from 'react';
// styles
import useStyles from "../../assets/styles/jss/SearchContainerStyles";

const SearchContainer = () => {
  const classes = useStyles();

  const [userId, setUserId] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        type="text"
        placeholder="아이디 입력"
        value={userId}
        onChange={e => setUserId(e.target.value)}
      />
      <input
        className={classes.input}
        type="password"
        placeholder="비밀번호 입력"
        value={userPassword}
        onChange={e => setUserPassword(e.target.value)}
      />
      <button className={`${classes.button} ${classes.loginButton}`} type="button">
        로그인
      </button>
      <button className={`${classes.button} ${classes.guestButton}`} type="button">
        게스트로 접속
      </button>
    </div>
  );
};

export default SearchContainer;