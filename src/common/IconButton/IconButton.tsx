import * as React from 'react';
import styles from './IconButton.module.css';

interface Props {
    children: React.ReactElement,
    onClick: ()=>void
}

const IconButton =({children, onClick} : Props)=>{

    return (
        <button type="button" onClick={onClick} className={styles.btn}>
            {children}
        </button>
    )
}

export default IconButton;