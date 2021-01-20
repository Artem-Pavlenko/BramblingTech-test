import {DOWN_SORT, SET_FAVORITE, SET_USERS, SORT_BY_AGE, SORT_BY_ID, SORT_BY_NAME, UP_SORT} from "./types"


const initState = {
    users: [
        {
            "id": 0,
            "favourite": false,
            "name": "Gilbert Morton",
            "age": 30,
            "phone": "(369) 432-9206",
            "image": "sheep",
            "phrase": "Japman somam mes lizmasapa om zefopi ki wa ogju mofrajnir denba uc famoso opeipu woul.",
            "video": "shoe"
        }
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
            debugger
            return {
                ...state,
                users: action.payload
                    ? state.users.slice().sort((a, b) => a.id - b.id)
                    : state.users.slice().sort((a, b) => b.id - a.id)

            }
        case SORT_BY_AGE:
            return {
                ...state,
                users: action.payload
                    ? state.users.slice().sort((a, b) => a.age - b.age)
                    : state.users.slice().sort((a, b) => b.age - a.age)
            }
        case SORT_BY_NAME:
            return {
                ...state,
                users: action.payload
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

        default:
            return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, payload: users})
export const setFavorite = (id) => ({type: SET_FAVORITE, payload: id})
export const sortById = (up) => ({type: SORT_BY_ID, payload: up})
export const sortByAge = (up) => ({type: SORT_BY_AGE, payload: up})
export const sortByName = (up) => ({type: SORT_BY_NAME, payload: up})
export const sortByDown = () => ({type: DOWN_SORT})
export const sortByUp = () => ({type: UP_SORT})

export const getUsers = (users) => (dispatch) => {
    dispatch(setUsers(users))
}