import React, { PropTypes as PT } from 'react';
import styled from 'styled-components';

const Field = ({ name, type = "text", className, addClass, onChange, error, value = "", placeholder }) =>
    <Input
        name={name}
        className={`${addClass} + ${className}`}
        onChange={(event) => onChange(event)}
        type={type}
        error={error}
        value={value}
        placeholder={placeholder}
    />;

Field.propTypes = {
    name: PT.string.isRequired,
    type: PT.string,
    addClass: PT.func,
    error: PT.string,
    value: PT.string,
    placeholder: PT.string,
};

const Input = styled.input`
  &&& {
    ${props => props.error ?
    `border: 1px double #FE7177;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);` : null};
  }
`;

export default Field;
