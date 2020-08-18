import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import classes from "./Settings.module.css";


const Settings = () => {
    return (
        <BrowserRouter>
            <div className={classes.SettingsPage}>
                Settigns
            </div>
        </BrowserRouter>
    );
};

export default Settings;
