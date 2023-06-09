import React from 'react';

const Spacer = (props: {height: number}) => {
    return (
        <div style={{height: `${props.height}rem`}}/>
    );
};

export default Spacer;