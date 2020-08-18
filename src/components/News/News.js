import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import classes from "./News.module.css";


const News = () => {
    return (
        <BrowserRouter>
            <div className={classes.NewsPage}>
                News
            </div>
        </BrowserRouter>
    );
};

export default News;
