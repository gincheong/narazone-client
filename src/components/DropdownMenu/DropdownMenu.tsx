import React from 'react';
// styles
import useStyles from "../../assets/styles/jss/DropdownMenuStyle";

const DropdownMenu = (props: Props) => {
  const classes = useStyles();
  const { children, title } = props;

  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className={classes.container}>
      <button 
        type="button"
        className={classes.button}
        onClick={() => setIsVisible(!isVisible)}
      >
        {title}
      </button>
      {isVisible && 
        <div className={classes.menuContainer}>
          {children}
        </div>
      }
    </div>
  );
};

interface Props {
  children: React.ReactNode;
  title: string;
}

export default DropdownMenu;