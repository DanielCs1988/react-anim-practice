import React from "react";
import CSSTransition from 'react-transition-group/CSSTransition';
import "./Modal.css";

const animationTiming = {
    enter: 400,
    exit: 200
};

const modal = ({ show, closed }) => (
    <CSSTransition in={show} timeout={animationTiming} mountOnEnter unmountOnExit classNames="modal">
        <div className="Modal">
            <h1>A Modal</h1>
            <button className="Button" onClick={closed}>
                Dismiss
            </button>
        </div>
    </CSSTransition>
);

export default modal;
