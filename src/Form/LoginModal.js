import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import Modal from 'react-modal';
import Alert from './Alert';
import { loginSubmitAction, loginToggle } from '../../../redux/login';
import { registerToggle } from '../../../redux/register';
import { recoveryToggle } from '../../../redux/recovery';

class LoginModal extends Component {

    state = {
        form: {
            invalid: true,
            pristine: true
        },
        fields: {
            values: {
                email: '',
                password: ''
            },
            errors: {
                email: '',
                password: ''
            },
            valid: {
                email: false,
                password: false
            },
            touched: {
                email: false,
                password: false
            }
        }
    };

    validate = (field, value) => {
        switch (field) {
            case 'email':
                if (!value) {
                    return 'Please, enter your e-mail';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                    return "Please, enter valid e-mail";
                }
                return undefined;
            case 'password':
                if (!value) {
                    return 'Please, enter the password'
                } else if (value.length < 6) {
                    return "Password is too short"
                }
                return undefined;
            default:
                return undefined;
        }
    };

    onChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const error = this.validate(field, value);
        const isValid = !error;
        this.setState((prevState) => {
            const { touched, valid, values, errors } = prevState.fields;
            //Merge copy if all true then form is valid
            const formValid = Object.values({ ...valid, [field]: isValid }).every((it) => it === true);
            return {
                form: {
                    ...prevState.form,
                    invalid: !formValid,
                    pristine: false
                },
                fields: {
                    ...prevState.fields,
                    valid: { ...valid, [field]: isValid },
                    touched: { ...touched, [field]: true },
                    errors: { ...errors, [field]: error },
                    values: { ...values, [field]: value }
                }
            };
        });
    };

    onLogin = (event) => {
        event.preventDefault();
        const { email, password } = this.state.fields.values;
        this.props.loginSubmitAction(email, password);
    };

    onForgotPassword = () => {
        this.props.loginToggle();
        this.props.recoveryToggle();
    };

    onRegister = () => {
        this.props.loginToggle();
        this.props.registerToggle();
    };

    render() {
        const { pristine, invalid } = this.state.form;
        const { isOpen, submittingError, submitting } = this.props;
        return (
            <Modal
                isOpen={isOpen}
                className="modal-content small-modal-form"
                overlayClassName="modal-wrapper"
                closeTimeoutMS={200}
                contentLabel="login">
                <button className="remodal-close" onClick={this.props.loginToggle}/>
                <div className="login-popup">
                    <Alert error={submittingError}/>
                    <LoginForm fields={this.state.fields}
                               pristine={pristine}
                               submitting={submitting}
                               invalid={invalid}
                               onChange={this.onChange}
                               onSubmit={this.onLogin}
                               onRegister={this.onRegister}
                               onForgotPassword={this.onForgotPassword}
                    />
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        submittingError: state.login.error,
        isOpen: state.login.isOpen,
        submitting: state.login.isFetching,
    }
};

export default connect(
    mapStateToProps,
    { loginSubmitAction, loginToggle, registerToggle, recoveryToggle }
)(LoginModal);
