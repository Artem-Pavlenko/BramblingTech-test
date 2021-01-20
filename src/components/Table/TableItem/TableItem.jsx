import React from 'react'
import {useDispatch} from "react-redux"
import s from './TableItem.module.scss'
import unFavourite from '../../../assets/unfavoriteStare.svg'
import favourite from '../../../assets/favoriteStare.svg'
import photo from '../../../assets/img/images/cat.svg'
import {setFavorite} from "../../../store/usersReducer"

const TableItem = (props) => {

    const dispatch = useDispatch()

    const onChangeFavorite = () => {
        dispatch(setFavorite(props.id))
    }

    return (
        <div className={s.itemBlock}>
            <div className={s.profileInfo}>
                <img src={photo} alt=""/>
                <span>{props.name}</span>
            </div>
            <div className={s.age}>
                <span>{props.age}</span>
            </div>
            <div className={s.phone}>
                <span>{props.phone}</span>
            </div>
            <div className={s.favorite}>
                <img onClick={onChangeFavorite} src={props.favourite ? favourite : unFavourite} alt=""/>
            </div>
        </div>
    )
}

export default TableItem