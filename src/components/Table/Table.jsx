import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux"
import s from './Table.module.scss'
import TableItem from "./TableItem/TableItem"
import {useAutoPaginator} from "../../common/hooks/autoPaginator";

const Table = () => {

    const {users} = useSelector(state => state.users)

    const portion = useAutoPaginator()

    return (
        <div className={s.tableBlock}>
            {users.filter((u, i) => i < portion).map((u, i) => <TableItem key={u.id} {...u} index={i}/>)}
        </div>
    )
}

export default Table