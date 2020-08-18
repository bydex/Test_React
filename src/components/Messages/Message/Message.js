import React from "react";
import classes from "./Message.module.css";


const Message = (props) => {
  return (
    <div className={`${classes.item} ${props.parentClass}`}>
        <div className={classes.imgWrapper}><img className={classes.img} src={props.messImg} /></div>
        <div className={classes.info}>
          <h2 className={classes.name}>{props.messTitle}</h2>
          <div className={classes.text}>{props.messStatus}</div>
        </div>
    </div>
  );
};

export default Message;
