import React, { PropTypes as PT } from 'react';

const SubmitButton = ({ onSubmit, disabled, className, submitting, buttonLabel = "Submit", values }) => {
    return (
        <button type="submit"
                onClick={onSubmit}
                disabled={disabled}
                className={`right form_submit_button ${className}`}>
            {submitting ? <i className="fa fa-spinner fa-spin fa-fw"/> : buttonLabel}
        </button>
    );
};

SubmitButton.propTypes = {
    onSubmit: PT.func.isRequired,
    disabled: PT.bool,
    className: PT.string,
    submitting: PT.bool,
    buttonLabel: PT.string,
};

export default SubmitButton;
