import Modal from 'react-modal'
import {useState} from "react";
import '../../styles/modalStyles.css'
import {BookForm} from "./BookForm";
import {BookFormValues} from "../../interfaces";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    maxWidth: '700px'
  },
};

Modal.setAppElement('#root');

interface Props {
  initFormValues?: BookFormValues,
  modalIsOpen: boolean,
  closeModal: () => void
}

const initBookFormValues: BookFormValues = {
  title: '',
  isbn: '',
  author: '',
  release_date: ''
}


export const BookModal = ({initFormValues, modalIsOpen, closeModal}:Props) => {
  if(!initFormValues){
    initFormValues = initBookFormValues
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
    <BookForm
      closeModal={closeModal}
      initValues={initFormValues}
    />


    </Modal>
  );
};
