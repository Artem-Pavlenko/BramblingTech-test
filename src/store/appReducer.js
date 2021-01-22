import {SET_LANGUAGE, SET_LOADING} from "./types";

const initState = {
    loading: true,
    language: 'en'
}

export const appReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: action.payload}
        case SET_LANGUAGE:
            return {...state, language: (state.language === 'en' && 'ru') || (state.language === 'ru' && 'en')}
        default:
            return state
    }
}

export const setLoading = (isLoad) => ({type: SET_LOADING, payload: isLoad})
export const changeLanguage = (language) => ({type: SET_LANGUAGE, payload: language})