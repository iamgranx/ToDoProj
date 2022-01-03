
import { ButtonStyle } from "./Button.styles";
import { memo } from "react";



const Button = ({onClick, title, type}) => {
    return (
        <ButtonStyle 
        type={type} 
        onClick={onClick}>
        {title}
        </ButtonStyle>

    );
};

export default memo(Button);