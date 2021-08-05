import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { letsWorkApi } from "../../../api/letsWorkApi";
import { Job } from "../../../interfaces/Job.interface";
import { useState, useEffect } from 'react';
import { CloseModal } from '../modals';
import { updateJobs } from '../../../redux/actions/updateJobs';

export const DeleteAdviseModal = () => {
    const jobs = useSelector((data:any)=>data.jobs);
    const dispatch = useDispatch()
    let [redirect,setRedirect] = useState(false); 
    let job:any;
    if(jobs){
         job = jobs.filteredJobs[0];
    }
    const handleDelete = ()=>{
        if(job){
                deleteJob(job).then(()=>{
                dispatch(updateJobs());
                CloseModal('deleteAdviseModal');
                setRedirect(true);
            }).catch(res => console.log(res));
        }
    }
    const deleteJob = async (job:Job) => {
        try {
            const url = `jobs/${job.id}`;
            await letsWorkApi.delete(url);
        } catch (error) {
            throw error;
        }
    }
    useEffect(()=>setRedirect(false),[redirect]);
    if(redirect) return <Redirect to='/'/>;
    if(!redirect) return (
        <div className="modal fade" id="deleteAdviseModal"  tabIndex={-1} role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                       {jobs && job && `Are you sure to delete ${job.enterprise} Offer?`}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
    return (<></>)
}