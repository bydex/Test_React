import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import classes from "./Profile.module.css";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import Posts from "../Posts/Posts";


const Profile = () => {
    return (
        <BrowserRouter>
            <div className={classes.profilePage}>
                <Banner />
                <Info />
                <Posts />
            </div>
        </BrowserRouter>
    );
};

export default Profile;
