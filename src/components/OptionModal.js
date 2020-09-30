import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    <Modal
            isOpen={!!props.selectedOpt} 
            contentLabel="Sample Modal"
            onRequestClose={props.handleClearOption}
        >
        <p>{props.selectedOpt}</p>
        <button onClick={props.handleClearOption}>Okay</button>
    </Modal>
);


export default OptionModal;