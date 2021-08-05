import {type as update} from '../actions/updateJobs';
const defaultState = false;

function reducer(state = defaultState,{type,payload}){
    switch(type){
        case update:{
            const newState = !state;
            return newState;
        }
        default:
            return state;
    }
}
export default reducer;