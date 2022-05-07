import * as React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../app/routes";
import styles from "./Welcome.module.css";
import { StyledContainedBtn, StyledOutlinedBtn } from "../../common/styledMuiComponents/styledForms";

const Home = () => {

  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <h2 className={styles.title}>
        Ласкаво просимо до <span className={styles.specialText}>Psy-master</span>
      </h2>

      <p className={styles.text}>
        Тут ти змошешь перевірити свої знання з психології і можливо дізнатися щось нове у цій сфері.
      </p>
      <StyledContainedBtn variant="contained" disableElevation onClick={() => navigate(routes.login)} sx={{
        marginRight: "20px",
      }}>Login</StyledContainedBtn>
      <StyledOutlinedBtn variant="outlined" onClick={() => navigate(routes.signup)}>Signup</StyledOutlinedBtn>

    </div>
  );
};

export default Home;


