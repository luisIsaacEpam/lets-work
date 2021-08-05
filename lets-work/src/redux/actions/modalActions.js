export const types = {
    postJob:'postJob',
    editJob:'editJob',
} 

export const postJob = ()=>{
    return{
        type:types.postJob,
        payload:'post'
    }
}
export const editJob = ()=>{
    return{
        type:types.editJob,
        payload:'edit'
    }
}
