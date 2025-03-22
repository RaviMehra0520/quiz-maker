import React from "react";
import { ButtonProps } from "../interfaces";

const Button:React.FC<ButtonProps> = ({id, label, disabled, isActive, isCorrectAnswer, quizSubmitted, onClick}) => {
    const handleBtnClick = () => {
        onClick(label)
    }
    let buttonClass = '';
    if ((quizSubmitted && isCorrectAnswer) || (isActive && !quizSubmitted)) {
        buttonClass = 'green';
    } else if(quizSubmitted && !isCorrectAnswer && isActive){
        buttonClass = 'red';
    } else {
        buttonClass = 'normal-btn';  
    }
    return <button className={`default-btn ${buttonClass}`} id={id} disabled={disabled || false} onClick={handleBtnClick}>{label}</button>
}

export default Button;