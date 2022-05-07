import * as React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../common/AuthRedux/thunks";
import styles from "./Layout.module.css";
import cx from "classnames";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseSetup";
import { CircularProgress, IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { useLocation, useNavigate } from "react-router-dom";
import routes from "../../app/routes";


const makeOptionClasses = (isAuthorized: boolean) => {
  return cx({
    [styles.isNotAuthorized]: !isAuthorized,
    [styles.contentWrap]: true,
  })
};

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  const [isAuthorized, setIsAuthorized] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const userRedux = useSelector(selectUser);
  const navigate = useNavigate();
  const {pathname} = useLocation();


  React.useEffect(() => {
    if (userRedux.displayName) {
      setIsAuthorized(true);
      return;
    }
    setIsAuthorized(false);
  }, [userRedux]);

  onAuthStateChanged(auth, (user)=>{
    if(user && userRedux.isAuthorized){
      setIsLoading(false);
      return;
    }
    if(!user){
      setIsLoading(false);
    }
    
  })

  if(isLoading){
    return (
      <div className={styles.contentWrap}>
        <div className={styles.loader}>
          <CircularProgress color="primary" size={80} />
        </div>
      </div>)
  }


  if(!isAuthorized){
    return (
      <div className={makeOptionClasses(isAuthorized)}>
        <div className={styles.mainBlock}>
        {children}
        </div>
        
          <div className={styles.sideBlock}/>
      </div>
    )
  }

  return (
    <>
       <div className={makeOptionClasses(isAuthorized)}>
        
      {pathname==="/main" || <div className={styles.mainBtn}>
        <IconButton color="primary" aria-label="back to home page" onClick={() => navigate(routes.main)} size="large">
          <HomeIcon fontSize="inherit" />
        </IconButton>
      </div>}
         {children}
        </div>
    </>
  )

};

export default Layout;
