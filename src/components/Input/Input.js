import React from "react";

import { InputWrapper } from "./Input.styles";

const Input = ({ label, error, description,  ...inputProps}) => {
    return (
        <InputWrapper error={error}>
            <label htmlFor={inputProps.id}>{label}</label>
            <input {...inputProps} />
            {description && <p>{description}</p>}

        </InputWrapper>
    );
};

export default Input;  