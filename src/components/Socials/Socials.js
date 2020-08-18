import React from "react";
import classes from "./Socials.module.css";

const Socials = () => {
    return (
        <ul className={classes.socials}>
            <li className={classes.item}>
                <a href="#134" className={classes.link}>Вк</a>
            </li>
            <li className={classes.item}>
                <a href="#134" className={classes.link}>Twitter</a>
            </li>
            <li className={classes.item}>
                <a href="#134" className={classes.link}>Youtube</a>
            </li>
        </ul>
    );
};

export default Socials;
