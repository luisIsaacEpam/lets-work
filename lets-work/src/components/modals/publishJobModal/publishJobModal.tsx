import './publishJob.css';
import { letsWorkApi } from '../../../api/letsWorkApi';
import { useForm } from 'react-hook-form';
import { formValidators } from './publishJobValidators';
import { Job } from '../../../interfaces/Job.interface';
import { CloseModal } from '../modals';
import { useDispatch, useSelector } from 'react-redux';
import {updateJobs} from '../../../redux/actions/updateJobs';
import { useEffect } from 'react';
import { setFiltered } from '../../../redux/actions/JobActions';

export const PublishJobModal = () => {
    const dispatch = useDispatch();
    const modalMode = useSelector((data:any)=>data.modalHandler)
    let jobs = useSelector((data:any)=>data.jobs);
    let jobEdit ={
        enterprise:'',
        address:'',
        requiredLevel:'Elementary School',
        description:'',
    }
    if(modalMode=="edit" && jobs)
    {
        jobEdit = jobs.filteredJobs[0];
    }
    useEffect(()=>{
        reset(jobEdit);
    },[modalMode])
    const { register, handleSubmit, formState: { errors },reset} = useForm<Job>({defaultValues:jobEdit});
    const handleFormSubmit = (job: Job) => {
        if(modalMode==="post"){
            postJob(job).then(()=>{
                reset()
                dispatch(updateJobs());
                CloseModal('publishJobModal');
            }).catch(res => console.log(res));
        }
        if(modalMode==="edit"){
            editJob(job).then(()=>{
                reset()
                dispatch(updateJobs());
                dispatch(setFiltered(job));
                CloseModal('publishJobModal');
            }).catch(res =>console.log(res))
        }
    }
    const postJob = async (job:Job) => {
        try {
            const url = 'jobs'
            await letsWorkApi.post(url,job);
        } catch (error) {
            throw error;
        }
    }
    const editJob = async (job:Job) => {
        try {
            const url = `jobs/${job.id}`
            await letsWorkApi.patch(url,job);
        } catch (error) {
            throw error;
        }
    }
    return (
        <>
            <div className="modal fade" id="publishJobModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title w-100 text-center">Publish a Job oportunity</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(handleFormSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="enterprise">Enterprise</label>
                                    <input type="text" className="form-control" id="enterprise"  {...register('enterprise', formValidators.enterpriseValidators)} placeholder="Epam Systems" />
                                    {errors.enterprise && <label className="text-danger">{errors.enterprise.message}</label>}
                                </div>
                                <div className="row">
                                    <div className="form-group col-4">
                                        <label htmlFor="salary">Salary</label>
                                        <input type="number" className="form-control" id="salary" {...register('salary')} placeholder="200" />
                                    </div>
                                    <div className="form-group col-8">
                                        <label htmlFor="adress">Address</label>
                                        <input type="text" className="form-control" id="address" {...register('address')} placeholder="Av Washigton" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="requiredLevel">Required Educational level</label>
                                    <select className="form-control" id="requiredLevel" {...register('requiredLevel')} >
                                        <option>Elementary School</option>
                                        <option>High School</option>
                                        <option>Bachelor Degree</option>
                                        <option>Master Degree</option>
                                        <option>Doctoral Degree</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Job Description</label>
                                    <textarea className="form-control description" id="description" {...register('description', formValidators.description)} ></textarea>
                                    {errors.description && <label className="text-danger">{errors.description.message}</label>}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-secondary">Publish</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}