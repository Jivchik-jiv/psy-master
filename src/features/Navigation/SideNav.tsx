import { signOut } from 'firebase/auth';
import * as React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../app/routes';
import { auth } from '../../firebaseSetup';
import styles from './Navigation.module.css';

const SideNav =()=>{

    const avatar=auth.currentUser?.photoURL;

    return (
        <div className={styles.sideNav}>
                <img src={avatar||""} alt="avatar" className={styles.avatar}/>
                <Link to={routes.settings} className={styles.link}>Settings</Link>
                <button type="button" onClick={()=>signOut(auth)} className={styles.btn}>Sign out</button>
        </div>
    )
}

export default SideNav;