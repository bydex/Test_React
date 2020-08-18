import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import classes from "./Dialogs.module.css";
import Messages from "../Messages/Messages";


const Dialogs = () => {
    return (
        <BrowserRouter>
            <div className={classes.DialogsPage}>
                <Messages />
            </div>
        </BrowserRouter>
    );
};

export default Dialogs;
