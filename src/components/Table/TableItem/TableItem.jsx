import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import s from './TableItem.module.scss'
import unFavourite from '../../../assets/unfavoriteStare.svg'
import favouriteIMG from '../../../assets/favoriteStare.svg'
import {setFavorite} from "../../../store/usersReducer"
import anonymous from '../../../assets/anonymous.svg'


const TableItem = ({name, age, phone, image, favourite, id, index}) => {

    const {photos} = useSelector(state => state.users)
    const dispatch = useDispatch()
    const [render, setRender] = useState(true)

    const onChangeFavorite = () => {
        dispatch(setFavorite(id))
    }

    const avatar = photos.find(el => el[image])

    useEffect(() => {
        let time = +(index + '00')
        setTimeout(() => setRender(false), time + 800)
        return () => setRender(true)
    }, [index])

    return (
            <div className={`${render ? s.fadeIn : s.itemBlock}`}>
                <div className={s.profileInfo}>
                    <img src={avatar ? avatar[image] : anonymous} alt=""/>
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