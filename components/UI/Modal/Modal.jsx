import React from 'react';
import ReactDom from 'react-dom';

import DynamicModalDiv from './Modal.styled';

const Backdrop = ({ onDisable }) => {
  return <DynamicModalDiv backdrop onClick={onDisable} />;
};

const ModalOverlay = ({ children, ...props }) => {
  return <DynamicModalDiv {...props}>{children}</DynamicModalDiv>;
};

const Modal = ({ children, onDisable, ...props }) => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop onDisable={onDisable} />, document.getElementById('overlay'))}
      {ReactDom.createPortal(
        <ModalOverlay onDisable={onDisable} {...props}>
          {children}
        </ModalOverlay>,
        document.getElementById('overlay')
      )}
    </>
  );
};

export default React.memo(Modal);
