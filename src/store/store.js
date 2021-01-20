import {combineReducers, createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {usersReducer} from "./usersReducer"


const reducers = combineReducers({
    users: usersReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

window.__store__ = store

export default store