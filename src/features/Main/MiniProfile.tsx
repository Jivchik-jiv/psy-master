import * as React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../common/AuthRedux/thunks";
import styles from "./Main.module.css";
import GradeIcon from '@mui/icons-material/Grade';

const getStatus = (points: number):string => {
   if(points < 100){
       return "Beginner"
   }

   if(points < 200){
    return "Student"
    }
    return "Master"
}

const MiniProfile = () => {

    const { points, photoURL, displayName } = useSelector(selectUser);

    return (
        <div className={styles.profile}>
            <div className={styles.profileBlock}>
                <p className={styles.profileText}>{displayName}</p>
                <img src={photoURL} alt="avatar" className={styles.profileImg}/>
            </div>
            <div className={styles.profileBlock}>
                <p className={styles.profileText}>{getStatus(points)}</p>
                <p className={styles.profilePoints}>{points}</p>
                <GradeIcon color="primary" sx={{fontSize: 20, marginTop: "4px", }}/>
            </div>

        </div>
    )
}

export default MiniProfile;


