import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import cn from 'classnames'
import s from './Sort.module.scss'
import {sortByAge, sortById, sortByName} from "../../../store/usersReducer"

const Sort = () => {

    const [active, setActive] = useState(true)
    const [activeID, setActiveID] = useState(true)
    const [activeName, setActiveName] = useState(false)
    const [activeAge, setActiveAge] = useState(false)

    const dispatch = useDispatch()

    const sortByIdHandler = () => {
        dispatch(sortById(active))
        setActiveID(true)
        setActiveAge(false)
        setActiveName(false)
    }

    const sortByAgeHandler = () => {
        dispatch(sortByAge(active))
        setActiveID(false)
        setActiveAge(true)
        setActiveName(false)
    }

    const sortByNameHandler = () => {
        dispatch(sortByName(active))
        setActiveID(false)
        setActiveAge(false)
        setActiveName(true)
    }

    const sortUp = () => {
        setActive(true)
    }

    const sortDown = () => {
        setActive(false)
    }

    return (
        <div className={s.sortBlock}>
            <h3>Сортировка</h3>
            <div className={s.btnBlock1}>
                <button
                    onClick={sortByIdHandler}
                    className={cn({[s.active]: activeID})}
                    disabled={activeID}
                >
                    ID
                </button>
                <button
                    onClick={sortByNameHandler}
                    className={cn({[s.active]: activeName})}
                    disabled={activeName}
                >
                    Имя
                </button>
                <button
                    onClick={sortByAgeHandler}
                    className={cn({[s.active]: activeAge})}
                    disabled={activeAge}
                >
                    Возраст
                </button>
            </div>
            <div className={s.btnBlock2}>
                <button
                    onClick={sortUp}
                    className={cn({[s.active]: active})}
                    disabled={active}
                >
                    По возрастания
                </button>
                <button
                    onClick={sortDown}
                    className={cn({[s.active]: !active})}
                    disabled={!active}
                >
                    По убыванию
                </button>
            </div>
        </div>
    )
}

export default Sort