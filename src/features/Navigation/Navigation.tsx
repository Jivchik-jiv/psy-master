import * as React from 'react';
import styles from './Navigation.module.css';
import MainNav from './MainNav';
import SideNav from './SideNav';



const Navigation =()=>{

    return (
        <div className={styles.nav}>
            <MainNav/>
            <SideNav/>
        </div>
    )
}

export default Navigation;