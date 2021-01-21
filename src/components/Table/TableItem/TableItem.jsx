import React from 'react'
import {useDispatch} from "react-redux"
import s from './TableItem.module.scss'
import unFavourite from '../../../assets/unfavoriteStare.svg'
import favouriteIMG from '../../../assets/favoriteStare.svg'
import photo from '../../../assets/img/images/cat.svg'
import {setFavorite} from "../../../store/usersReducer"

const TableItem = ({name, age, phone, image, favourite, id}) => {

    const dispatch = useDispatch()

    const onChangeFavorite = () => {
        dispatch(setFavorite(id))
    }

    return (
        <div className={s.itemBlock}>
            <div className={s.profileInfo}>
                <img src={photo} alt=""/>
                <span>{name}</span>
            </div>
            <div className={s.age}>
                <span>{age}</span>
            </div>
            <div className={s.phone}>
                <span>{phone}</span>
            </div>
            <div className={s.favorite}>
                <img onClick={onChangeFavorite} src={favourite ? favouriteIMG : unFavourite} alt=""/>
            </div>
        </div>
    )
}

export default TableItem