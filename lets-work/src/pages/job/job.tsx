import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router"
import { filterById } from "../../redux/actions/JobActions";
import { useEffect } from 'react';
import { Card } from '../../components/card/card';
import { setJobCard } from '../../components/card/setCard';
import { Button } from '../../components/button/button';
import { setBtnLink } from '../../components/button/setButton';
import ReplyIcon from '@material-ui/icons/Reply';
import { setCardFooter } from '../../components/card/cardFooter/setCardFooter';
export const Job = ()=>{
    const param:any = useParams();
    const jobs = useSelector((data:any)=>data.jobs);
    const job = jobs.filteredJobs;
    const jobPosition = 0;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(filterById(jobs,param.id));
    },[])
    
    if(jobs.allJobs.length === 0)return(
        <Redirect to="/"/>
    )
    return (
        <div className="container  justify-content-center">
            <div><Button btnProps={setBtnLink("Return to Jobs","",ReplyIcon)}/></div>
            {job.length==1 && <Card {...setJobCard(job[jobPosition],setCardFooter())}/>}
        </div>
    )
}