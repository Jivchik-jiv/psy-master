import { signOut } from "firebase/auth";
import * as React from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../../common/AuthRedux/thunks";
import { StyledContainedBtn } from "../../common/styledMuiComponents/styledForms";
import { auth } from "../../firebaseSetup";
import styles from "./Main.module.css";
import MiniProfile from "./MiniProfile";
import Navigation from "../Navigation/Navigation"

const Main = () => {

    const dispatch = useDispatch()

    const handleSignout = () => {
        signOut(auth)
          .then(() => {
            dispatch(clearUser());
          })
          .catch((error) => {
            console.log("Main page, Signout error: ", error);
          });
      };

    return (
        <div className={styles.main}>
        <MiniProfile />
        <Navigation/>
        <StyledContainedBtn variant="contained" disableElevation onClick={handleSignout}>Logout</StyledContainedBtn>
        </div>
    )
}

export default Main;