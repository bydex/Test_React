import React from 'react';
import classes from "./Nav.module.css";
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <NavLink className={classes.link} to="/profile" activeClassName={ classes.active }>Профиль</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink className={classes.link} to="/dialogs" activeClassName={classes.active}>Сообщения</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink className={classes.link} to="/news" activeClassName={classes.active}>Новости</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink className={classes.link} to="/music" activeClassName={classes.active}>Музыка</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink className={classes.link} to="/settings" activeClassName={classes.active}>Настройки</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
