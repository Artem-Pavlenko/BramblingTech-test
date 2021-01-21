import {combineReducers, createStore, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import {usersReducer} from "./usersReducer"


const reducers = combineReducers({
    users: usersReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.__store__ = store

export default store