import React, {useEffect, useState} from "react"

export const useDelay = (time) => {

    const [render, setRender] = useState(true)

    useEffect(() => {
        let wait = +(time + '00')
        if (wait > 2000) {
            wait = 2000
        }
        setTimeout(() => setRender(false), wait + 800)
        return () => setRender(true)
        // [time] для сортировки
    }, [time])

    return render
}