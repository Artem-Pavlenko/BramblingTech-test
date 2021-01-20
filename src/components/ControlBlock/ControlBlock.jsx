import React from 'react'
import Sort from "./Sort/Sort"
import View from "./ View/ View"
import s from './ControlBlock.module.scss'

const ControlBlock = () => {
    return (
        <div className={s.controlBlock}>
            <Sort/>
            <View/>
        </div>
    )
}

export default ControlBlock