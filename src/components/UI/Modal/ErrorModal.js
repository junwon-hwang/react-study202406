import React from "react";
// potal을 사용하기 위한 불러오기
import ReactDom from 'react-dom';

import Card from "../Card";
import Button from "../Button";
import styles from "./ErrorModal.module.css";

const BackDrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ title, message, onClose }) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onClose}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onClose }) => {
  return (
    <>
      {
        ReactDom.createPortal(
          <BackDrop onClose={onClose} />
          , document.getElementById('backdrop-root')
        )
      }
      {
        ReactDom.createPortal(
          <ModalOverlay title={title} message={message} onClose={onClose} />
          , document.getElementById('overlay-root')
        )
      }     

      
    </>
  );
};

export default ErrorModal;
