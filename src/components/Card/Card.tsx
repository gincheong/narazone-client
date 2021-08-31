// styles
import React from "react";
import useStyles from "../../assets/styles/jss/CardStyles";

const Card = (props: Props & React.HTMLAttributes<HTMLDivElement>) => {
  const classes = useStyles();
  const { children, className } = props;

  return (
    <div className={classes.container + " " + (className ?? '')}>
      {children}
    </div>
  );
};

interface Props {
  children: React.ReactNode;
}

export default Card;