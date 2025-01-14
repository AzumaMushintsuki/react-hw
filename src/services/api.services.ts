import {IUser} from "../models/IUser.ts";

export const getUsers = async (page:string):Promise<IUser[]> =>{
    return await fetch('https://dummyjson.com/users?skip='+(+page-1)*30)
        .then(res=> res.json())
        .then(res=>res.users)
}