import React from 'react'
import {useSelector} from "react-redux"
import s from './Table.module.scss'
import TableItem from "./TableItem/TableItem"
// import {CSSTransition, TransitionGroup} from "react-transition-group";

const Table = () => {

    const {users} = useSelector(state => state.users)

    return (
        <div className={s.tableBlock}>
                {users.map((u, i)=> <TableItem key={u.id} {...u} index={i}/>)}
        </div>
    )
}

export default Table