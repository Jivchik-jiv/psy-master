import * as React from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

type Props = {
    children: JSX.Element | JSX.Element[],
}

const Modal=({children}:Props)=>{


    return createPortal(
        <div className={styles.backdrop}>
            <div className={styles.content}>
                {children}
            </div>
        </div>, document.querySelector<HTMLElement>('#modal-root')!
    )
        
    
}

export default Modal;