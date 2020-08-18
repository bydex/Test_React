import React from "react";
import classes from "./Post.module.css";


const Post = (props) => {
  return (
    <div className={`${classes.post} ${props.parentClass}`}>
        <div className={classes.icon}><img src="https://image.flaticon.com/icons/svg/942/942176.svg" /></div>
        <div className={classes.info}>
          <h2 className={classes.name}>{props.postTitle}</h2>
          <div className={classes.text}>{props.postText}</div>
        </div>
    </div>
  );
};

export default Post;
