import React from 'react'
import { useAppActionsContext } from '../components/AppContexts/AppContext'
import httpApi from '../Utilities/api'
import { message } from 'antd'

const brand={
    list:(setBrand)=> httpApi.get('Brand').then(res=>{
        if(res.status === 200){
            setBrand(res.data)
            message.success
        }

    }).catch(err=> message.error('Unable to Fetch Data'))
}