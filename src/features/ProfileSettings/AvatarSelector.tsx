import * as React from 'react';
import styles from "./ProfileSettings.module.css";
import cx from "classnames";

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

 
const AvatarSelector= ({setAvatar}:any) => {
    const [selectedAvatar, setSelectedAvatar] = React.useState(0);

    const makeOptionClasses=(index:number)=>{
        return cx({
            [styles.itemWrap]: true,
            [styles.active]: index===selectedAvatar,
        })
    }

    const handleApply=()=>{
        setAvatar(avatars[selectedAvatar]);
    }

    return (
        <div className={styles.selectorWrap}>
        {avatars.map((url, index) => {
            return (
            <div className={makeOptionClasses(index)} key={url}>
              <label key={url}>
                <img src={url} alt="" />
                <input
                  className={styles.radioBtn}
                  type="radio"
                  value={url}
                onClick={()=>setSelectedAvatar(index)}
                />
              </label>
            </div>
            );
          })}

          <button type="button" onClick={handleApply}>Apply</button>
        </div>
    )
}

export default AvatarSelector;