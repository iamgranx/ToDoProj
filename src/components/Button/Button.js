import styled from "styled-components";
import { ButtonStyle } from "./Button.styles";



const Button = ({onClick, title, type}) => {
    return (
        <ButtonStyle type={type} onClick={onClick}>
        {title}
        </ButtonStyle>

    );
};

export default Button;