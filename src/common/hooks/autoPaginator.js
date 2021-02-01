import React, {useEffect, useState} from "react"

export const useAutoPaginator = () => {
    const [currentPortion, setCurrentPortion] = useState(20)

    const scrollHandler = (e) => {
        const scrollHeight = e.target.documentElement.scrollHeight
        const scrollTop = e.target.documentElement.scrollTop
        const windowView = window.innerHeight
        // общяя высота страници с учетом скрола - (текущее состояние от верха страници + видимая область) < 160
        if (scrollHeight - (scrollTop + windowView) < 160) {
            setCurrentPortion(prevState => prevState + 20)
            console.log('scroll')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])

    return currentPortion
}