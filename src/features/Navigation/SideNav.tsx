import { signOut } from "firebase/auth";
import * as React from "react";
import { Link } from "react-router-dom";
import routes from "../../app/routes";
import { auth } from "../../firebaseSetup";
import styles from "./Navigation.module.css";
import { AuthContext } from "../../common/AuthProvider";


const SideNav = () => {

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log("SideNav, Signout error: ", error);
      });
  };

  return (
    <AuthContext.Consumer>
      {(context) => (
        <div className={styles.sideNav}>
          <img
            src={context?.currentUser?.photoURL || ""}
            alt="avatar"
            className={styles.avatar}
          />
          <Link to={routes.settings} className={styles.link}>
            Settings
          </Link>
          <button type="button" onClick={handleSignout} className={styles.btn}>
            Sign out
          </button>
        </div>
      )}
    </AuthContext.Consumer>
  );
};

export default SideNav;
