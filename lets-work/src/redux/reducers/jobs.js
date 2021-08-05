import {types} from '../actions/JobActions';
const defaultState = {allJobs:[],filteredJobs:[]};

function reducer(state = defaultState, {type,payload,filtered}){
    switch(type){
        case types.getAllJobs:{
            return {...state,allJobs:payload,filter:filtered};
        }
        case types.getFiltered:{
            return {...state,filteredJobs:payload,filter:filtered};
        }
        case types.setFilter:{
            return {...state,filter:filtered}
        }
        case types.filterById:{
            return {...state,filteredJobs:payload,filter:filtered}
        }
        case types.setFiltered:{
            return {...state,filteredJobs:payload,filter:filtered}
        }
        default:
            return state;
    }
}
export default reducer;