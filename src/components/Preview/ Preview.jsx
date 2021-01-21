import React from 'react'
import s from './Preview.module.scss'
import {useSelector} from "react-redux";
import Cart from "./Cart/ Cart";

const Preview = () => {

    const {users} = useSelector(state => state.users)

    return (
        <div className={s.previewBlock}>
            {users.map(u => <Cart key={u.id} {...u}/>)}
        </div>
    )
}

export default Preview