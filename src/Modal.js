import React from "react";
import "./Modal.css";
import { BiAlignJustify } from "react-icons/bi";
import { useRef } from "react";
import { use } from "i18next";
import { useState } from "react";

const Modal = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="block_icon">
        <BiAlignJustify color="red" size={40} />
      </div>
      <div className="hello" />
      <h2>Modal Hello React</h2>
    </div>
  );
};

export default Modal;
