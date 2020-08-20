import React from "react";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={`${classes.logo} ${props.parentClass}`}>
        <div className={classes.imgWrapper}>
            <img alt="" className={classes.img} src="./myLove.jpg" />
        </div>
    </div>
  );
};

export default Logo;
