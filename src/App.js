import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import './App.css'
import ControlBlock from "./components/ControlBlock/ControlBlock"
import {getUsers, TABLE} from "./store/usersReducer"
import Preview from "./components/Preview/ Preview"
import Table from "./components/Table/Table"
import Loader from "./common/Loader/Loader"
import {IntlProvider} from "react-intl"
import messages from './i18n/messages/index'
import {requestUsers} from "./api/userAPI";


function App() {

    const dispatch = useDispatch()
    const {filter} = useSelector(state => state.users)
    const {loading, language} = useSelector(state => state.app)

    useEffect(() => {
        dispatch(getUsers())
    }, [])


    return (
        <IntlProvider locale={language} messages={messages[language]}>
            <div className="App">
                <ControlBlock/>
                {
                    loading
                        ? <Loader showLoader={loading}/>
                        : filter.view === TABLE
                        ? <Table/>
                        : <Preview/>
                }

            </div>
        </IntlProvider>
    )
}

export default App
