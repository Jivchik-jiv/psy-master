import * as React from 'react';
import styles from "./ProfileSettings.module.css";
import cx from "classnames";
import { AuthContext } from '../../common/AuthProvider';
import IconButton from '../../common/IconButton/IconButton';
import {ReactComponent as CloseIcon} from '../../Icons/close.svg';
import commonStyles from '../../app/CommonStyles.module.css';

const avatars = [
    "https://img.icons8.com/color/96/000000/bill-cipher.png",
    "https://img.icons8.com/color/96/000000/brave.png",
    "https://img.icons8.com/color/96/000000/brutus.png",
    "https://img.icons8.com/color/96/000000/grinch.png",
    "https://img.icons8.com/color/96/000000/jerry.png",
    "https://img.icons8.com/color/96/000000/morty-smith.png",
    "https://img.icons8.com/color/96/000000/ninja-turtle.png",
    "https://img.icons8.com/color/96/000000/rick-sanchez.png",
    "https://img.icons8.com/color/96/000000/smurf.png",
    "https://img.icons8.com/color/96/000000/tom.png",
    "https://img.icons8.com/color/96/000000/woody-woodpecker.png",
    "https://img.icons8.com/color/96/000000/batman.png",
    "https://img.icons8.com/color/96/000000/joker-dc.png",
    "https://img.icons8.com/color/96/000000/futurama-bender.png",
    "https://img.icons8.com/color/96/000000/sonic-the-hedgehog-1.png",
    "https://img.icons8.com/color/96/000000/deadpool.png",
    "https://img.icons8.com/color/96/000000/iron-man.png",
    "https://img.icons8.com/color/96/000000/walter-white.png",
    "https://img.icons8.com/color/96/000000/naruto.png",
    "https://img.icons8.com/color/96/000000/darth-vader.png",
  ];

type Props={
  setAvatar: (url: string ) => void, 
  closeModal: () => void
}

 
const AvatarSelector= ({setAvatar, closeModal}:Props) => {

    const context=React.useContext(AuthContext);
    const avatarUrl=context?.currentUser?.photoURL;

    const [selectedAvatar, setSelectedAvatar] = React.useState(avatarUrl||"");

 

      const makeOptionClasses=(url:string)=>{
        return cx({
            [styles.itemWrap]: true,
            [styles.active]: url===selectedAvatar,
        })
    }

  

    return (
        <div className={styles.selectorWrap}>
        <div className={styles.avatarsWrap}>
        {avatars.map((url) => {
            return (
            <div className={makeOptionClasses(url)} key={url}>
              <label key={url}>
                <img src={url} alt="" />
                <input
                  className={styles.radioBtn}
                  type="radio"
                  value={url}
                onClick={()=>setSelectedAvatar(url)}
                />
              </label>
            </div>
            );
          })}
        </div>
        
          <div className={styles.btnsWrap}>
            <button type="button" onClick={()=>setAvatar(selectedAvatar)} className={styles.applyBtn}>Apply</button>
            {/* <div className={styles.iconBtn}>
            <IconButton onClick={closeModal}>
              <CloseIcon width="30px" height="30px"/>
            </IconButton>
            </div> */}
            
          </div>
          
        </div>
    )
}

export default AvatarSelector;