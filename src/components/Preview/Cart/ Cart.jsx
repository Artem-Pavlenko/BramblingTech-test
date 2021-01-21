import React, {useState, useRef} from 'react'
import s from './Cart.module.scss'
import favouriteIMG from '../../../assets/favoriteStare.svg'
import unFavouriteIMG from '../../../assets/unfavoriteStare.svg'
import {useDispatch, useSelector} from "react-redux"
import {setFavorite} from "../../../store/usersReducer"
import boyVideo from '../../../assets/videos/boy.mp4'
import shoeVideo from '../../../assets/videos/shoe.mp4'
import anonymous from '../../../assets/anonymous.svg'


const Cart = ({name, age, phone, image, phrase, favourite, id, video}) => {

    const dispatch = useDispatch()
    const {photos} = useSelector(state => state.users)

    const [autoPlay, setAutoPlay] = useState(true)
    const [videoTouched, setVideoTouched] = useState(false)

    const videoRef = useRef(null)

    const avatar = photos.find(el => el[image])

    const onChangeFavorite = () => {
        dispatch(setFavorite(id))
    }

    const blurHandler = (e) => {
        if (e.currentTarget) {
            setVideoTouched(true)
        }
    }

    // window.addEventListener('scroll', () => {
    //     if (videoRef.current) {
    //
    //         const horizontalCenter = Math.floor(window.innerHeight)
    //         const start = Math.floor(horizontalCenter / 3)
    //         const finish = Math.floor(2 * (horizontalCenter / 3))
    //
    //         if (videoRef.current.clientHeight < start && videoRef.current.clientHeight < finish) {
    //
    //             setAutoPlay(true)
    //         }
    //         // if (videoRef.current.clientHeight < start || videoRef.current.clientHeight > finish) {
    //         //     setAutoPlay(false)
    //         // }
    //         console.log(videoRef)
    //     }
    //
    //
    // })

    const testClick = (e) => {

        const horizontalCenter = Math.floor(window.innerHeight)
        const start = Math.floor(horizontalCenter / 3)
        const finish = Math.floor(2 * (horizontalCenter / 3))

        if (e.clientY > start && e.clientY < finish) {
            setAutoPlay(true)
        }


        // верхний край страницы относительно верхнего края элемента
        // console.log('top:', Math.floor(e.target.getBoundingClientRect().top))


        // верхний край страницы относительно нажатию
        console.log('clientY:', e.clientY)
        console.log('horizontal start :', Math.floor(horizontalCenter / 3))
        console.log('horizontal finish:', Math.floor(2 * (horizontalCenter / 3)))
    }

    // console.log('height', document.body.scrollHeight)

    return (
        <div className={s.cartBlock}>
            {
                video
                    ? <div ref={videoRef}>
                        <video
                            autoPlay={autoPlay}
                            muted
                            onBlur={blurHandler}
                            // onClick={testClick}
                            // ref={videoRef}
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