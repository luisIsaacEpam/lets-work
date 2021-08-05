
import { Jobs } from '../../interfaces/Job.interface';
import { setJobCard } from '../card/setCard';

export interface GridComponent{
    elements:any[],
    setCard:Function,
    isShort:boolean
}

export const setGridJob = (jobs:Jobs[]):GridComponent=>{
    return{
        elements:jobs,
        setCard:setJobCard,
        isShort:true
    }
}