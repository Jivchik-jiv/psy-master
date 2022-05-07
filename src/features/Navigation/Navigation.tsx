import * as React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';
import routes from '../../app/routes';



const Navigation =()=>{

    return (
        <div className={styles.nav}>
            <Link to={routes.quizzes} className={styles.link}>Quizzes</Link>
            <Link to={routes.rating} className={styles.link}>Rating</Link>
            <Link to={routes.wiki} className={styles.link}>Wiki</Link>
            <Link to={routes.settings} className={styles.link}>Settings</Link>
        </div>
    )
}

export default Navigation;