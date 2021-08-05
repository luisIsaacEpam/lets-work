import axios from "axios";
const apiURL = 'http://localhost:3001/';
export const letsWorkApi = axios.create(
    {baseURL: apiURL}
);