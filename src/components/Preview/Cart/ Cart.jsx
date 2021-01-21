import React, {useState} from 'react'
import s from './Cart.module.scss'
import favouriteIMG from '../../../assets/favoriteStare.svg'
import unFavouriteIMG from '../../../assets/unfavoriteStare.svg'
import temp from '../../../assets/img/images/cat.svg'
import {useDispatch} from "react-redux"
import {setFavorite} from "../../../store/usersReducer"
import boyVideo from '../../../assets/videos/boy.mp4'
import shoeVideo from '../../../assets/videos/shoe.mp4'


const Cart = ({name, age, phone, image, phrase, favourite, id, video}) => {

    const dispatch = useDispatch()

    const [autoPlay, setAutoPlay] = useState(false)
    const [videoTouched, setVideoTouched] = useState(false)

    const onChangeFavorite = () => {
        dispatch(setFavorite(id))
    }

    const blurHandler = (e) => {
        if (e.currentTarget) {
            setVideoTouched(true)
        }
    }

    // console.log(window.innerHeight)

    function autoplay(e) {
        window.addEventListener('scroll', () => {
            console.log('offset :', e.target.offsetTop)
        })
    }

    const testClick = (e) => {
        // if (e.target.getBoundingClientRect().top < Math.floor(window.innerHeight/3)) {
        //     setAutoPlay(true)
        // }
        // верхний край страницы относительно элемента
        console.log('top:', e.target.getBoundingClientRect().top)

        const horizontalCenter = Math.floor(window.innerHeight)
        // console.log('clientY:', e.clientY)
        console.log('horizontal :',horizontalCenter)
        console.log('horizontal/3 :',horizontalCenter/3)
    }

    // console.log('height', document.body.scrollHeight)

    return (
        <div className={s.cartBlock}>
            {
                video
                    ? <video
                        onScroll={autoplay}
                        controls
                        autoPlay={autoPlay && !videoTouched}
                        muted
                        onBlur={blurHandler}
                        onClick={testClick}
                    >
                        <source src={(video === 'shoe' && shoeVideo) || (video === 'boy' && boyVideo)}/>
                    </video>
                    : <div className={s.wrapper}>
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
            }
        </div>
    )
}

export default Cart