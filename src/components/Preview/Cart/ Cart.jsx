import React, {useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import s from './Cart.module.scss'
import unFavouriteIMG from '../../../assets/unfavoriteStare.svg'
import favouriteIMG from '../../../assets/favoriteStare.svg'
import shoeVideo from '../../../assets/videos/shoe.mp4'
import {setFavorite} from '../../../store/usersReducer'
import boyVideo from '../../../assets/videos/boy.mp4'
import anonymous from '../../../assets/anonymous.svg'


const Cart = ({name, age, phone, image, phrase, favourite, id, video, index}) => {

    const videoRef = useRef(null)
    const dispatch = useDispatch()
    const {photos} = useSelector(state => state.users)
    const [render, setRender] = useState(true)
    const [videoTouched, setVideoTouched] = useState(false)

    const avatar = photos.find(el => el[image])

    const onChangeFavorite = () => {
        dispatch(setFavorite(id))
    }

    const clickHandler = () => {
        setVideoTouched(true)
    }


    useEffect(() => {
        function autoplay() {
            if (videoRef.current) {
                const videoPosition = videoRef.current.getBoundingClientRect()
                const horizontal = Math.floor(document.documentElement.clientHeight)
                const start = Math.floor(horizontal / 3)
                const finish = Math.floor(2 * start)

                const videoTop = Math.floor(videoPosition.y)
                const videoBottom = Math.floor(videoPosition.y) + Math.floor(videoPosition.height)

                if ((videoTop > start && videoTop < finish) || (videoBottom > start && videoBottom < finish)) {
                    !videoTouched && videoRef.current.play()
                } else {
                    !videoTouched && videoRef.current.pause()
                }
            }
        }

        if (videoRef.current) {
            window.addEventListener('scroll', autoplay)
        }

        return () => window.removeEventListener('scroll', autoplay)

    }, [videoTouched])


    useEffect(() => {
        let time = +(index + '00')
        if (time > 2000) {
            time = 2000
        }
        setTimeout(() => setRender(false), time + 800)
        return () => setRender(true)
    }, [index])

    return (
        <div className={`${render ? s.fadeIn : s.cartBlock}`}>
            {video
                ? <div className={s.video}>
                    <video
                        ref={videoRef}
                        onClick={clickHandler}
                        controls
                        muted
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
                        <span>age: </span>
                        <span>{age}</span>
                    </div>
                    <div className={s.phone}>
                        <span>tel: </span>
                        <span>{phone}</span>
                    </div>
                    <div className={s.phrase}>
                        {phrase}
                    </div>
                </div>}
        </div>
    )
}

export default Cart