import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import cn from 'classnames'
import s from './View.module.scss'
import {PREVIEW, setView, TABLE} from "../../../store/usersReducer"

const View = () => {

    const {filter} = useSelector(state => state.users)
    const dispatch = useDispatch()


    const changePreviewHandler = () => {
        dispatch(setView(PREVIEW))
    }
    const changeTableHandler = () => {
        dispatch(setView(TABLE))
    }

    return (
        <div className={s.viewBlock}>
            <h3>Вид</h3>
            <div className={s.btnBlock}>
                <button
                    onClick={changeTableHandler}
                    className={cn({[s.active]: filter.view === TABLE})}
                    disabled={filter.view === TABLE}
                >
                    Таблица
                </button>
                <button
                    onClick={changePreviewHandler}
                    className={cn({[s.active]: filter.view === PREVIEW})}
                    disabled={filter.view === PREVIEW}
                >
                    Превью
                </button>
            </div>
        </div>
    )
}

export default View