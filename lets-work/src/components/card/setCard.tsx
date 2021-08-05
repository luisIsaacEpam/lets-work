import { Job } from "../../interfaces/Job.interface"
import { CardJob } from "./cards"


export const setJobCard = (content:Job,footer?:any,isShort?:boolean)=>{
    return {
        type:CardJob,
        content,
        footer,
        isShort
    }
}