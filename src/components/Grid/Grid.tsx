import React from 'react';
// styles
import useStyles from '../../assets/styles/jss/GridStyles';

const Grid = (props: Props) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <div className={classes.container}>
      {children}
    </div>
  );
};

interface Props {
  children: React.ReactNode;
}

export default Grid;