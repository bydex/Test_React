import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Socials from "../Socials/Socials";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.header}>
        <Logo parentClass={classes.logo} />
        <div className={classes.name}>Александра Подолянская</div>
      </div>

      <Nav />
      <Socials/>
    </aside>
  );
};

export default Sidebar;
