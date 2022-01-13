import { onAuthStateChanged } from "firebase/auth";
import * as React from "react";
import { auth } from "../../firebaseSetup";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import styles from "./Layout.module.css";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  const [isAuthorized, setIsAuthorized] = React.useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthorized(true);
      return;
    }
    setIsAuthorized(false);
  });

  return (
    <>
      <Header />
      <div className={styles.contentWrap}>
        {isAuthorized && <Navigation />}
        {children}
      </div>
    </>
  );
};

export default Layout;
