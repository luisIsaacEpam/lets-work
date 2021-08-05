import { createStore,combineReducers } from "redux";
import jobs from "../reducers/jobs"
import update from "../reducers/update"
import modalHandler from "../reducers/modalHandler"
const reducer = combineReducers({
    jobs,
    update,
    modalHandler
})

const store = createStore(reducer);

export default store;
