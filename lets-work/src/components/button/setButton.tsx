import { svg } from "../../interfaces/ButtonComponent.interface";
import { BtnHeader, BtnLink } from './buttons';

export const setBtnHeader = (title:string,Icon?:svg)=>{
    return{
        Icon,
        title,
        type:BtnHeader
    }
}
export const setBtnLink = (title:string,link:any,Icon?:svg)=>{
    return{
        Icon,
        title,
        type:BtnLink,
        link
    }
}