import React from 'react'
import s from './Cart.module.scss'
import favouriteIMG from '../../../assets/favoriteStare.svg'
import unFavouriteIMG from '../../../assets/unfavoriteStare.svg'
import temp from '../../../assets/img/images/cat.svg'
import {useDispatch} from "react-redux";
import {setFavorite} from "../../../store/usersReducer";

const Cart = ({name, age, phone, image, phrase, favourite, id}) => {

    const dispatch = useDispatch()

    const onChangeFavorite = () => {
        dispatch(setFavorite(id))
    }

    return (
        <div className={s.cartBlock}>
            <div className={s.profileInfo}>
                <div>
                    <img src={temp} alt=""/>
                    <span>{name}</span>
                </div>
                <img
                    onClick={onChangeFavorite}
                    className={s.star}
                    src={favourite ? favouriteIMG : unFavouriteIMG}
                    alt=""
                />
            </div>
            <div className={s.age}>
                <span>{age}</span>
            </div>
            <div className={s.phone}>
                <span>{phone}</span>
            </div>
            <div className={s.phrase}>
                {phrase}
            </div>
        </div>
    )
}

export default Cart