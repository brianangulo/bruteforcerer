import React from 'react';

function Error(props) {
    
    return (
        <p hidden={props.isHidden} className="row text-center" style={{color: "red", fontWeight: "bold"}} >For the sake of your time we can only test 4 alpha-num characters or less!</p>
    );
}

export default Error;