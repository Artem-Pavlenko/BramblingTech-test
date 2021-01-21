import React from 'react'
import {Transition} from 'react-transition-group'
import './Loader.scss'
import s from './Loader.module.scss'

const Preloader_transition = (props) => {


    return (
        <div className={s.mainBlock}>
            <div className={s.wrapper}>
                <Transition
                    in={props.showLoader}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                >
                    {state => <div className={`circle ${state}`}/>}
                </Transition>

            </div>
        </div>
    )
}

export default Preloader_transition