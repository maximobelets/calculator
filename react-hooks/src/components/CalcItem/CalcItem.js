import React from 'react';
import './CalcItem.css';

const CalcItem = (props) => {
    return(
        <button>{props.name}</button>
    )
};

export default CalcItem;