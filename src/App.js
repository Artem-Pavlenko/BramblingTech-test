import './App.css'
import Table from "./components/Table/Table"
import React, {useEffect, useState} from "react"
import {getUsers, TABLE} from "./store/usersReducer"
import {useDispatch, useSelector} from "react-redux"
import ControlBlock from "./components/ControlBlock/ControlBlock";
import Preview from "./components/Preview/ Preview";


function App() {

    const dispatch = useDispatch()
    const {filter} = useSelector(state => state.users)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3000/data.json')
            .then(response => response.json())
            .then(res => {
                dispatch(getUsers(res))
                setLoading(false)
            })
    }, [])

    if (loading) return null

    return (
        <div className="App">
            <ControlBlock/>
            {filter.view === TABLE
                ? <Table/>
                : <Preview/>}
        </div>
    )
}

export default App
