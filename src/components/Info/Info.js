import React from "react";
import classes from "./Info.module.css";

const Info = (props) => {
    return (
        <div className={classes.info}>
            <div className={classes.logo}>
                <img src="http://placekitten.com/150/150" className={classes.img} />
            </div>
            <div className={classes.text}>
                <h2>Аникеев Николай</h2>
                <p>День рождения: 4 апреля 2001</p>
                <p>Образование: Лифтовое хозяйство</p>
                <p>Веб-сайт: <a href="//bydex.ru" target="_blank">bydex.ru</a></p>
            </div>
        </div>
    );
};

export default Info;
