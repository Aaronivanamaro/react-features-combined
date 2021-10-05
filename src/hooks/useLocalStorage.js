import { useReducer, useEffect } from "react";

const useLocalStorage = (key, reducer) => {
    
    const [data, dispatch] = useReducer(reducer, [], () => {
        const localData = localStorage.getItem(key)
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [data])

    return [data, dispatch]
}
 
export default useLocalStorage;