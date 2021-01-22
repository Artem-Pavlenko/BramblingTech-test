import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import cn from 'classnames'
import s from './Sort.module.scss'
import {reloadingPage, searchUsers, sortBy, sortByUpDown} from "../../../store/usersReducer"
import {useHistory} from "react-router-dom"
import * as queryString from "querystring"
import {DOWN_SORT, SORT_BY_AGE, SORT_BY_ID, SORT_BY_NAME, UP_SORT} from "../../../store/types"
import {FormattedMessage} from "react-intl"
import Input from "../../../common/Input/Input"

const Sort = () => {

    const {filter} = useSelector(state => state.users)
    const dispatch = useDispatch()
    const history = useHistory()
    const [value, setValue] = useState('')

    const searchHandler = () => {
        dispatch(searchUsers(value))
    }

    const sortByIdHandler = () => {
        dispatch(sortBy(SORT_BY_ID))
    }

    const sortByAgeHandler = () => {
        dispatch(sortBy(SORT_BY_AGE))
    }

    const sortByNameHandler = () => {
        dispatch(sortBy(SORT_BY_NAME))
    }

    const sortUp = () => {
        dispatch(sortByUpDown(UP_SORT))
    }

    const sortDown = () => {
        dispatch(sortByUpDown(DOWN_SORT))
    }
    useEffect(() => {
        const filter = queryString.parse(history.location.search.substr(1))
        const filterView = queryString.parse(history.location.pathname.substr(1))
        console.log(filter)

        dispatch(reloadingPage(filter.upDown, filter.sort, filterView.view, filter.term))
        if (filter.term) {
            setValue(filter.term)
        }
    }, [])

    useEffect(() => {
        history.push({
            pathname: `/view=${filter.view}`,
            search: `?sort=${filter.sort}&upDown=${filter.upDown}&term=${filter.term}`
        })
    }, [filter.sort, filter.upDown, filter.view, filter.term])

    return (

        <div className={s.sortBlock}>
            <h3><FormattedMessage id={'sorting'} defaultMessage={'sorting'}/></h3>
            <div className={s.btnBlock1}>
                <button
                    onClick={sortByIdHandler}
                    className={cn({[s.active]: filter.sort === SORT_BY_ID})}
                    disabled={filter.sort === SORT_BY_ID}
                >
                    <FormattedMessage id={'id'} defaultMessage={'ID'}/>
                </button>
                <button
                    onClick={sortByNameHandler}
                    className={cn({[s.active]: filter.sort === SORT_BY_NAME})}
                    disabled={filter.sort === SORT_BY_NAME}
                >
                    <FormattedMessage id={'name'} defaultMessage={'Name'}/>
                </button>
                <button
                    onClick={sortByAgeHandler}
                    className={cn({[s.active]: filter.sort === SORT_BY_AGE})}
                    disabled={filter.sort === SORT_BY_AGE}
                >
                    <FormattedMessage id={'age'} defaultMessage={'Age'}/>
                </button>
            </div>
            <div className={s.btnBlock2}>
                <button
                    onClick={sortUp}
                    className={cn({[s.active]: filter.upDown === UP_SORT})}
                    disabled={filter.upDown === UP_SORT}
                >
                    <FormattedMessage id={'up'} defaultMessage={'Up'}/>
                </button>
                <button
                    onClick={sortDown}
                    className={cn({[s.active]: filter.upDown === DOWN_SORT})}
                    disabled={filter.upDown === DOWN_SORT}
                >
                    <FormattedMessage id={'down'} defaultMessage={'Down'}/>
                </button>
            </div>
            <div>
                <Input value={value} onChange={e => setValue(e.target.value)}/>
                <button onClick={searchHandler}>search</button>
            </div>
        </div>
    )
}

export default Sort