import axios from "axios";
import { ENDPOINT } from "./endpoints";

const instance = axios.create({
    baseURL: ENDPOINT, // API URL ENDPOINT (CLOUD FUNCTION)
});

export default instance;
