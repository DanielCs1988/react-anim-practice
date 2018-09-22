import React from 'react';

import './Backdrop.css';

const backdrop = ({ show, onClick }) => {
    const cssClasses = ['Backdrop', show ? 'BackdropOpen' : 'BackdropClosed'];

    return <div className={cssClasses.join(' ')} onClick={onClick} />;
};

export default backdrop;