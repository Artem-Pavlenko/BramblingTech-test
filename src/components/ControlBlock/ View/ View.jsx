import React from 'react'
import s from './View.module.scss'

const View = () => {
    return (
        <div className={s.viewBlock}>
            <h3>Вид</h3>
            <div className={s.btnBlock}>
                <button>Таблица</button>
                <button>Превью</button>
            </div>
        </div>
    )
}

export default View