import './App.css'
import Table from "./components/Table/Table"
import React, {useEffect, useState} from "react"
import {getUsers} from "./store/usersReducer"
import {useDispatch} from "react-redux"
import ControlBlock from "./components/ControlBlock/ControlBlock";


function App() {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect( () => {
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
            <Table/>
        </div>
    )
}

export default App
