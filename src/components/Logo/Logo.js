import React from "react";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={`${classes.logo} ${props.parentClass}`}>
        <div className={classes.imgWrapper}>
            <img className={classes.img} src="http://placekitten.com/120/120" />
        </div>
    </div>
  );
};

export default Logo;
