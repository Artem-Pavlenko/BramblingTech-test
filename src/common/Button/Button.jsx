import React from "react"
import s from "./SNButton.module.scss"
import cn from "classnames"


const Button = (props) => {

    return (
        <div className={cn(s.btnBlock, {[s.disabledBtn]: props.disabled})}>
            <button disabled={props.disabled} onClick={props.onClick}>{props.children}</button>
        </div>
    )
}

export default Button