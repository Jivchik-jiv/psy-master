import { onAuthStateChanged, signOut } from 'firebase/auth';
import * as React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../app/routes';
import { auth } from '../../firebaseSetup';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.css';

type Props={
    children?:JSX.Element|JSX.Element[]
};

const Layout=({children}: Props)=>{

    const [isAuthorized, setIsAutorized] = React.useState(false);

    onAuthStateChanged(auth, (user) => {
      if (user) {
  
        setIsAutorized(true)
  
      } else {
        setIsAutorized(false)
      }
    });
  


    return (
        <>
        <Header/>
        <div className={styles.contentWrap}>
            {isAuthorized&&<Navigation/>}
            {/* <Link to={routes.home}>Main</Link> */}
            {/* {isAuthorized&&<button type="button" onClick={()=>signOut(auth)}>Sign out</button>} */}
            {/* <Link to={routes.settings}>Settings</Link> */}
            {/* <button type="button" onClick={()=>signOut(auth)}>Sign out</button> */}
            {children}
        </div>
        
        </>
    )
};

export default Layout;