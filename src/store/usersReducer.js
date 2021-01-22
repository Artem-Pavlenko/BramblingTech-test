import {
    DOWN_SORT,
    SEARCH_NAME,
    SET_FAVORITE,
    SET_USERS,
    SORT_BY_AGE,
    SORT_BY_ID,
    SORT_BY_NAME,
    UP_SORT,
    VIEW_FILTER
} from "./types"
import cat from '../assets/img/images/cat.svg'
import dog from '../assets/img/images/dog.svg'
import fox from '../assets/img/images/fox.svg'
import koala from '../assets/img/images/koala.svg'
import lion from '../assets/img/images/lion.svg'
import owl from '../assets/img/images/owl.svg'
import penguin from '../assets/img/images/penguin.svg'
import pig from '../assets/img/images/pig.svg'
import raccoon from '../assets/img/images/raccoon.svg'
import react from '../assets/img/images/react.svg'
import sheep from '../assets/img/images/sheep.svg'
import {setLoading} from "./appReducer";
import {requestUsers} from "../api/userAPI";


export const TABLE = 'TABLE'
export const PREVIEW = 'PREVIEW'


const initState = {
    users: [],
    filter: {
        term: '',
        sort: SORT_BY_ID,
        upDown: UP_SORT,
        view: TABLE
    },
    photos: [
        {cat: cat}, {dog: dog}, {fox: fox}, {koala: koala},
        {lio: lion}, {owl: owl}, {penguin: penguin}, {pig: pig},
        {raccoon: raccoon}, {react: react}, {sheep: sheep}
    ]
}


export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.payload}
        case SET_FAVORITE:
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload ? {...u, favourite: !u.favourite} : u)
            }
        case SORT_BY_ID:
            return {
                ...state,
                filter: {...state.filter, sort: SORT_BY_ID},
                users: state.filter.upDown === UP_SORT
                    ? state.users.slice().sort((a, b) => a.id - b.id)
                    : state.users.slice().sort((a, b) => b.id - a.id)

            }
        case SORT_BY_AGE:
            return {
                ...state,
                filter: {...state.filter, sort: SORT_BY_AGE},
                users: state.filter.upDown === UP_SORT
                    ? state.users.slice().sort((a, b) => a.age - b.age)
                    : state.users.slice().sort((a, b) => b.age - a.age)
            }
        case SORT_BY_NAME:
            return {
                ...state,
                filter: {...state.filter, sort: SORT_BY_NAME},
                users: state.filter.upDown === UP_SORT
                    ? state.users.slice().sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    })
                    : state.users.slice().sort((a, b) => {
                        if (a.name < b.name) {
                            return 1;
                        }
                        if (a.name > b.name) {
                            return -1;
                        }
                        return 0;
                    })
            }
        case DOWN_SORT:
            switch (state.filter.sort) {
                case SORT_BY_ID:
                    return {
                        ...state, filter: {...state.filter, upDown: DOWN_SORT},
                        users: state.users.slice().sort((a, b) => b.id - a.id)
                    }
                case SORT_BY_AGE:
                    return {
                        ...state, filter: {...state.filter, upDown: DOWN_SORT},
                        users: state.users.slice().sort((a, b) => b.age - a.age)
                    }
                case SORT_BY_NAME:
                    return {
                        ...state, filter: {...state.filter, upDown: DOWN_SORT},
                        users: state.users.slice().sort((a, b) => {
                            if (a.name < b.name) {
                                return 1;
                            }
                            if (a.name > b.name) {
                                return -1;
                            }
                            return 0;
                        })
                    }
                default:
                    return {...state, filter: {...state.filter, upDown: DOWN_SORT}}
            }
        case UP_SORT:
            switch (state.filter.sort) {
                case SORT_BY_ID:
                    return {
                        ...state, filter: {...state.filter, upDown: UP_SORT},
                        users: state.users.slice().sort((a, b) => a.id - b.id)
                    }
                case SORT_BY_AGE:
                    return {
                        ...state, filter: {...state.filter, upDown: UP_SORT},
                        users: state.users.slice().sort((a, b) => a.age - b.age)
                    }
                case SORT_BY_NAME:
                    return {
                        ...state, filter: {...state.filter, upDown: UP_SORT},
                        users: state.users.slice().sort((a, b) => {
                            if (a.name > b.name) {
                                return 1;
                            }
                            if (a.name < b.name) {
                                return -1;
                            }
                            return 0;
                        })
                    }
                default:
                    return {...state, filter: {...state.filter, upDown: UP_SORT}}
            }
        case VIEW_FILTER:
            return {...state, filter: {...state.filter, view: action.payload}}
        case SEARCH_NAME:
            return {
                ...state,
                filter: {...state.filter, term: action.payload},
                users: state.users.filter(u => u.name.includes(action.payload))
            }
        default:
            return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, payload: users})
export const setFavorite = (id) => ({type: SET_FAVORITE, payload: id})

export const sortBy = (type) => ({type})
export const sortByUpDown = (type) => ({type})
export const setView = (type) => ({type: VIEW_FILTER, payload: type})
export const search = (name) => ({type: SEARCH_NAME, payload: name})

export const getUsers = () => (dispatch) => {
    requestUsers().then(res => dispatch(setUsers(res)))
}

export const searchUsers = (name) => (dispatch) => {
    requestUsers().then(res => {
        dispatch(setUsers(res))
        dispatch(search(name))
    })
}

export const reloadingPage = (upDown = UP_SORT, sort = SORT_BY_ID, view = TABLE, term) => (dispatch) => {
    dispatch(sortByUpDown(upDown))
    dispatch(sortBy(sort))
    dispatch(setView(view))
    dispatch(setLoading(false))
    if (term.trim()) {
        requestUsers().then(res => {
            dispatch(setUsers(res))
            dispatch(search(term))
        })
    }
}