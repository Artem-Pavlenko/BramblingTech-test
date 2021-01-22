import {combineReducers, createStore, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import {usersReducer} from "./usersReducer"
import {appReducer} from "./appReducer"


const reducers = combineReducers({
    users: usersReducer,
    app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.__store__ = store

export default store