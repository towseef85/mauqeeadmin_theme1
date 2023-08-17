import React,{useEffect, useState} from 'react'
import httpApi from '../Utilities/api';
import {  useAppActionsContext } from '../components/AppContexts/AppContext';

export default function useAxios(axiosParams) {
    const {setLoading} = useAppActionsContext()
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const fetchData = async (params) => {
        setLoading(true)
        try {
         const result = await httpApi.request(params);
         setResponse(result.data);
         } catch( error ) {
           setError(error);
         } finally {
           setLoading(false);
         }
      };
      useEffect(() => {
        fetchData(axiosParams);
    }, []);
  return {response, error};
}
