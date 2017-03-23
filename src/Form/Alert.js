import React, { PropTypes as PT } from 'react';

const Alert = ({ error, warning }) => {
    return (
        (error && <div className="alert alert--error">{error}</div>) ||
        (warning && <div className="alert alert--warning">{warning}</div>) || null
    );
};

Alert.propTypes = {
    error: PT.string,
    warning: PT.string
};

export default Alert;
