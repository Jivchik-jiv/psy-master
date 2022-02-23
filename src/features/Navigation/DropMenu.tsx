import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import routes from "../../app/routes";
import { clearUser, selectUser } from "../../common/AuthRedux/thunks";
import { auth } from "../../firebaseSetup";
import styles from "./Navigation.module.css";

type Props = {
  closeMenu: () => void;
};

const DropMenu = ({ closeMenu }: Props) => {
  const dispatch = useDispatch();
  const { points, photoURL, displayName } = useSelector(selectUser);

  React.useEffect(() => {
    const handleClick = (e: Event) => {
      // debugger;
      // const closestTarget = (e.target as Element).closest(
      //   `.${styles.dropMenu}`
      // );
      // if (closestTarget) {
        closeMenu();
      // }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [closeMenu]);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(clearUser());
      })
      .catch((error) => {
        console.log("SideNav, Signout error: ", error);
      });
  };

  return (
    <div className={styles.dropMenu}>
      <div className={styles.profileBlock}>
        <img src={photoURL} alt="avatar" className={styles.avatar} />
        <div>
          <p>{displayName}</p>
          <p className={styles.secondaryText}> Points: {points}</p>
        </div>
      </div>
      <ul className={styles.navList}>
        <li>
          <Link to={routes.settings} className={styles.link}>
            Settings
          </Link>
        </li>
        <li>
          {/* <button type="button" onClick={handleSignout} className={styles.btn}>
            Sign out
          </button> */}
          <Button variant="contained" onClick={handleSignout} color = "secondary" size="small">Sign out</Button>
        </li>
      </ul>
    </div>
  );
};

export default DropMenu;
