
import httpApi from "../Utilities/api";
import { message } from "antd";


const PostApi=async(controller,values,formname)=>{
    const abortController= new AbortController()
   try {
    const res = await httpApi.post(controller,values,{signal:abortController.signal})
    if(res.status !== 200){
        throw new Error(res.statusText)
    }
    message.success("Data Added Successfully")
    formname.resetFields()
   } catch (error) {
        if(error.name === "AbortError"){
            message.warning("Process was Aborted")
        }else{
            message.error(error.message)
        }
   }


}

const PutApi=async(controller,values,resetFuc)=>{
   
   try {
    const res = await httpApi.put(controller,values)
    if(res.status !== 200){
        throw new Error(res.statusText)
    }
    message.success("Data Added Successfully")
    resetFuc()
   } catch (error) {
            message.error(error.message)
   }


}

const ApiServices={
    PostApi,
    PutApi
}

export default ApiServices;

