import * as React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../app/routes';
import styles from './Navigation.module.css';

const MainNav =()=>{

    return (
        <div className={styles.mainNav}>
                <Link to={routes.quizzes} className={styles.link} >Quizzes</Link>
        </div>
    )
}

export default MainNav;