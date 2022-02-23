import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../app/routes";
import commonStyles from "../../app/CommonStyles.module.css";
import styles from "./Home.module.css";
import { Button } from "@mui/material";
import { StyledContainedBtn, StyledOutlinedBtn } from "../../common/styledMuiComponents/styledForms";

const Home = () => {

  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <div className={styles.homeContent}>
      <h2 className={styles.title}>
        Добро пожаловать в <span className={styles.specialText}>Psy-master</span>
      </h2>

      <p className={styles.text}>
        Здесь ты сможешь проверить свои знания в психологии и возможно узнать
        что то новое в этой сфере.
      </p>
      <StyledContainedBtn variant="contained" disableElevation onClick={()=>navigate(routes.login)} sx={{
        marginRight: "20px",
      }}>Login</StyledContainedBtn>
      <StyledOutlinedBtn variant="outlined" onClick={()=>navigate(routes.signup)}>Signup</StyledOutlinedBtn>

     
      </div>
      <div className={styles.homeSide}>
      </div>
     
    </div>
  );
};

export default Home;


