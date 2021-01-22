import React from "react";
import s from "./SNInput.module.scss"


const Input = ({type = 'text', ...props}) => {

    return (
        <div className={s.inputBlock}>
            <div>
                <input className={s.textBox} type={type} {...props}/>
                <span className={s.focusBorder}></span>
            </div>
        </div>
    )
}

export default Input