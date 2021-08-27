import React from 'react';
// styles
import useStyles from "../../assets/styles/jss/AlarmDropdownStyle";
// components
import RadioWithoutCircle from '../RadioWithoutCircle/RadioWithoutCircle';

const AlarmDropdown = () => {
  const classes = useStyles();

  const [keyword, setKeyword] = React.useState('');
  const [organization, setOrganization] = React.useState('');
  const [task, setTask] = React.useState('');
  const [email, setEmail] = React.useState('');

  const onChangeRadio = (event: React.FormEvent, setState: Function) => {
    const $target = event.target as HTMLInputElement;
    // bubbling
    if ($target.tagName === 'INPUT') {
      setState($target.value);
    }
  };

  // ! email 입력 포맷 validation 필요

  const onClickSave = (event: React.MouseEvent) => {
    console.log('설정 저장');
  };

  const onClickAddAlarm = (event: React.MouseEvent) => {
    const alarmParam: any = {};
    alarmParam['공고키워드'] = keyword;
    alarmParam['공고기관'] = organization;
    alarmParam['업무'] = task;
    alarmParam['수신메일'] = email;

    console.log('알람서비스 신청', alarmParam);
  };

  return (
    <div>
      <label className={classes.container}>
        <span className={classes.label}>공고키워드</span>
        <input className={classes.input}
          type="text"
          placeholder={"ex) 재난"}
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
      </label>
      <label className={classes.container}>
        <span className={classes.label}>공고기관</span>
        <input className={classes.input}
          type="text"
          placeholder={"ex) 행정안전부"}
          value={organization}
          onChange={e => setOrganization(e.target.value)}
        />
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
        <span className={classes.label}>수신메일</span>
        <input className={classes.input}
          type="email"
          placeholder={"ex) abc@naver.com"}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <div className={classes.container}>
        <button className={classes.button} onClick={onClickSave}>
          설정 저장
        </button>
        <button className={classes.button} onClick={onClickAddAlarm}>
          알림서비스 신청
        </button>
      </div>
    </div>
  );
};

export default AlarmDropdown;