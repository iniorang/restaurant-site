import React, { useState, useEffect } from "react";

export default function useLoadJson() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [requestKey, setRequestKey] = useState(0)

    const reload = useCallback(() => {
        setRequestKey((prev) => prev + 1)
    }, [])

    useEffect(() => {
        const controller = new AbortController()

        async function fetchMenu(){
            try {
                setLoading(true)
                setError(null)
                const res = await fetch('/menu.json',{
                    signal: controller.signal
                })
                if(!res.ok){
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                const jsonData = await res.json()
                setData(jsonData)
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error)
                    console.error('Error loading food data:', error)
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false)
                }
            }
        }

        fetchMenu()
    }, [requestKey])

    return { data, loading, error, reload }
}