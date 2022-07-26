import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from './ModalComponent.module.css';

const Backdrop = (props: any) => {
  return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props: any) => {
  return (
    <div
      className={styles.modal}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const overlays = document.getElementById('overlays') as HTMLElement;

const ModalComponent = (props: any) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onHide} />, overlays)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlays
      )}
    </Fragment>
  );
};

export default ModalComponent;
