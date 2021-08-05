
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '../../components/Grid/Grid';
import { setGridJob } from '../../components/Grid/setGrid';
import { setFilter } from '../../redux/actions/JobActions';
import { useEffect } from 'react';

export const Jobs = ()=>{
    const jobs = useSelector((data:any)=>data.jobs); 
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setFilter(false));
    },[])
    if(!jobs.filter) return(
        <div className="container">
            <Grid {...setGridJob(jobs.allJobs)}/>
        </div>
    )
    if(jobs.filter) return(
        <div className="container">
            <Grid {...setGridJob(jobs.filteredJobs)}/>
        </div>
    )
    return(<></>)
}