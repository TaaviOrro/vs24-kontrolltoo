import React, { forwardRef } from "react";
import ReactDOM from "react-dom";
import  '../../index.css';

const Modal = forwardRef(({ onCloseModal, children }, ref) => {
    const modalcontent = (
        <dialog className='modal' ref={ref}>
            {children}
            <div className='modal-actions'>
                <button onClick={onCloseModal} className="text-button">Close</button>
            </div>
        </dialog>
    )
	return ReactDOM.createPortal(modalcontent, document.getElementById("modal"));
});


export default Modal;