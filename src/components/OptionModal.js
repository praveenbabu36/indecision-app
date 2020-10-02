import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    <Modal
            isOpen={!!props.selectedOpt} 
            contentLabel="Sample Modal"
            onRequestClose={props.handleClearOption}
            closeTimeoutMS={200}
            className="modal"
        >
        <h3 className="modal__title">Selected Option: </h3>
        <p className="modal__body"> {props.selectedOpt} </p>
        <button className="s-button" onClick={props.handleClearOption}>Okay</button>
    </Modal>
);


export default OptionModal;