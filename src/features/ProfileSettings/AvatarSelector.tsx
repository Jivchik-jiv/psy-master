import * as React from "react";
import styles from "./ProfileSettings.module.css";
import cx from "classnames";
import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "../../firebaseSetup";
import { Grid } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { selectUser } from "../../common/AuthRedux/thunks";
import { StyledContainedBtn } from "../../common/styledMuiComponents/styledForms";


type Props = {
  setAvatar: (url: string) => void;
};

const AvatarSelector = ({ setAvatar }: Props) => {

  const { photoURL } = useSelector(selectUser);

  const [selectedPhotoUrl, setSelectedPhotoUrl] = React.useState(photoURL || "");
  const [avatarsArray, setAvatarsArray] = React.useState<null | string[]>(null);

  React.useEffect(() => {
    getDoc(doc(firebaseDB, "avatars", "avatars"))
      .then((response) => {
        if (response.exists()) {
          setAvatarsArray(response.data().avatars);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const makeOptionClasses = (url: string) => {
    return cx({
      [styles.itemWrap]: true,
      [styles.active]: url === selectedPhotoUrl,
    });
  };

  return (
    <div className={styles.selectorWrap}>
      {avatarsArray ? (
        <>
          <div className={styles.avatarsWrap}>
            {avatarsArray.map((url) => {
              return (
                <div className={makeOptionClasses(url)} key={url}>
                  <label key={url}>
                    <img src={url} alt="" />
                    <input
                      className={styles.radioBtn}
                      type="radio"
                      value={url}
                      onClick={() => setSelectedPhotoUrl(url)}
                    />
                  </label>
                </div>
              );
            })}
          </div>
            <StyledContainedBtn
              type="button"
              variant="contained"
              onClick={() => setAvatar(selectedPhotoUrl)}
              disableElevation
              color="secondary"
            >
              Apply
            </StyledContainedBtn>
        </>
      ) : (
        <div className={styles.loader}>
          <Grid color="#fece00" height={80} width={80} />
        </div>
      )}
    </div>
  );
};

export default AvatarSelector;
