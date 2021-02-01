import React from 'react'
import {useSelector} from 'react-redux'
import s from './Preview.module.scss'
import Cart from './Cart/ Cart'

const Preview = () => {

    const {users} = useSelector(state => state.users)

    return (
            <div className={s.previewBlock}>
                {users.map((u, i)=> <Cart key={u.id} {...u} index={i}/>)}
            </div>
    )
}



export default Preview