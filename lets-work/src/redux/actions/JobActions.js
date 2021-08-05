export const types = {
    getAllJobs:'getAllJobs',
    getFiltered:'getFiltered',
    setFilter:'setFilter',
    setFiltered:'setFiltered',
    filterById:'filterById'
} 

export const getAllJobs = (jobs)=>{
    return {
        type:types.getAllJobs,
        payload:jobs,
        filtered:false
    }
}
export const getFiltered = (jobs,search)=>{
    if(search){
        return{
            type:types.getFiltered,
            payload:jobs.allJobs.filter(job=>Object.values(job).join(" ").toLowerCase().includes(search.toLowerCase())),
            filtered:true
        }
    }else{
        return {
            type:types.getFiltered,
            payload:'',
            filtered:false
        }
    }  
}
export const setFiltered = (job)=>{
    const send = [];
    send.push(job);
    return {
        type:types.getFiltered,
        payload:send,
        filtered:true
    }
}
export const filterById = (jobs,search)=>{
    return{
        type:types.filterById,
        payload:jobs.allJobs.filter(job=>job.id==search),
        filtered:true
    }
}
export const setFilter = (value) =>{
    return{
        type:types.setFilter,
        filtered:value
    }
}