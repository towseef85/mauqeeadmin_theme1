import React from 'react'
import httpApi from '../Utilities/api'
import { message } from 'antd'


const ApiServices={

    list:(url,setState)=> httpApi.get(url).then(res=>{
        if(res.status === 200){
            setState(res.data)
           
        }

    }).catch(err=> message.error('Unable to Get Data')),
    create:async(url,values, formName)=>await httpApi.post(url,values).then(res=>{
        if(res.status=== 200){
            message.success('Data Added Successfully')
            formName.resetFields()
        }
    }).catch(err =>{
        console.log('error',err.response.data)
        message.error(`Failed error = ${err.response.data}`)
    }),
    update:async(url,values)=>await httpApi.put(url,values),
    get:(id,url)=> httpApi.get(`${url}/${id}`),
    delete:async(url,id)=> await httpApi.delete(url,id)

    

}

export default ApiServices;