const BaseStyle = {
  color: {
    light: '#f2f2f2',
    accent: '#db706c',
    gray: '#cccccc',
    dark: '#3e3e3e',
    darkgray: '#5e5e5e',
    blue: '#567ace',
    lightBlue: '#e3eeff',
  },
  fontSize: {
    small: '14px',
    large: '18px',
  },
  shadow: {
    default: '0px 0px 10px rgba(0, 0, 0, 0.4)',
  },
  radius: {
    default: '10px',
  },
  disableButtonHighlight: {
    // 모바일에서, 클릭 시 파란색 highlight 효과 제거
    '-webkit-tap-highlight-color': 'transparent',
    outline: 'none',
    '-ms-touch-action': 'manipulation',
    'touch-action': 'manipulation',
  },
};

export default BaseStyle;