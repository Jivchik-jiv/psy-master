import * as React from "react";
import { createPortal } from "react-dom";
import IconButton from "../IconButton/IconButton";
import styles from "./Modal.module.css";
import { ReactComponent as CloseIcon } from "../../Icons/close.svg";


type Props = {
  children: JSX.Element | JSX.Element[];
  closeModal: () => void;
};

const Modal = ({ children, closeModal }: Props) => {
  React.useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [closeModal]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.content}>
        {children}
        <div className={styles.closeBtn}>
          <IconButton onClick={closeModal}>
            <CloseIcon width="30px" height="30px" />
          </IconButton>


        </div>
      </div>
    </div>,
    document.querySelector<HTMLElement>("#modal-root")!
  );
};

export default Modal;
