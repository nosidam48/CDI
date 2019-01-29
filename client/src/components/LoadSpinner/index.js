import React from 'react';
import "./style.css";

const LoadingSpinner = (props) => (
    <div {...props}>
        <i className="fa fa-spinner fa-spin" /> Loading...
    </div>);

export default LoadingSpinner;