import * as React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../app/routes';
import styles from './Navigation.module.css';

const MainNav =()=>{

    return (
        <div className={styles.mainNav}>
                <Link to={routes.tests} className={styles.link} >Tests</Link>
        </div>
    )
}

export default MainNav;