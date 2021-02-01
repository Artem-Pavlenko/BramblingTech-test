import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux"
import s from './Table.module.scss'
import TableItem from "./TableItem/TableItem"

const Table = () => {

    const {users} = useSelector(state => state.users)

    const [currentPortion, setCurrentPortion] = useState(20)

    const scrollHandler = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight
        const scrollTop = e.target.documentElement.scrollTop
        const windowView = window.innerHeight
        // общяя высота страници с учетом скрола - (текущее состояние от верха страници + видимая область) < 150
        if (scrollHeight - (scrollTop + windowView) < 150) {
            setCurrentPortion(prevState => prevState + 20)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)

        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])

    return (
        <div className={s.tableBlock}>
            {users.filter((u, i) => i < currentPortion).map((u, i) => <TableItem key={u.id} {...u} index={i}/>)}
        </div>
    )
}

export default Table