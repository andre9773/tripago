import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsPending(true)
        const fetchData = async () => {
            try{
                const res = await fetch(url)
                if(!res.ok){
                    throw new Error(res.statusText)
                }
                const json = await res.json()
                setIsPending(false)
                setData(json)
                setError(null)
            }catch(err){
                setError('Could not fetch the data')
                console.log(err.message);
            }
            
        }

        fetchData()
     }, [url])

     return { data, isPending, error}
}
