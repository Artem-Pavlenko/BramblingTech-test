import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import cn from 'classnames'
import s from './Sort.module.scss'
import {
    AGE,
    DOWN,
    ID,
    NAME,
    sortByAge,
    sortByDown,
    sortById,
    sortByName,
    sortByUp,
    UP
} from "../../../store/usersReducer"

const Sort = () => {

    const {filter} = useSelector(state => state.users)

    const dispatch = useDispatch()

    const sortByIdHandler = () => {
        dispatch(sortById())
    }

    const sortByAgeHandler = () => {
        dispatch(sortByAge())
    }

    const sortByNameHandler = () => {
        dispatch(sortByName())
    }

    const sortUp = () => {
        dispatch(sortByUp())
    }

    const sortDown = () => {
        dispatch(sortByDown())
    }

    return (
        <div className={s.sortBlock}>
            <h3>Сортировка</h3>
            <div className={s.btnBlock1}>
                <button
                    onClick={sortByIdHandler}
                    className={cn({[s.active]: filter.sort === ID})}
                    disabled={filter.sort === ID}
                >
                    ID
                </button>
                <button
                    onClick={sortByNameHandler}
                    className={cn({[s.active]: filter.sort === NAME})}
                    disabled={filter.sort === NAME}
                >
                    Имя
                </button>
                <button
                    onClick={sortByAgeHandler}
                    className={cn({[s.active]: filter.sort === AGE})}
                    disabled={filter.sort === AGE}
                >
                    Возраст
                </button>
            </div>
            <div className={s.btnBlock2}>
                <button
                    onClick={sortUp}
                    className={cn({[s.active]: filter.upDown === UP})}
                    disabled={filter.upDown === UP}
                >
                    По возрастания
                </button>
                <button
                    onClick={sortDown}
                    className={cn({[s.active]: filter.upDown === DOWN})}
                    disabled={filter.upDown === DOWN}
                >
                    По убыванию
                </button>
            </div>
        </div>
    )
}

export default Sort