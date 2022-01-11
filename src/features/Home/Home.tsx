import * as React from "react";
import { Link } from "react-router-dom";
import routes from "../../app/routes";
import commonStyles from "../../app/CommonStyles.module.css";
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <h2 className={commonStyles.title}>
        Добро пожаловать в приложение Psy-master
      </h2>

      <p className={commonStyles.text}>
        Здесь ты сможешь проверить свои згнания в психологии и возможно узнать
        что то новое в этой сфере.
      </p>
      <div className={styles.authBlock}>
        <p className={commonStyles.text}>
          Для того что бы начать, авторизируйся:{" "}
        </p>

        <Link to={routes.login} className={commonStyles.navLink}>
          Login
        </Link>

        <p className={commonStyles.text}>
          Впервые с нами? Тогда зарегистируйся:{" "}
        </p>

        <Link to={routes.signup} className={commonStyles.navLink}>
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Home;
