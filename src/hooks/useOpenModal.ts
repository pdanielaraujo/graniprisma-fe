import { useRef } from "react";

export const useOpenModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (!modalRef.current) {
      return;
    }

    modalRef.current.showModal();
  };

  const closeModal = () => {
    if (!modalRef.current) {
      return;
    }

    modalRef.current.close();
  };

  return { modalRef, closeModal, openModal };
};
