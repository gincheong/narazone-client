import React from 'react';
// styles
import useStyles from '../../assets/styles/jss/RippleStyles';

const Ripple = (props: Props) => {
  const classes = useStyles();
  const { onAnimationEnd, coords } = props;

  return (
    <div
      className={classes.container}
      onAnimationEnd={onAnimationEnd}
      style={{
        left: coords.x,
        top: coords.y
      }}
    />
  );
};

interface Props {
  onAnimationEnd: React.AnimationEventHandler;
  coords: {
    x: number,
    y: number
  };
}

export default Ripple;