import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import classes from "./Music.module.css";


const Music = () => {
    return (
        <BrowserRouter>
            <div className={classes.MusicPage}>
                Music
            </div>
        </BrowserRouter>
    );
};

export default Music;
