import * as React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../common/AuthRedux/thunks";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import styles from "./Layout.module.css";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  const [isAuthorized, setIsAuthorized] = React.useState(false);
  const user = useSelector(selectUser);

  React.useEffect(() => {
    if (user.displayName) {
      setIsAuthorized(true);
      return;
    }
    setIsAuthorized(false);
  }, [user]);

  return (
    <>
      {isAuthorized && <Header />}
      <div className={styles.contentWrap}>
        {isAuthorized && <Navigation />}
        {children}
      </div>
    </>
  );
};

export default Layout;
