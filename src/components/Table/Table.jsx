import React from 'react'
import s from './Table.module.scss'
import {useSelector} from "react-redux";
import TableItem from "./TableItem/TableItem";

const Table = () => {

    const {users} = useSelector(state => state.users)

    return (
        <div className={s.tableBlock}>
            {users.map(u =>
            <TableItem key={u.id} {...u}/>)}
        </div>
    )
}

export default Table