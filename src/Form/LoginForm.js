import React, { PropTypes as PT } from 'react';
import SubmitButton from './SubmitButton';
import FormRow from './FormRow';

const LoginForm = ({ pristine, invalid, submitting, onSubmit, onForgotPassword, onRegister, fields, onChange, ...rest }) => {
    const { values, errors, touched, valid } = fields;
    return (
        <form className="form" {...rest}>
            <h3>Login</h3>
            <div className="form__cta">
                <FormRow name="email"
                         type="email"
                         placeholder="E-mail"
                         value={values.email}
                         error={errors.email}
                         onChange={onChange}
                         touched={touched.email}
                         valid={valid.email}
                />
                <FormRow name="password"
                         type="password"
                         placeholder="Password"
                         value={values.password}
                         error={errors.password}
                         onChange={onChange}
                         touched={touched.password}
                         valid={valid.password}
                />
                <a className="button button--small button--transparent left" onClick={onForgotPassword}>Forgot
                    Password</a>
                <SubmitButton disabled={pristine || invalid || submitting}
                              submitting={submitting}
                              buttonLabel="Login"
                              onSubmit={onSubmit}
                />
            </div>
            <footer className="aligncenter">
                Don’t have an account?<a className="register-link" onClick={onRegister}>Click here to register</a>
            </footer>
        </form>
    )
};

LoginForm.propTypes = {
    pristine: PT.bool.isRequired,
    invalid: PT.bool.isRequired,
    submitting: PT.bool.isRequired,
    onSubmit: PT.func.isRequired,
    onChange: PT.func.isRequired,
    onForgotPassword: PT.func.isRequired,
    onRegister: PT.func.isRequired,
    fields: PT.objectOf(PT.objectOf(PT.oneOfType([PT.string, PT.bool]))).isRequired
};

export default LoginForm;


