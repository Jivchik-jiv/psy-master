import * as React from "react";
import styles from "./Navigation.module.css";
import DropMenu from "./DropMenu";
import { useSelector } from "react-redux";
import { selectUser } from "../../common/AuthRedux/thunks";

const SideNav = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const user = useSelector(selectUser);
  return (
    <div className={styles.sideNav}>
      <img
        src={user.photoURL}
        alt="avatar"
        className={styles.avatar}
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && <DropMenu closeMenu={() => setShowMenu(false)} />}
    </div>
  );
};

export default SideNav;
