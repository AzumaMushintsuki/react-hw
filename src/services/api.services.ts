import axios from "axios";
import {ICar} from "../models/ICar.ts";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {'Content-Type': 'application/json'}
})
 export const getCars = async ():Promise<ICar[]> =>{
    const {data}= await axiosInstance.get<ICar[]>('/cars');
    return data
 }