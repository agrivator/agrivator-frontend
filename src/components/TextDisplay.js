import React from 'react';

function TextDisplay(props) {
    return (
        <div className="h5 text-secondary font-weight-light">
            {props.message}
        </div>
    )
}

export default TextDisplay;
