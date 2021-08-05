import {types} from '../actions/modalActions';
const defaultState = {};

function reducer(state = defaultState, {type,payload}){
    switch(type){
        case types.postJob:{
            return payload;
        }
        case types.editJob:{
            return payload;
        }
        default:
            return defaultState;
    }
}
export default reducer;