import React from 'react'
import httpApi from '../Utilities/api'
import { message } from 'antd'

const ApiServices={

    list:(url,setState)=> httpApi.get(url).then(res=>{
        if(res.status === 200){
            setState(res.data)
           
        }

    }).catch(err=> message.error('Unable to Get Data')),
    create:async(url,values, setform)=>await httpApi.post(url,values).then(res=>{
        if(res.status=== 200){
            message.success('Data Added Successfully')
            setform(true)
        }
    }).catch(err =>{
        console.log('error',err.response.data)
        message.error(`Failed error = ${err.response.data}`)
    }),
    get:(id,url, setState)=> httpApi.get(`${url}/${id}`),

    

}

export default ApiServices;