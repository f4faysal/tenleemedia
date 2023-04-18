import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import VideoPlay from "./VideoPlay/VideoPlay";
Modal.setAppElement("#root");

const Modals = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  subtitle,
  customStyles,
}) => {
  const [active, setActive] = useState(!false);
  setTimeout(() => {
    setActive(false);
    console.log("Delayed for 1 second.");
  }, "30000");
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      // onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}

      <div>
        <VideoPlay />
      </div>

      <form>
        {/* <input />
        <button className="btn">tab navigation</button>
        <button className="btn">stays</button>
        <button className="btn">inside</button>
        <button className="btn">the modal</button> */}

        <Link
          onClick={closeModal}
          className={`btn btn-info ${active ? "btn-disabled" : "btn-active"} `}
          to={"/dashboard/reports"}
        >
          dashboard
        </Link>
      </form>
    </Modal>
  );
};

export default Modals;
