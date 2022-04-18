import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext';

import styles from './navbar.module.scss'

const Navbar = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <nav className={`${styles.nav} ${styles[`${theme}`]}`}>
            <h1 className={`${styles.nav__logo}`}>LOGO</h1>
            <ul className={`${styles.nav__listItems}`}>
                <li className={styles.nav__listItems__listItem}> About </li>
                <li className={styles.nav__listItems__listItem}> Design </li>
                <li className={styles.nav__listItems__listItem}> Pricing </li>
                <li className={styles.nav__listItems__listItem}> Contact </li>
            </ul>
            <button className={styles.nav__themeButton} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button>
        </nav>
    )
}

export default Navbar