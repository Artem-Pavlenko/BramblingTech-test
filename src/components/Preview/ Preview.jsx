import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import s from './Preview.module.scss'
import Cart from './Cart/ Cart'
import {useAutoPaginator} from "../../common/hooks/autoPaginator";

const Preview = () => {

    const {users} = useSelector(state => state.users)

    const portion = useAutoPaginator()

    return (
        <div className={s.previewBlock}>
            {users.filter((u, i) => i < portion).map((u, i) => <Cart key={u.id} {...u} index={i}/>)}
        </div>
    )
}


export default Preview