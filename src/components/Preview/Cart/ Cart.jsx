import React, {useEffect, useRef, useState} from 'react'
import s from './Cart.module.scss'
import favouriteIMG from '../../../assets/favoriteStare.svg'
import unFavouriteIMG from '../../../assets/unfavoriteStare.svg'
import {useDispatch, useSelector} from "react-redux"
import {setFavorite} from "../../../store/usersReducer"
import boyVideo from '../../../assets/videos/boy.mp4'
import shoeVideo from '../../../assets/videos/shoe.mp4'
import anonymous from '../../../assets/anonymous.svg'


const Cart = ({name, age, phone, image, phrase, favourite, id, video, index}) => {

    const videoRef = useRef(null)
    const dispatch = useDispatch()
    const {photos} = useSelector(state => state.users)
    const [render, setRender] = useState(true)
    const [autoPlay, setAutoPlay] = useState(false)
    const [videoTouched, setVideoTouched] = useState(false)

    const avatar = photos.find(el => el[image])

    const onChangeFavorite = () => {
        dispatch(setFavorite(id))
    }

    const blurHandler = (e) => {
        if (e.currentTarget) {
            setVideoTouched(true)
        }
    }

    if (videoRef.current) {
            window.addEventListener('scroll', () => {
                if (videoRef.current) {
                    const a = videoRef.current.getBoundingClientRect()
                    const horizontal = Math.floor(window.innerHeight)
                    const start = Math.floor(horizontal / 3)
                    const finish = Math.floor(2 * (horizontal / 3))
                    if (a.y < start && a.y < finish) {
                        setAutoPlay(true)
                    }
                }
            })
    }

    useEffect(() => {
        let time = +(index + '00')
        setTimeout(() => setRender(false), time + 800)
        return () => setRender(true)
    }, [index])

    return (
            <div className={`${render ? s.fadeIn : s.cartBlock}`}>
            {
                video
                    ? <div>
                        <video
                            ref={videoRef}
                            controls
                            autoPlay={autoPlay}
                            // autoPlay={autoPlay && !videoTouched}
                            muted
                            onBlur={blurHandler}
                            // onClick={testClick}
                        >
                            <source src={(video === 'shoe' && shoeVideo) || (video === 'boy' && boyVideo)}/>
                        </video>
                    </div>
                    : <div className={s.wrapper}>
                        <div className={s.profileInfo}>
                            <div>
                                <img src={avatar ? avatar[image] : anonymous} alt=""/>
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
            }
        </div>
    )
}

export default Cart