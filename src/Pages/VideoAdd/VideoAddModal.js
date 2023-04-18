import React, { useState } from "react";
import Modals from "./Modals";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


const VideoAddModal = () => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(!false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
    
      <button className="btn" onClick={openModal}>Open Modal</button>
      
      <Modals
        openModal={openModal}
        modalIsOpen={modalIsOpen}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
        subtitle={subtitle}
        customStyles={customStyles}
      >


      </Modals>
    </>
  );
};

export default VideoAddModal;
