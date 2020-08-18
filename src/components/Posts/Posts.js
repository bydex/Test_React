import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Посты</h1>
      <Post
        postTitle="Я верстальщик, работаю в хостере"
        postText="Первый год работы подходил к концу, Николай подумывал о смене работы"
        parentClass={classes.post} />
      <Post
        postTitle="Мне испольнилось 19 лет"
        postText="На самом деле, 19 лет мне исполнилось уже больше, чем полгода назад, а это значит, что в скором времени мне 20 лет. А это уже неплохой срок, скоро помирать, как мне кажется"
        parentClass={classes.post} />
      <Post
        postTitle="Рассматриваю к покупке игровое кресло"
        postText="Если честно, уже заебался пытаться найти что-то получше, ибо постоянно с этим проебываюсь, но с креслом решил не спешить, и все"
        parentClass={classes.post} />
    </div>
  );
};

export default Posts;
