import { Job } from "./Job.interface";

export interface cardContent{
    type:any,
    content: any,
    title?: string,
}
export interface CardJobContent{
    content:Job;
    footer?:any;
    isShort?:boolean
}