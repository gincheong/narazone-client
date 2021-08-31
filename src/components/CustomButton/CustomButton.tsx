import React from 'react';
// components
import Ripple from './Ripple';
// styles
import useStyles from '../../assets/styles/jss/CustomButtonStyles';

const CustomButton = (props: Props & React.HtmlHTMLAttributes<HTMLDivElement>) => {
  const classes = useStyles();
  const { children, className, onClick } = props;

  const [rippleKey, setRippleKey] = React.useState(0);
  const [ripples, setRipples] = React.useState<{
    [key: string]: {
      x: number,
      y: number
    }}>({});

  const buttonRef = React.useRef<HTMLDivElement>(null);

  const onClickButton = (event: React.MouseEvent) => {
    const $target = buttonRef.current as HTMLDivElement;
    const rect = $target.getBoundingClientRect();

    setRipples(prevState => {
      return { ...prevState,
        [rippleKey]: {
          x: event.clientX - rect.left,
          // x: event.clientX - rect.left,
          y: event.clientY - rect.top,
          // y: event.clientY - rect.top,
        }
      }
    });

    setRippleKey(prevState => prevState + 1);
  };

  const onRippleEnd = (event: React.AnimationEvent, key: string) => {
    // ? @keyframe 이름을 그대로 사용
    if (event.animationName === 'ripple-effect') {
      // state 비교 시에 shallow comparison하므로 새로 객체 생성해서 제외시킴
      const newRipples = Object.assign({}, ripples);
      delete newRipples[key];
      setRipples(newRipples);
    }
  };

  return (
    <div
      className={className + " " + classes.container}
      onClick={e => {
        onClickButton(e);
        onClick && onClick(e);
      }}
      ref={buttonRef}
    >
      {children}

      {/* Ripple을 이곳에 같이 render함 */}
      {Object.keys(ripples).map(each => 
        <Ripple
          key={each}
          onAnimationEnd={e => onRippleEnd(e, each)}
          coords={ripples[each]}
        />
      )}
    </div>
  );
};

interface Props {
  children: React.ReactNode;
}

export default CustomButton;