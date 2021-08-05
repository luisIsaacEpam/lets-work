import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { letsWorkApi } from "../api/letsWorkApi"
import {getAllJobs} from "../redux/actions/JobActions";

export const useSetJobs = ()=>{
    const update = useSelector((data:any)=>data.update)
    const dispatch = useDispatch();
    useEffect(()=>{
            getJobs().then((jobs)=>dispatch(getAllJobs(jobs))).catch(res=>console.log(res));
    },[update])
    const getJobs = async ()=>{
        try {
            const url = 'jobs'
            const resp = await letsWorkApi.get(url);
            return resp.data 
        } catch (error) {
            throw error;
        }
    }
}