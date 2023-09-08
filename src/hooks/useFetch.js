import { useState, useEffect } from "react";
import httpApi from "../Utilities/api";
import { useAppActionsContext } from "../components/AppContexts/AppContext";
import { message } from "antd";

export const useFetch =(controller)=>{
    const {setLoading,setError} = useAppActionsContext()
    const [response, setResponse] = useState(null)
   
    useEffect(()=>{  
        const abortController = new AbortController();
        const fetchData = async()=>{
            setLoading(true)
            try {
                const res = await httpApi.get(controller,{signal: abortController.signal})
                if(res.status !== 200){
                    throw new Error(res.statusText)
                }
                const data = res.data
                setResponse(data)
                setLoading(false)
            } catch (error) {
                if(error.name === "AbortError"){
                    message.warning("The Fetch was Aborted")
                }
                else{
                    setLoading(false)
                    setError('Could not Fetch data')
                    message.error(error.message)
                }
            }
        }
        fetchData()
        return ()=>{
            abortController.abort()
        }
    },[controller])

    return {response}

}