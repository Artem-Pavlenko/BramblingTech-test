import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import cn from 'classnames'
import s from './View.module.scss'
import {PREVIEW, setView, TABLE} from "../../../store/usersReducer"
import {FormattedMessage} from "react-intl"
import {changeLanguage} from "../../../store/appReducer"


const View = () => {

    const {filter} = useSelector(state => state.users)
    const {language} = useSelector(state => state.app)
    const dispatch = useDispatch()


    const changePreviewHandler = () => {
        dispatch(setView(PREVIEW))
    }
    const changeTableHandler = () => {
        dispatch(setView(TABLE))
    }
    const changeLanguageHandler = () => {
        dispatch(changeLanguage())
    }

    return (
        <div className={s.viewBlock}>
            <div className={s.informationBlock}>
                <h3><FormattedMessage id={'view'} defaultMessage={'View'}/></h3>
                <div
                    className={cn(s.en, {[s.ru]: language === 'ru'})}
                    onClick={changeLanguageHandler}
                />
            </div>
            <div className={s.btnBlock}>
                <button
                    onClick={changeTableHandler}
                    className={cn({[s.active]: filter.view === TABLE})}
                    disabled={filter.view === TABLE}
                >
                    <FormattedMessage id={'table'} defaultMessage={'Table'}/>
                </button>
                <button
                    onClick={changePreviewHandler}
                    className={cn({[s.active]: filter.view === PREVIEW})}
                    disabled={filter.view === PREVIEW}
                >
                    <FormattedMessage id={'preview'} defaultMessage={'Preview'}/>
                </button>
            </div>
        </div>
    )
}

export default View