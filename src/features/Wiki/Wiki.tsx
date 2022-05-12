import * as React from 'react';
import styles from './Wiki.module.css';


const Wiki = () => {

    return (
        <div>
            <h1 className={styles.title}>Wiki</h1>
            <div className={styles.wiki}></div>
        </div>
    )
}

export default Wiki;