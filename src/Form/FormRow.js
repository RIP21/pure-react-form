import React, { PropTypes as PT } from 'react';
import Alert from './Alert';
import Field from './Field';

const FormRow = ({ error, warning, touched, ...input }) =>
    (
        <div className="form__row">
            {touched && <Alert error={error} warning={warning}/>}
            <Field {...input} error={error}/>
        </div>
    );

FormRow.propTypes = {
    name: PT.string.isRequired,
    error: PT.string,
    warning: PT.string,
    touched: PT.bool,
    type: PT.string,
    addClass: PT.func,
    value: PT.string
};

export default FormRow;
