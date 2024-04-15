/**
 * ************************************
 *
 * @module  Modal
 * @description Renders modal with content
 *
 * ************************************
 */

import './Modal.scss';

interface ModalProps {
  hideModal: () => void;
  children: JSX.Element;
}

const Modal = ({ hideModal, children }: ModalProps) => {
  return (
    <div id='overlay'>
      <div id='modal'>
        <div id='close-modal-button-container'>
          <button id='close-button' onClick={hideModal}>
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
